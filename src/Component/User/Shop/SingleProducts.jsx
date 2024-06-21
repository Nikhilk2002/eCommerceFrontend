import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Card, Container, Row, Col, Spinner, Alert } from 'react-bootstrap';
import { getProductDetails } from '../../../Services/UserApi';  

function SingleProducts() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProductById = async (productId) => {
      try {
        const response = await getProductDetails(productId);
        const { status, product} = response.data;
        if (status) {
          setProduct(product);
        }
      } catch (err) {
        console.error('Error fetching product:', err);
        setError('Failed to fetch product');
      } finally {
        setLoading(false);
      }
    };

    fetchProductById(productId);
  }, [productId]);

  if (loading) {
    return (
      <Container className="d-flex justify-content-center my-5">
        <Spinner animation="border" />
      </Container>
    );
  }

  if (error) {
    return (
      <Container className="d-flex justify-content-center my-5">
        <Alert variant="danger">{error}</Alert>
      </Container>
    );
  }

  if (!product) {
    return (
      <Container className="d-flex justify-content-center my-5">
        <Alert variant="danger">Product not found</Alert>
      </Container>
    );
  }

  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col md={8} lg={6}>
          <Card className="shadow-sm">
            <Card.Img 
              variant="top" 
              src={product.image} 
              alt={product.prod_name} 
              style={{ maxHeight: '400px', objectFit: 'cover' }}
            />
            <Card.Body>
              <Card.Title className="text-center">{product.prod_name}</Card.Title>
              <Card.Text className="text-muted text-center mb-4">{product.description}</Card.Text>
              <Card.Text className="text-center">
                <strong>Price: ₹{product.price}</strong>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default SingleProducts;

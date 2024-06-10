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
        const {status, product, message} = response.data;
        if(status){
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
      <Container className="d-flex justify-content-center">
        <Spinner animation="border" />
      </Container>
    );
  }

  if (error) {
    return (
      <Container className="d-flex justify-content-center">
        <Alert variant="danger">{error}</Alert>
      </Container>
    );
  }

  if (!product) {
    return (
      <Container className="d-flex justify-content-center">
        <Alert variant="danger">Product not found</Alert>
      </Container>
    );
  }

  return (
    <Container>
      <Row>
        <Col md={6}>
          <Card>
            <Card.Img variant="top" src={product.image} alt={product.prod_name} />
            <Card.Body>
              <Card.Title>{product.prod_name}</Card.Title>
              <Card.Text>{product.description}</Card.Text>
              <Card.Text>Price: ₹{product.price}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default SingleProducts;

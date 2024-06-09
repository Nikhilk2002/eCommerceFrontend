import React from 'react';
import { Card, Button, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './ProductCard.css';

function ProductCard({ product }) {
  const navigate = useNavigate();

  const handleImageClick = () => {
    navigate(`/product/${product.id}`);
  };

  return (
    <Col xs={12} sm={6} md={4} lg={3} xl={3}> 
      <Card className="product-card shadow p-3 mb-2">
        <Card.Img 
          variant="top" 
          src={product.image} 
          alt={product.prod_name} 
          className="product-image" 
          onClick={handleImageClick} 
          style={{ cursor: 'pointer' }} 
        />
        <Card.Body>
          <Card.Title className="product-name">{product.prod_name}</Card.Title>
          <Card.Text className="product-description">{product.description}</Card.Text>
          <Card.Text className="product-price">₹{product.price}</Card.Text>
          <Button variant="primary">Buy Now</Button>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default ProductCard;

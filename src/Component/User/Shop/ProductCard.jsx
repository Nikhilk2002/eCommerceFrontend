import React, { useState, useEffect } from 'react';
import { Card, Button, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './ProductCard.css';
import { addToCart } from '../../../Services/UserApi';
import { AddToWishlist, checkProductInWishlist } from '../../../Services/UserApi';
import { toast } from 'react-toastify';

function ProductCard({ product }) {
  const navigate = useNavigate();
  const [inWishlist, setInWishlist] = useState(false);

  useEffect(() => {
    const checkWishlistStatus = async () => {
      try {
        const response = await checkProductInWishlist(product._id);
        if (response.status === 200) {
          setInWishlist(response.data.inWishlist);
        }
      } catch (error) {
        console.error('Error checking wishlist status', error);
      }
    };

    checkWishlistStatus();
  }, [product._id]);

  const handleImageClick = () => {
    navigate(`/shop/${product._id}`);
  };

  const handleAddToCart = async () => {
    try {
      const response = await addToCart(product._id);
      if (response.status === 200) {
        toast.success('Product added to cart');
      } else {
        toast.error('Failed to add product to cart');
      }
    } catch (error) {
      console.error('Error adding product to cart', error);
      toast.error('An error occurred. Please try again.');
    }
  };

  const handleAddToWishlist = async () => {
    try {
      const productId = product._id;
      const response = await AddToWishlist(productId);

      if (response.status === 200) {
        toast.success('Product added to wishlist');
        setInWishlist(true);
      } else if (response.status === 201) {
        toast.success('Product removed from wishlist');
        setInWishlist(false);
      }
    } catch (error) {
      console.error('Error adding/removing product to wishlist', error);
      toast.error('An error occurred. Please try again.');
    }
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
          <div className="button-group">
            <Button variant="primary" onClick={handleAddToCart}>Add Cart</Button>
            <Button variant="secondary" onClick={handleAddToWishlist}>
              {inWishlist ? 'Remove' : 'Wishlist'}
            </Button>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default ProductCard;

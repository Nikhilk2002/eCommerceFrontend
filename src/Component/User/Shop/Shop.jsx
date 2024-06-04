// src/pages/Shop/Shop.js
import React, { useEffect, useState } from 'react';
import './Shop.css';
import { shopProduct } from '../../../Services/UserApi';
import ProductCard from './ProductCard';

function Shop() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await shopProduct();
        console.log(data); // Log the data to check its structure
        if (Array.isArray(data)) {
          setProducts(data);
        } else {
          throw new Error('Data format error: Expected an array');
        }
      } catch (error) {
        setError('Failed to fetch products. Please try again later.');
        console.error('Error fetching products:', error);
      }
    };
  
    fetchProducts();
  }, []);
  

  return (
    <div className="shop">
      <h1>Shop</h1>
      {error ? (
        <div className="error-message">{error}</div>
      ) : (
        <div className="product-list">
          {products.map((product) => (
            <ProductCard key={product._id} product={product} /> 
          ))}
        </div>
      )}
    </div>
  );
}

export default Shop;

import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getProductById, editProduct } from '../../../Services/AdminApi';
import { toast } from 'react-toastify';

const EditProduct = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const [productData, setProductData] = useState({
    name: '',
    description: '',
    category: '',
    price: '',
    imageUrl: ''
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await getProductById(productId);
        console.log('API response:', response); // Debugging: log the response

        if (response.status === 200 && response.data) {
          const { productList } = response.data;
          if (productList && Array.isArray(productList)) {
            const data = productList.find(p => p._id === productId);
            if (data) {
              setProductData({
                name: data.name,
                description: data.description,
                category: data.category,
                price: data.price,
                imageUrl: data.imageUrl
              });
            } else {
              throw new Error('Product not found in the response');
            }
          } else {
            throw new Error('productList is not an array or undefined');
          }
        } else {
          throw new Error('Failed to fetch product details');
        }
      } catch (error) {
        console.error('Error fetching product details:', error); 
        setError('Failed to fetch product details');
      } finally {
        setLoading(false);
      }
    };

    fetchProductDetails();
  }, [productId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData({ ...productData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!productData.name || !productData.description || !productData.category || !productData.price || !productData.imageUrl) {
      toast.error('Please fill in all fields');
      return;
    }
    if (isNaN(productData.price) || productData.price <= 0) {
      toast.error('Please enter a valid price');
      return;
    }
    try {
      const response = await editProduct(productId, productData);
      console.log('API response:', response);

      if (response.status === 200) {
        toast.success('Product updated successfully');
        navigate('/product');
      } else {
        throw new Error('Failed to update product');
      }
    } catch (error) {
      console.error('Error updating product:', error); // Debugging: log the error
      toast.error('Failed to update product');
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="edit-product">
      <h1>Edit Product</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={productData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            name="description"
            value={productData.description}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Category:</label>
          <input
            type="text"
            name="category"
            value={productData.category}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Price:</label>
          <input
            type="number"
            name="price"
            value={productData.price}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Image URL:</label>
          <input
            type="text"
            name="imageUrl"
            value={productData.imageUrl}
            onChange={handleChange}
          />
        </div>
        <button type="submit" disabled={loading}>Save</button>
      </form>
    </div>
  );
};

export default EditProduct;

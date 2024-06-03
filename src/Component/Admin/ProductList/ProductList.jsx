import React, { useEffect, useState } from 'react';
import './ProductList.css';
import { productList, deleteProduct } from '../../../Services/AdminApi';
import { FaEdit, FaTrashAlt, FaBan } from 'react-icons/fa';

function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await productList();
        console.log('API response:', response); // Log the response
        const data = response.data;

        if (data.status && Array.isArray(data.productList)) {
          setProducts(data.productList);
        } else {
          throw new Error('Data is not an array');
        }
      } catch (error) {
        console.error('Error fetching products:', error); // Log the error
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleEdit = (productId) => {
    // Logic to edit the product
    console.log('Edit product with ID:', productId);
  };

  const handleDelete = async (productId) => {
    try {
      // Call API to delete the product
      await deleteProduct(productId);
      // Update the products state after successful deletion
      setProducts(products.filter(product => product._id !== productId));
    } catch (error) {
      console.error('Error deleting product:', error);
      // Handle error appropriately, e.g., display an error message to the user
    }
  };

  const handleDisable = (productId) => {
    // Logic to disable the product
    console.log('Disable product with ID:', productId);
  };

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  return (
    <div className='admin-product'>
      <h1 className='admin-product__title'>Product List</h1>
      
      <table className='product-list-table'>
        <thead>
          <tr>
            <th>Items</th>
            <th>Product</th>
            <th>Description</th>
            <th>Category</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        
        <tbody>
          {products.map((product, index) => (
            <tr key={product._id} className="product-list-row">
              <td>{index + 1}</td>
              <td><img src={product.imageUrl} alt={`product${index + 1}`} className="product-image" /></td>
              <td>{product.description}</td>
              <td>{product.category}</td>
              <td>₹{product.price}</td>
              <td>
                <FaEdit className='icon icon--edit' onClick={() => handleEdit(product._id)} />
                <FaTrashAlt className='icon icon--delete' onClick={() => handleDelete(product._id)} />
                <FaBan className='icon icon--disable' onClick={() => handleDisable(product._id)} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductList;

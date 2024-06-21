import React, { useEffect, useState } from 'react';
import './Cart.css';
import { getCart, editCart, removeFromCart } from '../../../Services/UserApi';

function Cart() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetchCartItems();
  }, []);

  const fetchCartItems = async () => {
    try {
      const items = await getCart();
      setCartItems(items);
    } catch (error) {
      console.error('Failed to fetch cart items', error);
    }
  };

  const handleEdit = async (id, quantity) => {
    try {
      await editCart(id, { quantity });
      fetchCartItems();
    } catch (error) {
      console.error('Failed to edit cart item', error);
    }
  };

  const handleRemove = async (id) => {
    try {
      await removeFromCart(id);
      fetchCartItems();
    } catch (error) {
      console.error('Failed to remove cart item', error);
    }
  };

  const handleOrder = () => {
    // Implement order handling logic here
    console.log('Order button clicked');
    // For example, redirect to a checkout page or show a confirmation modal
  };

  return (
    <div className="cart">
      <h2>Your Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <ul>
            {cartItems.map(item => (
              <li key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} />
                <div className="item-details">
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                  <p>Price: ${item.price}</p>
                  <div className="quantity">
                    <button onClick={() => handleEdit(item.id, item.quantity - 1)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => handleEdit(item.id, item.quantity + 1)}>+</button>
                  </div>
                  <button className="remove-button" onClick={() => handleRemove(item.id)}>Remove</button>
                </div>
              </li>
            ))}
          </ul>
          <button className="order-button" onClick={handleOrder}>Order</button>
        </>
      )}
    </div>
  );
}

export default Cart;

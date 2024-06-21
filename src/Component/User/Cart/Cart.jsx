import React, { useEffect, useState } from "react";
import "./Cart.css";
import { getCart } from "../../../Services/UserApi";
import { useNavigate } from "react-router-dom";

function Cart() {
  const [cartData, setCartData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const fetchCart = async () => {
    try {
      const response = await getCart();
      setCartData(response.data);
    } catch (err) {
      setError(err.message);
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);


  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="cart">
      <div className="cartHeading">
        <h1>Shopping Cart</h1>
      </div>
      {cartData.length === 0 ? (
      <div className="emptyCart"> 
      <p>No product in wishlist</p>
      </div>
      ) : (
        <table className="cartTable">
          <thead>
            <tr>
              <th>Product Image</th>
              <th>Product Name</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Total Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cartData.map((item) => (
              <tr key={item.product._id}>
                <td>
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    style={{
                      width: "120px",
                      height: "120px",
                      cursor: "pointer",
                    }}
                    onClick={() => {
                      navigate(`/product/${item.product._id}`);
                    }}
                  />
                </td>
                <td>{item.product.prod_name}</td>
                <td>{item.quantity}</td>
                <td>{item.product.price}</td>
                <td>{(item.quantity * item.product.price)}</td>
                <td>
                  <button
                  className="cartBuyNowBtn">
                    Buy Now
                  </button>
                  <button
                  className="cartRemoveBtn">
                    Remove 
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Cart;
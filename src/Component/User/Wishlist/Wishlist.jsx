import React, { useEffect, useState } from "react";
import {
  addToCart,
  getWishlist,
  removeFromWishlist,
} from "../../../Services/UserApi";
import "./Wishlist.css";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function Wishlist() {
  const [wishlistData, setWishlistData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const fetchWishlist = async () => {
    try {
      const response = await getWishlist();
      if (Array.isArray(response.data)) {
        setWishlistData(response.data);
      } else {
        setError("Failed to fetch wishlist");
      }
    } catch (error) {
      setError("Failed to fetch wishlist");
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  };

  useEffect(() => {
    fetchWishlist();
  }, []);

  const handleAddToCart = async (productId) => {
    try {
      await addToCart(productId);
      toast.success("Product added to cart");
    } catch (error) {
      console.error("Failed to add product to cart", error);
      toast.error("Failed to add product to cart");
    }
  };

  const handleRemoveFromWishlist = async (productId) => {
    try {
      await removeFromWishlist(productId);
      setWishlistData(wishlistData.filter((item) => item._id !== productId));
      toast.success("Product removed from wishlist");
    } catch (error) {
      console.error("Failed to remove product from wishlist", error);
      toast.error("Failed to remove product from wishlist");
    }
  };

  if (error) return <div>{error}</div>;

  return (
    <div className="wishlist">
      <div className="wishlistHeading">
        <h1>My Wishlist</h1>
      </div>
      {wishlistData.length === 0 ? (
        <div className="emptyWishlist">
          <p>No Product in Wishlist</p>
        </div>
      ) : (
        <table className="wishTable">
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {wishlistData.map((item) => (
              <tr key={item._id}>
                <td>
                  <img
                    src={item.image}
                    alt={item.prod_name}
                    style={{
                      width: "300px",
                      height: "300px",
                      cursor: "pointer",
                    }}
                    onClick={() => {
                      navigate(`/product/${item._id}`);
                    }}
                  />
                </td>
                <td>{item.prod_name}</td>
                <td>{item.price.toFixed(2)}</td>
                <td>
                  <button
                    onClick={() => handleAddToCart(item._id)}
                    className="wishlistAddToCartBtn"
                  >
                    Add to Cart
                  </button>
                  <button
                    onClick={() => handleRemoveFromWishlist(item._id)}
                    className="wishlistRemoveFromWishlistBtn"
                  >
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

export default Wishlist;

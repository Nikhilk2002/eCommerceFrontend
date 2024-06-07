import React from 'react';
import './MainHome.css';
import { Link } from 'react-router-dom';

function MainHome() {
  return (
    <div className="main-home">
      <div className="welcome d-flex flex-column justify-content-center align-items-center">
        <h2 className="welcome-head text-center">Welcome to Retino Care</h2>
        <br />
        <h4 className="text-center">Choose the Best for Your Eyes and Face</h4>
        {/* <div className="login-sign mt-4">
          <Link to="/login" className="btn btn-primary mx-2">Login</Link>
          <Link to="/signup" className="btn btn-secondary mx-2">Signup</Link>
        </div> */}
      </div>

      <div className="add-page container-fluid d-flex justify-content-center align-items-center">
        <div className="ad-container row">
          <div className="col-md-6 text-center">
            <img 
              src="https://rukminim2.flixcart.com/image/612/612/xif0q/frame/x/3/i/50-na-ag2811gt-peter-jones-original-imagu5vdrgugwfwt.jpeg?q=70" 
              alt="Sunglasses Ad" 
              className="img-fluid ad-image rounded" 
            />
          </div>
          <div className="col-md-6 d-flex flex-column justify-content-center align-items-center ad-details">
            <h2>Discover Our Latest Collection</h2>
            <p>Upgrade your style with our trendy sunglasses!</p>
            <Link to="/shop" className="btn btn-primary home-btn">Shop Now</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainHome;

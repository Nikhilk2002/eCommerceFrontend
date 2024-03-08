import React from 'react'
import './MainHome.css'
import {Link} from 'react-router-dom'

function MainHome() {
  return (
    <div className="add-page">
    
    <div className="ad-container">
      <img src="https://rukminim2.flixcart.com/image/612/612/xif0q/frame/x/3/i/50-na-ag2811gt-peter-jones-original-imagu5vdrgugwfwt.jpeg?q=70" alt="Sunglasses Ad" className="ad-image" />
      <div className="ad-details">
        <h2>Discover Our Latest Collection</h2>
        <p>Upgrade your style with our trendy sunglasses!</p>
        <button className="btn"><Link to="/shop" id='shop-btn'>Shop Now</Link></button>
      </div>
    </div>
  </div>
  )
}

export default MainHome
import React from 'react';
import './Footer.css';
import {Link} from 'react-router-dom'

function Footer() {
  return (
    <div className='footermain'>
      <footer>
        <div className="footer-item">
          <h2>Menu</h2>
          <ul>
        <li><Link to="/">Home</Link></li> 
        <li> <Link to="/shop">Shop</Link></li> 
        <li><Link to="/adult">Adult</Link></li>
        <li><Link to="/child">Child</Link></li>
          </ul>
        </div>
        <div className="footer-item">
          <h2>About us</h2>
          <p className='about-discription'>Discover your perfect vision with us at Retono Care. Let us be your go-to destination for eyewear that reflects your personality and enhances your sight. Shop now and see the world through a clearer, more stylish lens with Retino Care.</p>
        </div>
        <div className="footer-item">
          <h2>Contact us</h2>
          <ul>
            <li><i className="fas fa-map-marker-alt"></i> Perinthalmanna Road,Chattiparamba</li>
            <li><i className="fas fa-phone"></i> 9526483580</li>
            <li><i className="fas fa-envelope"></i> retinocare@gmail.com</li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default Footer;

import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <div className='footermain'>
      <footer>
        <div className="footer-item">
          <h2>Menu</h2>
          <ul>
            <li><a href="/Home">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/sh0p">Shop</a></li>
            <li><a href="/blog">Blog</a></li>
          </ul>
        </div>
        <div className="footer-item">
          <h2>About us</h2>
          <p>Discover your perfect vision with us at Retono Care. Experience the blend of style, quality, and affordability in every pair of glasses we offer. Let us be your go-to destination for eyewear that reflects your personality and enhances your sight. Shop now and see the world through a clearer, more stylish lens with Retino Care.</p>
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

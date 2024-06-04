import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <div className="container-fluid mainHead">
      <div className="row align-items-center">
        <div className="col-lg-4 col-md-4 col-sm-12 logoContainer">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS2F7Cpn3L8RJU4Z1M9YMFEp5QQta32uHU3w&usqp=CAU" alt="logo" className="logoImage" />
          <h3 className="logoName">Retino Care</h3>
        </div>
        <div className="col-lg-8 col-md-8 col-sm-12 navLinks">
          <nav className="navbar navbar-expand-lg navbar-light">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse " id="navbarNav">
              <ul className="navbar-nav justify-content-center">
                <li className="nav-item">
                  <Link to="/" className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                  <Link to="/shop" className="nav-link">Shop</Link>
                </li>
                <li className="nav-item">
                  <Link to="/adult" className="nav-link">Adult</Link>
                </li>
                <li className="nav-item">
                  <Link to="/child" className="nav-link">Child</Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="searchBar">
            <button className="btn btn-primary  mr-2">Logout</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;

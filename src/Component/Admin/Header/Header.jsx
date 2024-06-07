import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <div className="navbar-brand d-flex align-items-center">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS2F7Cpn3L8RJU4Z1M9YMFEp5QQta32uHU3w&usqp=CAU" alt="logo" className="logoImage me-2" />
          <h3 className="logoName mb-0">Retino Care Admin</h3>
        </div>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link to="/admin/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/admin/add" className="nav-link">Add Product</Link>
            </li>
            <li className="nav-item">
              <Link to="/admin/user" className="nav-link">UserData</Link>
            </li>
            <li className="nav-item">
              <Link to="/admin/product" className="nav-link">ProductList</Link>
            </li>
        
          </ul>
          <button type="button" className="btn btn-outline-danger ms-3">Log Out</button>
        </div>
      </div>
    </header>
  );
}

export default Header;

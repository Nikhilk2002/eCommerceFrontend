import React, { useState, useEffect } from 'react';
import './Header.css';
import { Link, useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();
  const [isSolid, setIsSolid] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 50) {
        setIsSolid(true);
      } else {
        setIsSolid(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("adminjwt");
    if (token) {
      setLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("adminjwt");
    setLoggedIn(false);
    navigate("/admin/login");
    console.log("Logout clicked");
  };

  const handleLogin = () => {
    navigate("/admin/login");
  };

  return (
    <header className="navbar navbar-expand-lg navbar-light bg-light">
      <div className={`container-fluid mainHead ${isSolid ? 'solid' : ''}`}>
        <div className="navbar-brand d-flex align-items-center">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS2F7Cpn3L8RJU4Z1M9YMFEp5QQta32uHU3w&usqp=CAU" alt="logo" className="logoImage me-2" />
          <h3 className="logoName mb-0">Retino Care Admin</h3>
        </div>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/admin/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/admin/add" className="nav-link">Add Product</Link>
            </li>
            <li className="nav-item">
              <Link to="/admin/user" className="nav-link">UserList</Link>
            </li>
            <li className="nav-item">
              <Link to="/admin/product" className="nav-link">ProductList</Link>
            </li>
          </ul>
          <div>
            {loggedIn ? (
              <button onClick={handleLogout} className="btn btn-primary">Logout</button>
            ) : (
              <button onClick={handleLogin} className="btn btn-primary">Login</button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;

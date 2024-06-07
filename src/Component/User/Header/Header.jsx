import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';
import { userStatus } from '../../../Services/UserApi';

function Header() {
  const navigate = useNavigate();

  const [isSolid, setIsSolid] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  const fetchData = async () => {
    try {
      const { user } = await userStatus();
      if (user) {
        setLoggedIn(true);
        console.log(user + "111111111111");
      } else {
        setLoggedIn(false);
      }
    } catch (error) {
      console.log("Error fetching status:", error);
      setLoggedIn(false);
    }
  };

  useEffect(() => {
    fetchData();

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsSolid(scrollPosition > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("jwt");
    setLoggedIn(false);
    navigate("/login");
  };

  const handleLogin = () => navigate("/login");

  // const handleSignup = () => navigate("/signup");

  return (
    <div className={`container-fluid mainHead ${isSolid ? 'solid' : ''}`}>
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
              <div className="ml-auto">
                {loggedIn ? (
                  <button onClick={handleLogout} className="btn btn-primary">Logout</button>
                ) : (
                  <>
                    <button onClick={handleLogin} className="btn btn-primary mr-2">Login</button>
                    {/* <button onClick={handleSignup} className="btn btn-secondary">SignUp</button> */}
                  </>
                )}
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Header;

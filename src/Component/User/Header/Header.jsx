import React from 'react';
import './Header.css';
import {Link} from 'react-router-dom'

function Header() {
  return (
    <div className='mainHead'>
      <div className='logoContainer'>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS2F7Cpn3L8RJU4Z1M9YMFEp5QQta32uHU3w&usqp=CAU" alt="logo" className='logoImage' />
        <h3 className='logoName'>Retino Care</h3>
      </div>
      <div className='navLinks'>
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/adult">Adult</Link>
        <Link to="/child">Child</Link>

      </div>
      <div className='searchBar'>
        <input type="text" placeholder="Search..." />
        <button type="submit">Search</button>
      </div>
    </div>
  );
}

export default Header;

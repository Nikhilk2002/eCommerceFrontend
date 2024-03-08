import React from 'react';
import './Header.css';
import {Link} from 'react-router-dom'

function Header() {
  return (
    <div className='mainHead'>
      <div className='logoContainer'>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS2F7Cpn3L8RJU4Z1M9YMFEp5QQta32uHU3w&usqp=CAU" alt="logo" className='logoImage' />
        <h3 className='logoName'>Retino Care Admin</h3>
      </div>
      <div className='navLinks'>
        <Link to="/admin/">Home</Link>
        <Link to="/admin/user">UserData</Link>
        <Link to="/admin/product">ProductList</Link>
        <Link to="/admin/order">OrderList</Link>
       
        {/* <Link to="/adult">Adult</Link>
        <Link to="/child">Child</Link> */}


      </div>
      <div className='searchBar'>
        
        <button type="log-out">LogOut</button>
      </div>
    </div>
  );
}

export default Header;

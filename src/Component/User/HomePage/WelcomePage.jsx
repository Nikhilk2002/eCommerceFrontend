import React from 'react'
import './WelcomePage.css'
import {Link} from 'react-router-dom'

function WelcomePage() {
  return (
    <div className='welcome'>
        <h2 className="welcome-head">Welcome to Retino Care</h2>
        <br/>
        <h4>Choose The best For your eyes and Face</h4>
        <div className="login-sign">
          <Link to="/login" className='login'>Login</Link>
          <Link to="/signup" className='login'>Signup</Link>
        </div>

    </div>
  )
}

export default WelcomePage
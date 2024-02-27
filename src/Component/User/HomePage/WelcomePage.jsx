import React from 'react'
import './WelcomePage.css'

function WelcomePage() {
  return (
    <div className='welcome'>
        <h2 className="welcome-head">Welcome to Retino Care</h2>
        <br/>
        <h4>Choose The best For your eyes and Face</h4>
        <div className="login-sign">
          <a href="/login" className='login'>Login</a>
          <a href="/signup" className='signup'>Sign Up</a>
        </div>

    </div>
  )
}

export default WelcomePage
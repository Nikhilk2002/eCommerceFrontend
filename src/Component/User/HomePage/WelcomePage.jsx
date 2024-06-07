import React from 'react'
import './WelcomePage.css'
import { Link } from 'react-router-dom'

function WelcomePage() {
  return (
    <div className="welcome d-flex flex-column justify-content-center align-items-center vh-100">
      <h2 className="welcome-head text-center">Welcome to Retino Care</h2>
      <br />
      <h4 className="text-center">Choose the Best for Your Eyes and Face</h4>
      {/* <div className="login-sign mt-4">
        <Link to="/login" className="btn btn-primary mx-2">Login</Link>
        <Link to="/signup" className="btn btn-secondary mx-2">Signup</Link>
      </div> */}
    </div>
  )
}

export default WelcomePage

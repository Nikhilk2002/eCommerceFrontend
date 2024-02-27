import React from 'react'
import './Signup.css'
function Signup() {
  return (
    <div className='signup-div'>
        <div className="signup-Container">
            <h2>Signup</h2>
            <input type="text" placeholder='Enter Name' className='input-text' />
            <input type="email" placeholder='Enter Email Adress'   className='input-text'/>
            <input type="password" placeholder='Set your password'  className='input-text'/>
            <input type="password" placeholder='Conform your password'  className='input-text'/>
            <button  className='input-text' id='submit-btn'>Submitt</button>

        </div>
  
    </div>
  )
}

export default Signup
import React from 'react'

function Login() {
  return (
    <div className='container'>
        <div className="loginContainer">
            <h2>Login</h2>
            <input type="email" placeholder='Email adress' className='mail' />
            <input type="password" placeholder='Password' className='pswd' />
            <button className='pswd' id='submit-btn'>Continue</button>
            <p className='create-account'>Create an account?<a href="/signup" className='click'>Click here</a></p>
            <div className="terms-condition">
           
            <input type="checkbox" name='Check' className='checkbox'/>
            <label htmlFor="check" id='condition'> By continuing, i agree to the terms of use & privacy policy</label>     
            </div>
           
        </div>

    </div>
  )
}

export default Login
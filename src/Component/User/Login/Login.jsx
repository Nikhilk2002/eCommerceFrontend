import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './Login.css';
import {Link} from 'react-router-dom'

function Login() {
  return (
    <div className='container'>
      <div className="loginContainer">
        <h2>Login</h2>
        <Formik
          initialValues={{ email: '', password: '', agree: false }}
          validationSchema={Yup.object({
            email: Yup.string()
              .email('Invalid email address')
              .required('Required'),
            password: Yup.string()
              .required('Required')
              .min(6, 'Password must be at least 6 characters'),
            agree: Yup.boolean()
              .oneOf([true], 'You must agree to the terms and conditions'),
          })}
          onSubmit={(values, { setSubmitting }) => {
            
            console.log(values);
            setSubmitting(false);
          }}
        >
          <Form>
            <div>
              
              <Field type="email" id="email" name="email" placeholder='Email address' className='mail' />
              <ErrorMessage name="email" component="div" className="error" />
            </div>
            <div>
              
              <Field type="password" id="password" name="password" placeholder='Password' className='pswd' />
              <ErrorMessage name="password" component="div" className="error" />
            </div>
            {/* <div>
              <Field type="checkbox" id="agree" name="agree" className='checkbox'/>
              <label htmlFor="agree" id='condition'>By continuing, I agree to the terms of use & privacy policy</label>
              <ErrorMessage name="agree" component="div" className="error" />
            </div> */}

            <button type="submit" className='pswd' id='submit-btn'>Continue</button>
          </Form>
        </Formik>
        <p className='create-account'>Create an account?<Link to="/signup" id='click-here'>Click here</Link></p>
      </div>
    </div>
  )
}

export default Login;

import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './Signup.css';

function Signup() {
  const initialValues = {
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Confirm Password is required')
  });

  const handleSubmit = (values, { setSubmitting }) => {

    console.log(values);
    setSubmitting(false);
  };

  return (
    <div className='signup-div'>
      <div className="signup-Container">
        <h2>Signup</h2>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              <div>
                <Field type="text" name="name" placeholder="Enter Name" className="input-text" />
                <ErrorMessage name="name" component="div" className="error-message" />
              </div>

              <div>
                <Field type="email" name="email" placeholder="Enter Email Address" className="input-text" />
                <ErrorMessage name="email" component="div" className="error-message" />
              </div>

              <div>
                <Field type="password" name="password" placeholder="Set your password" className="input-text" />
                <ErrorMessage name="password" component="div" className="error-message" />
              </div>

              <div>
                <Field type="password" name="confirmPassword" placeholder="Confirm your password" className="input-text" />
                <ErrorMessage name="confirmPassword" component="div" className="error-message" />
              </div>

              <button type="submit" disabled={isSubmitting} className="input-text" id="submit-btn">
                {isSubmitting ? 'Submitting...' : 'Submit'}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default Signup;

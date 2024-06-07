import React from 'react';
import './Signup.css';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { signup } from '../../../Services/UserApi';

function Signup() {
  const navigate = useNavigate();

  const initialValues = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters long")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
  });

  const onSubmit = async (values) => {
    console.log(values);

    const { data } = await signup(values);
    navigate("/login");
  }

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <div className="signup-div container">
      <div className="signup-container card shadow p-3 mb-2">
        <h2 className="text-center mb-4">Signup</h2>
        <form onSubmit={formik.handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              placeholder="Enter Name"
              className="form-control"
            />
            {formik.errors.name && <div className="text-danger">{formik.errors.name}</div>}
          </div>
          <div className="form-group">
            <input
              type="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              placeholder="Enter Email Address"
              className="form-control"
            />
            {formik.errors.email && <div className="text-danger">{formik.errors.email}</div>}
          </div>
          <div className="form-group">
            <input
              type="password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              placeholder="Set your password"
              className="form-control"
            />
            {formik.errors.password && <div className="text-danger">{formik.errors.password}</div>}
          </div>
          <div className="form-group">
            <input
              type="password"
              name="confirmPassword"
              value={formik.values.confirmPassword}
              onChange={formik.handleChange}
              placeholder="Confirm your password"
              className="form-control"
            />
            {formik.errors.confirmPassword && <div className="text-danger">{formik.errors.confirmPassword}</div>}
          </div>

          <button type="submit" className="btn btn-primary btn-block">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Signup;

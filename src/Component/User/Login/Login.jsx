import React from 'react';
import "./Login.css"
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../../../Services/UserApi';
import { toast } from 'react-toastify'; 

function Login() {
  const navigate = useNavigate();

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        console.log("On Submit !!!");
        const { data } = await login(values);
        console.log(data, "Admin Return Data !!!");
        if (data.created) {
          localStorage.setItem("jwt", data.token);
          toast.success("Login Success", { position: "top-right" });
          navigate("/");
        } else {
          toast.error(data.message, { position: "top-right" });
        }
      } catch (error) {
        console.log(error)
      }
    }
  });

  return (
    <div className="login-page">
      <div className="loginContainer">
        <h2>Login</h2>
        <form onSubmit={formik.handleSubmit}>
          <div>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email address"
              className="mail"
              value={formik.values.email}
              onChange={formik.handleChange}
            />
            {formik.errors.email && <div className="error">{formik.errors.email}</div>}
          </div>
          <div>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              className="pswd"
              value={formik.values.password}
              onChange={formik.handleChange}
            />
            {formik.errors.password && <div className="error">{formik.errors.password}</div>}
          </div>
          <button type="submit" className="pswd" id="submit-btn">
            Continue
          </button>
        </form>
        <p className="create-account">
          Create an account?
          <Link to="/signup" id="click-here">
            Click here
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;

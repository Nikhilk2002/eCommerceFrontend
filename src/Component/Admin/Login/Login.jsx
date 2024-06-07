import React from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { login } from "../../../Services/AdminApi";

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
        const { data } = await login(values);
        if (data.created) {
          localStorage.setItem("adminjwt", data.token);
          toast.success("Login Success", { position: "top-right" });
          navigate("/admin");
        } else {
          toast.error(data.message, { position: "top-right" });
        }
      } catch (error) {
        console.log(error);
      }
    },
  });

  return (
    <div className="loginpage d-flex align-items-center justify-content-center vh-100">
      <div className="loginContainer p-4 bg-light rounded shadow">
        <form onSubmit={formik.handleSubmit}>
          <h2 className="text-center mb-4">Admin Login</h2>
          <p className="text-center mb-4">Please enter your email and password.</p>
          <div className="mb-3">
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Enter your email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.email && formik.errors.email && (
              <p className="error-message text-danger mt-1">
                {formik.errors.email}
              </p>
            )}
          </div>
          <div className="mb-3">
            <input
              type="password"
              name="password"
              className="form-control"
              placeholder="Enter your password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.password && formik.errors.password && (
              <p className="error-message text-danger mt-1">
                {formik.errors.password}
              </p>
            )}
          </div>
          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;

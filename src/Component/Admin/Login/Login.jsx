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
      try{
        console.log("On Submit !!!");
        const {data} = await login(values);
        console.log(data, "Admin Return Data !!!");
        if(data.created){
          localStorage.setItem("jwt", data.token);
          toast.success("Login Success", {position: "top-right"});
          navigate("/admin");
        } else {
          toast.error(data.message, {position: "top-right"});
        }
      } catch(error){
        console.log(error)
      }
    }
  })

  return (
    <>
      <div className="loginpage">
       
        <div className="loginContainer">
          
            <form onSubmit={formik.handleSubmit}>
              <h2>Aadmin Login</h2>
              <p>Please enter your email and password.</p>
              <div>
               
               
                <div className="admin-mail">
                 
                  <input
                    type="email"
                    name="email"
                    className="pswd-login"
                   
                   
                    placeholder="Enter your email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.email && formik.errors.email && (
                    <p
                      className="error-message"
                      style={{ marginTop: "5px", color: "red" }}
                    >
                      {formik.errors.email}
                    </p>
                  )}
                </div>
                <br />
                <div className="admin-mail">
                  
                  <input
                    type="password"
                    name="password"
                    className="pswd-login"
                  
                   
                    placeholder="Enter your password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.password && formik.errors.password && (
                    <p
                      className="error-message"
                      style={{ marginTop: "5px", color: "red" }}
                    >
                      {formik.errors.password}
                    </p>
                  )}
                </div>
                <br />
                <div>
                  <button type="submit" id="submit-btn">
                    Login
                  </button>
                
                </div>
             </div>
            
            </form>
        
          
        </div>
      </div>
    </>
  );
}

export default Login;
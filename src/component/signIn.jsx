import React from "react";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import logo from "../assets/logo.svg";
import Input from "./input";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';


export default function SignIn() {
  const navigate = useNavigate();
  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email format").required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const handleSubmit = async (values) => {
    try {
      const response = await axios.post("https://hargon-admin-be.onrender.com/api/v1/hargon/admin/auth/generate_login_otp", {
        email: values.email,
        password: values.password,
      });

      const { data } = response;

      if (data.code === 200) {
        sessionStorage.setItem("email", values.email);
        navigate("/login/otp", { state: { email: values.email } });
      } else if (data.code === 400) { 
        toast.error("User does not exist or wrong credentials");
      } else {
      }
      console.log("API Response:", response.data);
    } catch (error) {
      console.error("API Error:", error);
    }
  };

  return (
    <div className="login-sec">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="logo" className="img-fluid" />
        </Link>
      </div>
      <div className="login-box">
        <div className="sign-box">
          <h3 className="text-center">Welcome to the admin dashboard</h3>
          <h6 className="text-center">
            Sign In to hargon’s admin dashboard and start putting things right
          </h6>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {(formik) => (
              <Form>
                <div className="mb-4">
                  <Input
                    type="email"
                    name="email"
                    placeholder="Email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                  />
                  {formik.touched.email && formik.errors.email && (
                    <div className="text-danger" style={{fontSize:"10px"}}>{formik.errors.email}</div>
                  )}
                </div>
                <div className="mb-4">
                  <Input
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.password}
                  />
                  {formik.touched.password && formik.errors.password && (
                    <div className="text-danger" style={{fontSize:"10px"}}>{formik.errors.password}</div>
                  )}
                </div>
                <div className="mb-4 forgot-p">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                      Remember Password
                    </label>
                  </div>
                  <Link to="/recover-password">
                    <h6 className="float-end" style={{ marginTop: "-21px" }}>
                      Forgot Password?
                    </h6>
                  </Link>
                </div>
                <button
                  type="submit"
                  className="btn btn-primary btn-main rounded-pill px-5 py-3 w-100"
                  disabled={formik.isSubmitting}
                >
                  {formik.isSubmitting ? "Signing In..." : "Sign In"}
                </button>
              </Form>
            )}
          </Formik>
          <div className="text-center mt-4">
            <p>
              Don’t have an account?{" "}
              <Link to="/sign-up" className="" style={{ color: "#23A323" }}>
                Create account
              </Link>
            </p>
          </div>
        </div>
      </div>
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
}

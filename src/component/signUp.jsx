import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import logo from "../assets/logo.svg";
import Input from "./input";
import { Link } from "react-router-dom";
import { Formik } from "formik";
import validate from "../validations/signupValidation";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";


export default function SignUp() {
  const navigate = useNavigate();
  const [submitting, setSubmitting] = useState(false);
  const [serverResponse, setServerResponse] = useState(null);

  const handleSubmit = async (values) => {
    setSubmitting(true);

      try {
      const response = await axios.post("https://hargon-admin-be.onrender.com/api/v1/hargon/admin/auth/contact_verification", values);
      const { data } = response;

      if (data.code === 200) {
        localStorage.setItem("email", values.email);
        navigate("/signup/otp", { state: { email: values.email } });
      } else if (data.code === 400) {
        if (data.message === "Phone exists already") {
          toast.error("Phone number is already taken.");
        } else if (data.message === "Email exists already") {
          toast.error("Email is already taken.");
        } else {
          toast.error("An error occurred. Please try again later.");
        }
      } else {
        toast.error("An error occurred. Please try again later.");
      }

      setServerResponse(response.data);
      console.log("Server Response:", response.data);
    } catch (error) {
      console.error("Error sending data:", error);
    }

    setSubmitting(false);
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
          <h3 className="text-center">Welcome to the admin dashboard </h3>
          <h6 className="text-center">
            Signup to hargon’s admin dashboard and start putting things right
          </h6>
          <Formik
            initialValues={{
              first_name: "",
              last_name: "",
              phone: "",
              email: "",
              password: "",
            }}
            validate={validate}
            onSubmit={handleSubmit}
          >
            {({ values, handleChange, handleSubmit, errors }) => (
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-4">
                  <Form.Control
                    type="text"
                    name="first_name"
                    placeholder="First Name"
                    value={values.first_name}
                    onChange={handleChange}
                  />
                  {errors.first_name && <div className="text-danger" style={{fontSize:"10px"}}>{errors.first_name}</div>}
                </Form.Group>
                <Form.Group className="mb-4">
                  <Form.Control
                    type="text"
                    name="last_name"
                    placeholder="Last Name"
                    value={values.last_name}
                    onChange={handleChange}
                  />
                  {errors.last_name && <div className="text-danger" style={{fontSize:"10px"}}>{errors.last_name}</div>}
                </Form.Group>
                <Form.Group className="mb-4">
                  <Form.Control
                    type="tel"
                    name="phone"
                    placeholder="Phone"
                    value={values.phone}
                    onChange={handleChange}
                  />
                  {errors.phone && <div className="text-danger" style={{fontSize:"10px"}}>{errors.phone}</div>}
                </Form.Group>
                <Form.Group className="mb-4">
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={values.email}
                    onChange={handleChange}
                  />
                  {errors.email && <div className="text-danger" style={{fontSize:"10px"}}>{errors.email}</div>}
                </Form.Group>
                <Form.Group className="mb-4">
                  <Input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={values.password}
                    onChange={handleChange}
                  />
                  {errors.password && <div className="text-danger" style={{fontSize:"10px"}}>{errors.password}</div>}
                </Form.Group>
                <Button
                  type="submit"
                  disabled={submitting}
                  className="btn btn-primary btn-main rounded-pill px-5 py-3 w-100"
                >
                  {submitting ? "Submitting..." : "Create Account"}
                </Button>
                <div className="text-center mt-4">
                  <p>
                    Already have an account?{" "}
                    <Link to="/" className="" style={{ color: "#23A323" }}>
                      Sign In
                    </Link>
                  </p>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
}

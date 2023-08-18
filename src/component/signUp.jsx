import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import logo from "../assets/logo.svg";
import Input from "./input";
import { Link } from "react-router-dom";
import { Formik } from "formik";
import validate from "../validations/signupValidation";
import axios from "axios";

export default function SignUp() {
  const [submitting, setSubmitting] = useState(false);
  const [serverResponse, setServerResponse] = useState(null);

  const handleSubmit = async (values) => {
    setSubmitting(true);

    try {
      const response = await axios.post("https://jsonplaceholder.typicode.com/posts", values); 
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
              fullName: "",
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
                    name="fullName"
                    placeholder="Name"
                    value={values.fullName}
                    onChange={handleChange}
                  />
                  {errors.fullName && <div className="text-danger" style={{fontSize:"10px"}}>{errors.fullName}</div>}
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
    </div>
  );
}

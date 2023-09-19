// OTP for New User

import logo from "../assets/logo.svg";
import OtpInput from "react18-input-otp";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useFormik } from "formik";
import axios from "axios";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

export default function UserOtp() {
  const location = useLocation();
  const registeredEmail = location.state ? location.state.email : '';
  const [otp, setOtp] = useState('');
  const [verifying, setVerifying] = useState(false);
  const navigate = useNavigate();

  const handleChange = (enteredOtp) => {
    setOtp(enteredOtp);
  };

  const formik = useFormik({
    initialValues: {
      otp: '',
    },
    onSubmit: (values, {resetForm}) => {
      setVerifying(true); 
      const apiUrl = 'https://hargon-admin-be.onrender.com/api/v1/hargon/admin/auth/register';

      const otpData = {
        email: registeredEmail,
        otp: otp,
      };

      axios.post(apiUrl, otpData)
        .then(function (response) {
          if (response.data.code === 200) {
            navigate("/dashboard");
          } else {
            console.log("OTP verification failed:", response.data);
            toast.error("Invalid OTP. Please try again.");
            resetForm();
          }
        })
        .catch(function (error) {
          console.error("Error sending OTP verification request:", error);
        })
        .finally(() => {
          setVerifying(false); 
        });
    },
  });

  return (
    <div className="login-sec">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="logo" className="img-fluid" />
        </Link>
      </div>
      <div className="login-box">
        <div className="sign-box">
          <h3 className="text-center">OTP Verification</h3>
          <h6 className="text-center">We sent you an OTP code to this email <span className="text-black">{registeredEmail}</span> </h6>
          <div className="my-4">
            <form onSubmit={formik.handleSubmit}>
              <OtpInput
                name="otp"
                value={otp} 
                onChange={handleChange} 
                numInputs={7}
                isInputNum={true}
                inputStyle="form-control otp-form"
              />
              <button type="submit" className="btn btn-primary btn-main mt-4 rounded-pill px-5 py-3 w-100">
                {verifying ? "Verifying..." : "Verify"}
              </button>
            </form>
          </div>
          <h4 className="mb-3 text-black">Didn’t get an OTP code? <span style={{ color: "#228B22" }}>RESEND</span></h4>
        </div>
      </div>
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar />
    </div>
  );
}

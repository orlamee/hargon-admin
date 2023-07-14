import logo from "../assets/logo.svg"
import OtpInput from "react18-input-otp";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function LoginOtp () {
  const [otp, setOtp] = useState('');
  const handleChange = (enteredOtp) => {
    setOtp(enteredOtp);
  };
  return (
    <div className="login-sec">
      <div className="logo">
        <Link to="/"><img src={logo} alt="logo" className="img-fluid" /></Link>
      </div>
      <div className="login-box">
        <div className="sign-box">
          <h3 className="text-center">OTP Verification</h3>
          <h6 className="text-center">We sent you an OTP code to this email <span className="text-black">AyodeleVincentOlagunju888@gmail.com</span> </h6>
          <div className="my-4">
            <OtpInput value={otp} onChange={handleChange} numInputs={6} inputStyle="form-control otp-form" />
          </div>
          <h4 className="mb-3 text-black">Didn’t get an OTP code? <span style={{color: "#228B22"}}>RESEND</span></h4>
          <button to="" type="button" className="btn btn-primary btn-main rounded-pill px-5 py-3 w-100">Verify</button>
        </div>
      </div>
    </div>
  )
}
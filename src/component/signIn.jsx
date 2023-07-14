import { Form } from "react-bootstrap"
import logo from "../assets/logo.svg"
import Input from "./input"
import { Link } from "react-router-dom"

export default function SignIn () {
  return (
    <div className="login-sec">
      <div className="logo">
        <Link to="/"><img src={logo} alt="logo" className="img-fluid" /></Link>
      </div>
      <div className="login-box">
        <div className="sign-box">
          <h3 className="text-center">Welcome to the admin dashboard </h3>
          <h6 className="text-center"> Sign In to hargon’s admin dashboard and start putting things right</h6>
          <Form className="mt-4">
            <Form.Group className="mb-4">
              <Form.Control type="email" placeholder="Email" />
            </Form.Group>
            <Form.Group className="mb-4">
              <Input
                type="password"
                name="password"
                placeholder="Password"
              />
            </Form.Group>
            <div className="mb-4 forgot-p">
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                <label className="form-check-label" for="flexCheckDefault">
                  Remember Password
                </label>
              </div>
              <Link to="/recover-password"><h6 className="float-end" style={{marginTop: "-21px"}}>Forgot Password?</h6></Link>
            </div>
            <Link to="/login/otp" type="button" className="btn btn-primary btn-main rounded-pill px-5 py-3 w-100">Sign In</Link>
            <div className="text-center mt-4">
              <p>Don’t have an account?  <Link to="/sign-up" className="" style={{color: "#23A323"}}>Create account</Link></p>
            </div>
          </Form>
        </div>
      </div>
    </div>
  )
}
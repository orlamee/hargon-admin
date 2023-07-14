import { Form } from "react-bootstrap"
import logo from "../assets/logo.svg"
import { Link } from "react-router-dom"

export default function ForgotPassword () {
  return (
    <div className="login-sec">
      <div className="logo">
        <Link to="/"><img src={logo} alt="logo" className="img-fluid" /></Link>
      </div>
      <div className="login-box">
        <div className="sign-box">
          <h3 className="text-center">Forgot Password</h3>
          <h6 className="text-center">No worries, we’ll send you reset instructions</h6>
          <Form className="mt-4">
            <Form.Group className="mb-5">
              <Form.Control type="email" placeholder="Email" />
            </Form.Group>
            <Link to="/set-password" type="button" className="btn btn-primary btn-main rounded-pill px-5 py-3 w-100">Reset Password</Link>
          </Form>
        </div>
      </div>
    </div>
  )
}
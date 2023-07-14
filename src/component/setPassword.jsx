import { Form } from "react-bootstrap"
import logo from "../assets/logo.svg"
import { Link } from "react-router-dom"
import Input from "./input"


export default function SetPassword () {
  return (
    <div className="login-sec">
      <div className="logo">
        <Link to="/"><img src={logo} alt="logo" className="img-fluid" /></Link>
      </div>
      <div className="login-box">
        <div className="sign-box">
          <h3 className="text-center">Enter New Password</h3>
          <h6 className="text-center">Enter your new password to access your account</h6>
          <Form className="mt-4">
            <Form.Group className="mb-4">
              <Input
                type="password"
                name="password"
                placeholder="New Password"
              />
            </Form.Group>
            <Form.Group className="mb-5">
              <Input
                type="password"
                name="password"
                placeholder="Re-enter Password"
              />
            </Form.Group>
            <Link to="" type="button" className="btn btn-primary btn-main rounded-pill px-5 py-3 w-100">Done</Link>
          </Form>
        </div>
      </div>
    </div>
  )
}
import nots from "../../assets/not.svg"
import avatar from "../../assets/avi.svg"
import { Link } from "react-router-dom"

export default function SearchNotification(params) {
  return (
    <div className="sticky-top container-fluid bg-white dash-bot px-5 py-4">
      <div className="row justify-content-end">
        <div className="col-sm-9">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-md-12">
              <div className="form">
                <i className="bi bi-search"></i>
                <input type="text" className="form-control form-input" placeholder="Search for something here"/>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-3">
          <div className="d-flex flex-row justify-content-end">
            <Link><img src={nots} alt="nots" className="img-fluid me-4 mt-3" /></Link>
            <div className="d-flex flex-row">
              <img src={avatar} alt="admin" className="img-fluid" />
              <div className="user-avi mt-3 ms-3">
                <h6>John Doe</h6>
                <p>CEO</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
import nots from "../../assets/not.svg"
import ceo from "../../assets/ceo.svg"
import { Link } from "react-router-dom"


function DashboardHome() {
  return (
    <div className="content home">
      <div className="sticky-top container-fluid bg-white dash-bot px-5 py-4">
        <div className="row justify-content-end">
          <div className="col-sm-9">
            <div class="row d-flex justify-content-center align-items-center">
              <div className="col-md-12">
                <div className="form">
                  <i className="bi bi-search"></i>
                  <input type="text" class="form-control form-input" placeholder="Search for something here"/>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-3 mt-2">
            <div className="d-flex flex-row justify-content-end">
              <Link><img src={nots} alt="nots" className="img-fluid me-5 mt-2" /></Link>
              <Link><img src={ceo} alt="nots" className="img-fluid" /></Link>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-5 mx-5">
        <div className="app-card">
          
        </div>
      </div>
    </div>
  )
}

export default DashboardHome
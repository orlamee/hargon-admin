/* eslint-disable jsx-a11y/anchor-is-valid */
import SearchNotification from "./searchNotification";
import forward from "../../assets/forward.svg";
import {useNavigate } from 'react-router-dom';



function ImportCompany() {
  const navigate = useNavigate();
  return (
    <div className="content home">
      <SearchNotification />
      <div className="mt-5 row mx-5">
        <div className="col-sm-12 px-0">
          <div className="pending-loan">
            <div className="d-flex flex-row">
              <h5 className="me-3">Onboard Company</h5>
            </div>
          </div>
        </div>
      </div>
      <div 
      className="row justify-content-center mt-5 mx-5 members bg-white py-5 px-2"
      style={{ borderRadius: "0 0 20px 20px", minHeight: "800px" }}
      >
        <div className="col-sm-5" style={{marginTop: "100px"}}>
          <div className="gray-part text-center">
            <div className="bg-white p-4">
              <h5>Follow the instructions carefully before importing the file <img src={forward} alt="forward" className="img-fluid ms-2" /></h5>
            </div>
          </div>
          <div className="text-center mt-5">
            <button className="btn-save" onClick={() => navigate("/import-company")}>Import Excel Sheet</button>
          </div>
        </div>
        <div className="col-sm-5">
          <div className="bg-white p-4 instruct">
            <h5>The columns of the file should be in the following order.</h5>
            <div className="">
              <ol>
                <li>Contact Type (Required)Options: contact</li>
                <li>Contact Type (Required)Options: contact</li>
                <li>Contact Type (Required)Options: contact</li>
                <li>Contact Type (Required)Options: contact</li>
                <li>Contact Type (Required)Options: contact</li>
                <li>Contact Type (Required)Options: contact</li>
                <li>Contact Type (Required)Options: contact</li>
                <li>Contact Type (Required)Options: contact</li>
                <li>Contact Type (Required)Options: contact</li>
                <li>Contact Type (Required)Options: contact</li>
                <li>Contact Type (Required)Options: contact</li>
                <li>Contact Type (Required)Options: contact</li>
                <li>Contact Type (Required)Options: contact</li>
                <li>Contact Type (Required)Options: contact</li>
                <li>Contact Type (Required)Options: contact</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImportCompany;

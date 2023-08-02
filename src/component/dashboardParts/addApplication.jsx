import SearchNotification from "./searchNotification";
import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import { Col, Form, Row } from "react-bootstrap";
import tier from "../../assets/tier1.svg"
import tiertwo from "../../assets/tier2.svg"
import tierthree from "../../assets/tier3.svg"



const fileTypes = ["JPG", "PNG"];
function AddApplication() {
  const [file, setFile] = useState(null);
  const handleChange = (file) => {
    setFile(file);
  };
  return (
    <div className="content home">
      <SearchNotification />
      <div className="mt-5 row mx-5">
        <div className="col-sm-12 px-0">
          <div className="pending-loan">
            <div className="d-flex flex-row">
              <h5 className="me-3"><a href="/application-summary"><i className="bi bi-chevron-left me-2" style={{color: "#228B22"}}></i></a>Add New Application</h5>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-2 row mx-5">
        <div className="col-sm-12 px-0">
          <div className="bg-white p-4 view-loans">
            <div className="row justify-content-center mt-5">
              <div className="col-sm-10">
                <div className="tog-bg p-1">
                  <ul
                    className="nav nav-pills nav-justified"
                    id="pills-tab"
                    role="tablist"
                  >
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link active"
                        id="pills-home-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-home"
                        type="button"
                        role="tab"
                        aria-controls="pills-home"
                        aria-selected="true"
                      >
                        Product
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link"
                        id="pills-profile-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-profile"
                        type="button"
                        role="tab"
                        aria-controls="pills-profile"
                        aria-selected="false"
                      >
                        Account
                      </button>
                    </li>
                    <li class="nav-item" role="presentation">
                      <button
                        class="nav-link"
                        id="pills-h-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-h"
                        type="button"
                        role="tab"
                        aria-controls="pills-h"
                        aria-selected="false"
                      >
                        Personal
                      </button>
                      
                    </li>
                    <li class="nav-item" role="presentation">
                      <button
                        class="nav-link"
                        id="pills-g-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-g"
                        type="button"
                        role="tab"
                        aria-controls="pills-g"
                        aria-selected="false"
                      >
                        Beneficiary
                      </button>
                    </li>
                    <li class="nav-item" role="presentation">
                      <button
                        class="nav-link"
                        id="pills-z-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-z"
                        type="button"
                        role="tab"
                        aria-controls="pills-z"
                        aria-selected="false"
                      >
                        Employer/Business
                      </button>
                    </li>
                    <li class="nav-item" role="presentation">
                      <button
                        class="nav-link"
                        id="pills-x-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-x"
                        type="button"
                        role="tab"
                        aria-controls="pills-x"
                        aria-selected="false"
                      >
                        KYC
                      </button>
                    </li>
                    <li class="nav-item" role="presentation">
                      <button
                        class="nav-link"
                        id="pills-c-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-c"
                        type="button"
                        role="tab"
                        aria-controls="pills-c"
                        aria-selected="false"
                      >
                        Scoring
                      </button>
                    </li>
                    <li class="nav-item" role="presentation">
                      <button
                        class="nav-link"
                        id="pills-v-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-v"
                        type="button"
                        role="tab"
                        aria-controls="pills-v"
                        aria-selected="false"
                      >
                        Debit Link
                      </button>
                    </li>
                    <li class="nav-item" role="presentation">
                      <button
                        class="nav-link"
                        id="pills-b-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-b"
                        type="button"
                        role="tab"
                        aria-controls="pills-b"
                        aria-selected="false"
                      >
                        Legal
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="row mt-5">
              <div className="col-sm-12">
                <div className="tab-content" id="pills-tabContent">
                  <div
                    className="tab-pane fade show active"
                    id="pills-home"
                    role="tabpanel"
                    aria-labelledby="pills-home-tab"
                    tabIndex="0"
                  >
                    <div className="overview">
                      <div className="row justify-content-center">
                        <div className="col-sm-6">
                          <div className="details-card">
                            <div className="bg-white p-4">
                              <Form className="modal-m">
                                <Row className="mb-3">
                                  <Form.Group as={Col}>
                                    <Form.Label>Date Submitted</Form.Label>
                                    <Form.Control type="date" />
                                  </Form.Group>
                                  <Form.Group as={Col}>
                                    <Form.Label>Product</Form.Label>
                                    <Form.Control type="text" />
                                  </Form.Group>
                                </Row>
                                <Row className="mb-3">
                                  <Form.Group as={Col}>
                                    <Form.Label>Interest</Form.Label>
                                    <Form.Control type="number" />
                                  </Form.Group>
                                  <Form.Group as={Col}>
                                    <Form.Label>Loan Purpose</Form.Label>
                                    <Form.Select aria-label="Default select example">
                                      <option>Select Loan Purpose</option>
                                      <option value="1">Housing</option>
                                      <option value="2">Car</option>
                                      <option value="3">Hpspital Bills</option>
                                    </Form.Select>
                                  </Form.Group>
                                </Row>
                                <Row className="mb-3">
                                  <Col xs={6}>
                                    <Form.Label>Amount Requested</Form.Label>
                                    <Form.Control type="number" />
                                  </Col>
                                </Row>
                              </Form>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="pills-profile"
                    role="tabpanel"
                    aria-labelledby="pills-profile-tab"
                    tabIndex="0"
                  >
                    <div className="overview">
                      <div className="row justify-content-center">
                        <div className="col-sm-6">
                          <div className="details-card">
                            <div className="bg-white p-4">
                              <Form className="modal-m">
                                <Row className="mb-3">
                                  <Form.Group as={Col}>
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="text" placeholder="Adeola Martin" />
                                  </Form.Group>
                                  <Form.Group as={Col}>
                                    <Form.Label>Bank Name</Form.Label>
                                    <Form.Select aria-label="Default select example">
                                      <option>Select Bank</option>
                                      <option value="1">LAPO</option>
                                      <option value="2">GTB</option>
                                      <option value="3">Globus</option>
                                    </Form.Select>
                                  </Form.Group>
                                </Row>
                                <Row className="mb-3">
                                  <Form.Group as={Col}>
                                    <Form.Label>Account Number</Form.Label>
                                    <Form.Control type="number" placeholder="1234567890" />
                                  </Form.Group>
                                  <Form.Group as={Col}>
                                    <Form.Label>Phone Linked</Form.Label>
                                    <Form.Control type="tel" placeholder="08012002023" />
                                  </Form.Group>
                                </Row>
                                <Row className="mb-3">
                                  <Form.Group as={Col}>
                                    <Form.Label>BVN</Form.Label>
                                    <Form.Control type="number" placeholder="1234560" />
                                  </Form.Group>
                                  <Form.Group as={Col}>
                                    <Form.Label>NIN</Form.Label>
                                    <Form.Control type="number" placeholder="30231" />
                                  </Form.Group>
                                </Row>
                                <Row className="mb-3">
                                  <Col xs={6}>
                                    <Form.Label>Loan Amount</Form.Label>
                                    <Form.Control type="number" placeholder="12000" />
                                  </Col>
                                </Row>
                                <div className="text-end">
                                  <button className="btn-save">Save</button>
                                </div>
                              </Form>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="pills-h"
                    role="tabpanel"
                    aria-labelledby="pills-h-tab"
                    tabIndex="0"
                  >
                    <div className="overview">
                      <div className="row justify-content-center">
                        <div className="col-sm-6">
                          <div className="details-card">
                            <div className="bg-white p-4">
                              <Form className="modal-m">
                                <Row className="mb-3">
                                  <Form.Group as={Col}>
                                    <Form.Label>Full Name</Form.Label>
                                    <Form.Control type="text" placeholder="Adeola Martin" />
                                  </Form.Group>
                                  <Form.Group as={Col}>
                                    <Form.Label>Marital Status</Form.Label>
                                    <Form.Select aria-label="Default select example">
                                      <option>Select Status</option>
                                      <option value="1">Married</option>
                                      <option value="2">Single</option>
                                      <option value="3">Divorced</option>
                                    </Form.Select>
                                  </Form.Group>
                                </Row>
                                <Row className="mb-3">
                                  <Form.Group as={Col}>
                                    <Form.Label>BVN</Form.Label>
                                    <Form.Control type="number" placeholder="1234560" />
                                  </Form.Group>
                                  <Form.Group as={Col}>
                                    <Form.Label>NIN</Form.Label>
                                    <Form.Control type="number" placeholder="30231" />
                                  </Form.Group>
                                </Row>
                                <Row className="mb-3">
                                  <Form.Group as={Col}>
                                    <Form.Label>Number of Dependants</Form.Label>
                                    <Form.Control type="number" placeholder="10" />
                                  </Form.Group>
                                  <Form.Group as={Col}>
                                    <Form.Label>Residence Type</Form.Label>
                                    <Form.Select aria-label="Default select example">
                                      <option>Select Type</option>
                                      <option value="1">Owned</option>
                                      <option value="2">Rented</option>
                                      <option value="3">Family</option>
                                    </Form.Select>
                                  </Form.Group>
                                </Row>
                                <Form.Group className="mb-3">
                                  <Form.Label>Educational Attainment</Form.Label>
                                  <Form.Select aria-label="Default select example">
                                    <option>Select</option>
                                    <option value="1">Msc</option>
                                    <option value="2">BSc</option>
                                  </Form.Select>
                                </Form.Group>
                                <Form.Group className="mb-3">
                                  <Form.Label>Address</Form.Label>
                                  <Form.Control type="text" placeholder="2, Adeleke-David Avenue, Gwarinpa, Abuja" />
                                </Form.Group>
                                <Row className="mb-3">
                                  <Form.Group as={Col}>
                                    <Form.Label>LGA</Form.Label>
                                    <Form.Control type="text" placeholder="Ikeja" />
                                  </Form.Group>
                                  <Form.Group as={Col}>
                                    <Form.Label>Nearest Landmark</Form.Label>
                                    <Form.Control type="text" placeholder="Opposite WhiteHouse" />
                                  </Form.Group>
                                </Row>
                                <div className="text-end">
                                  <button className="btn-save">Save</button>
                                </div>
                              </Form>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="pills-g"
                    role="tabpanel"
                    aria-labelledby="pills-g-tab"
                    tabIndex="0"
                  >
                    <div className="guarantor">
                      <div className="row justify-content-center">
                        <div className="col-sm-7">
                          <div className="details-card">
                            <div className="bg-white p-4">
                              <Form className="modal-m">
                                <Row className="mb-3">
                                  <Form.Group as={Col}>
                                    <Form.Label>Full Name</Form.Label>
                                    <Form.Control type="text"  />
                                  </Form.Group>
                                  <Form.Group as={Col}>
                                    <Form.Label>Phone Number</Form.Label>
                                    <Form.Control type="tel" />
                                  </Form.Group>
                                </Row>
                                <Form.Group className="mb-3">
                                  <Form.Label>Address</Form.Label>
                                  <Form.Control type="text" />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                  <Form.Label>Relationship</Form.Label>
                                  <Form.Control type="text" />
                                </Form.Group>
                                <div className="text-end">
                                  <button className="btn-save">Save</button>
                                </div>
                              </Form>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                   
                  </div>
                  <div
                    className="tab-pane fade"
                    id="pills-z"
                    role="tabpanel"
                    aria-labelledby="pills-z-tab"
                    tabIndex="0"
                  >
                    <div className="overview">
                      <div className="row justify-content-center">
                        <div className="col-sm-6">
                          <div className="details-card">
                            <div className="bg-white p-4">
                              <Form className="modal-m">
                                <Row className="mb-3">
                                  <Form.Group as={Col}>
                                    <Form.Label>Company Name</Form.Label>
                                    <Form.Control type="text" placeholder="Traction Inc" />
                                  </Form.Group>
                                  <Form.Group as={Col}>
                                    <Form.Label>Industry</Form.Label>
                                    <Form.Select aria-label="Default select example">
                                      <option>Select Industry</option>
                                      <option value="1">Bank</option>
                                      <option value="2">Education</option>
                                      <option value="3">Oil & Gas</option>
                                    </Form.Select>
                                  </Form.Group>
                                </Row>
                                <Form.Group className="mb-3">
                                  <Form.Label>Monthly Net Income</Form.Label>
                                  <Form.Select aria-label="Default select example">
                                    <option>Select</option>
                                    <option value="1">N 10,000 - N 54,999</option>
                                    <option value="2">N 10,000 - N 54,999</option>
                                    <option value="3">N 10,000 - N 54,999</option>
                                  </Form.Select>
                                </Form.Group>
                                <Row className="mb-3">
                                  <Form.Group as={Col}>
                                    <Form.Label>Employment Status</Form.Label>
                                    <Form.Select aria-label="Default select example">
                                      <option>Select</option>
                                      <option value="1">Currently Employed</option>
                                      <option value="2">Unemployed</option>
                                    </Form.Select>
                                  </Form.Group>
                                  <Form.Group as={Col}>
                                    <Form.Label>Current Employer</Form.Label>
                                    <Form.Control type="text" placeholder="Olamilekan Akindele" />
                                  </Form.Group>
                                </Row>
                                <Row className="mb-3">
                                  <Form.Group as={Col}>
                                    <Form.Label>Employment Sector</Form.Label>
                                    <Form.Select aria-label="Default select example">
                                      <option>Select Industry</option>
                                      <option value="1">Bank</option>
                                      <option value="2">Education</option>
                                      <option value="3">Oil & Gas</option>
                                    </Form.Select>
                                  </Form.Group>
                                  <Form.Group as={Col}>
                                    <Form.Label>Work Email Address</Form.Label>
                                    <Form.Control type="email" placeholder="john@example.com" />
                                  </Form.Group>
                                </Row>
                                <Row className="mb-3">
                                  <Form.Group as={Col}>
                                    <Form.Label>Work Start Date</Form.Label>
                                    <Form.Control type="date"  />
                                  </Form.Group>
                                  <Form.Group as={Col}>
                                    <Form.Label>Employment Category</Form.Label>
                                    <Form.Select aria-label="Default select example">
                                      <option>Select</option>
                                      <option value="1">Bank</option>
                                      <option value="2">Education</option>
                                      <option value="3">Oil & Gas</option>
                                    </Form.Select>
                                  </Form.Group>
                                </Row>
                                <Form.Group className="mb-3">
                                  <Form.Label>Address</Form.Label>
                                  <Form.Control type="text" placeholder="2, Adeleke-David Avenue, Gwarinpa, Abuja" />
                                </Form.Group>
                                <div className="text-end">
                                  <button className="btn-save">Save</button>
                                </div>
                              </Form>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>             
                  </div>
                  <div
                    className="tab-pane fade"
                    id="pills-x"
                    role="tabpanel"
                    aria-labelledby="pills-x-tab"
                    tabIndex="0"
                  >
                    <div className="guarantor">
                      <div className="row justify-content-center">
                        <div className="col-sm-7">
                          <div className="details-card pb-0">
                            <div className="bg-white p-4">
                              <img src={tier} alt="tier" className="img-fluid" />
                              <Form className="modal-m mt-3">
                                <Row className="mb-3">
                                  <Form.Group as={Col}>
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="text" placeholder="Ade Ade" />
                                  </Form.Group>
                                  <Form.Group as={Col}>
                                    <Form.Label>Place of Birth</Form.Label>
                                    <Form.Control type="text" placeholder="Lagos" />
                                  </Form.Group>
                                </Row>
                                <Row className="mb-3">
                                  <Form.Group as={Col}>
                                    <Form.Label>Date of Birth</Form.Label>
                                    <Form.Control type="date" />
                                  </Form.Group>
                                  <Form.Group as={Col}>
                                    <Form.Label>Gender</Form.Label>
                                    <Form.Select aria-label="Default select example">
                                      <option>Select Gender</option>
                                      <option value="1">Male</option>
                                      <option value="2">Female</option>
                                    </Form.Select>
                                  </Form.Group>
                                </Row>
                                <Form.Group className="mb-3">
                                  <Form.Label>Address</Form.Label>
                                  <Form.Control type="text" placeholder="2, Adeleke-David Avenue, Gwarinpa, Abuja" />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                  <Form.Label>Phone Number</Form.Label>
                                  <Form.Control type="tel" placeholder="0812002032" />
                                </Form.Group>
                              </Form>
                            </div>
                          </div>
                          <div className="details-card pb-0">
                            <div className="bg-white p-4">
                               <img src={tiertwo} alt="tier" className="img-fluid" />
                              <Form className="modal-m mt-3">
                                <Row className="mb-3">
                                  <Form.Group as={Col}>
                                    <Form.Label>NIMC</Form.Label>
                                    <FileUploader handleChange={handleChange} name="file" label="Upload Picture" types={fileTypes} />
                                    <p>{file ? `File name: ${file[0].name}` : "no files uploaded yet"}</p>
                                  </Form.Group>
                                  <Form.Group as={Col}>
                                    <Form.Label>Voter’s Card</Form.Label>
                                    <FileUploader handleChange={handleChange} name="file" label="Upload Picture" types={fileTypes} />
                                    <p>{file ? `File name: ${file[0].name}` : "no files uploaded yet"}</p>
                                  </Form.Group>
                                </Row>
                                <Row className="mb-3">
                                  <Form.Group as={Col}>
                                    <Form.Label>FRSC</Form.Label>
                                    <FileUploader handleChange={handleChange} name="file" label="Upload Picture" types={fileTypes} />
                                    <p>{file ? `File name: ${file[0].name}` : "no files uploaded yet"}</p>
                                  </Form.Group>
                                  <Form.Group as={Col}>
                                    <Form.Label>INEC</Form.Label>
                                    <FileUploader handleChange={handleChange} name="file" label="Upload Picture" types={fileTypes} />
                                    <p>{file ? `File name: ${file[0].name}` : "no files uploaded yet"}</p>
                                  </Form.Group>
                                </Row>
                                <Row className="mb-3">
                                  <Form.Group as={Col}>
                                    <Form.Label>BVN</Form.Label>
                                    <Form.Control type="number" placeholder="1234560" />
                                  </Form.Group>
                                  <Form.Group as={Col}>
                                    <Form.Label>NIN</Form.Label>
                                    <Form.Control type="number" placeholder="30231" />
                                  </Form.Group>
                                </Row>
                              </Form>
                            </div>
                          </div>
                          <div className="details-card">
                            <div className="bg-white p-4">
                               <img src={tierthree} alt="tier" className="img-fluid" />
                              <Form className="modal-m mt-3">
                                <Row className="mb-3">
                                  <Form.Group as={Col}>
                                    <Form.Label>Proof of Address</Form.Label>
                                    <FileUploader handleChange={handleChange} name="file" label="Upload Picture" types={fileTypes} />
                                    <p>{file ? `File name: ${file[0].name}` : "no files uploaded yet"}</p>
                                  </Form.Group>
                                  <Form.Group as={Col}>
                                    <Form.Label>ID Card</Form.Label>
                                    <FileUploader handleChange={handleChange} name="file" label="Upload Picture" types={fileTypes} />
                                    <p>{file ? `File name: ${file[0].name}` : "no files uploaded yet"}</p>
                                  </Form.Group>
                                </Row>
                                <Row className="mb-3">
                                  <Form.Group as={Col}>
                                    <Form.Label>BVN</Form.Label>
                                    <Form.Control type="number" placeholder="1234560" />
                                  </Form.Group>
                                  <Form.Group as={Col}>
                                    <Form.Label>Video Selfie</Form.Label>
                                    <Form.Control type="number" placeholder="My Video.Mp4" />
                                  </Form.Group>
                                </Row>
                                <div className="text-end">
                                  <button className="btn-save">Save</button>
                                </div>
                              </Form>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>            
                  </div>
                  <div
                    className="tab-pane fade"
                    id="pills-c"
                    role="tabpanel"
                    aria-labelledby="pills-c-tab"
                    tabIndex="0"
                  >
                    <div className="overview">
                      <div className="row justify-content-center">
                        <div className="col-sm-5">
                          <div className="details-card">
                            <div className="bg-white p-4">
                              <div className="text-center">
                                <h5>No activity yet</h5>
                                <h6>Scoring for this user have not been calculated yet</h6>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>               
                  </div>
                  <div
                    className="tab-pane fade"
                    id="pills-v"
                    role="tabpanel"
                    aria-labelledby="pills-c-tab"
                    tabIndex="0"
                  >
                    <div className="overview">
                      <div className="row justify-content-center">
                        <div className="col-sm-6">
                          <div className="details-card">
                            <div className="bg-white p-4">
                              <div className="text-center">
                                <h5>No activity yet</h5>
                                <h6>link not sent yet</h6>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="pills-b"
                    role="tabpanel"
                    aria-labelledby="pills-b-tab"
                    tabIndex="0"
                  >
                    <div className="overview">
                      <div className="row justify-content-center">
                        <div className="col-sm-6">
                          <div className="details-card">
                            <div className="bg-white p-4">
                              <div className="text-center">
                                <h5>No activity yet</h5>
                                <h6>Offer letter not sent yet</h6>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>  
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Add Beneficiary Modal */}
      <div className="modal fade modal-m" id="add-bene" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title">Add Beneficiary</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className="inner-card">
                <div className="row">
                  <div className="col-sm-12">
                    <Form>
                      <Row className="mb-3">
                        <Col>
                          <Form.Control placeholder="Name" />
                        </Col>
                        <Col>
                          <Form.Control type="tel" placeholder="Phone no" />
                        </Col>
                      </Row>
                      <Row className="mb-3">
                        <Col xs={6}>
                          <Form.Control placeholder="Address" />
                        </Col>
                        <Col>
                          <Form.Control type="text" placeholder="Relationship" />
                        </Col>
                      </Row>
                      <div className="text-end">
                        <button type="button" className="btn-save">Continue</button>
                      </div>
                    </Form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddApplication;

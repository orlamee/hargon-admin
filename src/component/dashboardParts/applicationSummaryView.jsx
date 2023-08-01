import SearchNotification from "./searchNotification";
import { Col, Form, Row } from "react-bootstrap";

function ApplicationSummaryView() {
  return (
    <div className="content home">
      <SearchNotification />
      <div className="mt-5 row mx-5">
        <div className="col-sm-12 px-0">
          <div className="pending-loan">
            <div className="d-flex flex-row">
              <h5 className="me-3"><a href="/application-summary"><i className="bi bi-chevron-left me-2" style={{color: "#228B22"}}></i></a>Application Details</h5>
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
                                    <Form.Control type="text" placeholder="Auto Loan" />
                                  </Form.Group>
                                </Row>
                                <Row className="mb-3">
                                  <Form.Group as={Col}>
                                    <div><Form.Label className="mb-3">Offer Letter</Form.Label></div>
                                    <div className="form-check form-check-inline me-5">
                                      <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
                                      <label className="form-check-label" for="inlineRadio1">Signed</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                      <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
                                      <label className="form-check-label" for="inlineRadio2">Not Signed</label>
                                    </div>
                                  </Form.Group>
                                  <Form.Group as={Col}>
                                    <Form.Label>Loan Purpose</Form.Label>
                                    <Form.Control type="text" placeholder="Housing" />
                                  </Form.Group>
                                </Row>
                                <Row className="mb-3">
                                  <Form.Group as={Col}>
                                    <Form.Label>Interest</Form.Label>
                                    <Form.Control type="number" placeholder="100" />
                                  </Form.Group>
                                  <Form.Group as={Col}>
                                    <Form.Label>Amount Requested</Form.Label>
                                    <Form.Control type="number" placeholder="10000" />
                                  </Form.Group>
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
                    
                  </div>
                  <div
                    className="tab-pane fade"
                    id="pills-h"
                    role="tabpanel"
                    aria-labelledby="pills-h-tab"
                    tabIndex="0"
                  >
                    
                  </div>
                  <div
                    className="tab-pane fade"
                    id="pills-g"
                    role="tabpanel"
                    aria-labelledby="pills-g-tab"
                    tabIndex="0"
                  >
                    
                   
                  </div>
                  <div
                    className="tab-pane fade"
                    id="pills-z"
                    role="tabpanel"
                    aria-labelledby="pills-z-tab"
                    tabIndex="0"
                  >
                                   
                  </div>
                  <div
                    className="tab-pane fade"
                    id="pills-x"
                    role="tabpanel"
                    aria-labelledby="pills-x-tab"
                    tabIndex="0"
                  >
                                    
                  </div>
                  <div
                    className="tab-pane fade"
                    id="pills-c"
                    role="tabpanel"
                    aria-labelledby="pills-c-tab"
                    tabIndex="0"
                  >
                                    
                  </div>
                  <div
                    className="tab-pane fade"
                    id="pills-v"
                    role="tabpanel"
                    aria-labelledby="pills-c-tab"
                    tabIndex="0"
                  >
                    
                  </div>
                  <div
                    className="tab-pane fade"
                    id="pills-b"
                    role="tabpanel"
                    aria-labelledby="pills-b-tab"
                    tabIndex="0"
                  >
                     
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Add Next Kin Modal */}
      <div className="modal fade modal-m" id="add-kin" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title">Add Next of Kin</h1>
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
                          <Form.Control type="text" placeholder="Gender" />
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
      {/* Add Work Details Modal */}
      <div className="modal fade modal-m" id="add-work" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title">Add Work Details</h1>
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
                          <Form.Control type="text" placeholder="Official Designation" />
                        </Col>
                        <Col>
                          <Form.Control type="text" placeholder="Work Status" />
                        </Col>
                      </Row>
                      <Row className="mb-3">
                        <Col>
                          <Form.Control placeholder="Gross Salary" />
                        </Col>
                        <Col>
                          <Form.Control type="text" placeholder="Net Salary" />
                        </Col>
                        <Col>
                          <Form.Control type="text" placeholder="Employment Terms" />
                        </Col>
                        <Col>
                          <Form.Control type="text" placeholder="Contract Expiry Date" />
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
      {/* Add Bank Modal */}
      <div className="modal fade modal-m" id="add-bank" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title">Add Bank Details</h1>
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
                          <Form.Control type="text" placeholder="Bank name" />
                        </Col>
                      </Row>
                      <Row className="mb-3">
                        <Col>
                          <Form.Control type="number" placeholder="Amount Number" />
                        </Col>
                        <Col>
                          <Form.Control type="text" placeholder="Branch" />
                        </Col>
                        <Col>
                          <Form.Control type="number" placeholder="Bank Swift Code" />
                        </Col>
                        <Col>
                          <Form.Control type="number" placeholder="Tax Payer ID" />
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

export default ApplicationSummaryView;

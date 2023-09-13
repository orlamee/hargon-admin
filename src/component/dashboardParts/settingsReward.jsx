/* eslint-disable jsx-a11y/anchor-is-valid */
import SearchNotification from "./searchNotification";
import {Col, Form, Row } from "react-bootstrap";
import reward from "../../assets/rewards.svg"
import cashback from "../../assets/cashback.svg"
import referral from "../../assets/referral.svg"



function SettingsReward() {
  return (
    <div className="content home">
      <SearchNotification />
      <div className="mt-5 row mx-5">
        <div className="col-sm-12 px-0">
          <div className="pending-loan">
            <div className="d-flex flex-row">
              <h5 className="me-3">Reward Settings</h5>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-2 row mx-5">
        <div className="col-sm-12 px-0">
          <div className="bg-white p-4 view-loans">
            <div className="row justify-content-center mt-5">
              <div className="col-sm-6">
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
                        Referral
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
                        CashBack
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
                        Reports
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
                    <div className="acc-details">
                      <div className="row justify-content-center">
                        <div className="col-sm-5">
                          <div className="details-card">
                            <div className="bg-white p-4">
                              <h3>Referral Configuration</h3>
                              <h5 className="my-3 w-75">Set the amount of referrals a user has to attain and the amount they get in return</h5>
                              <Form className="modal-m">
                                <Form.Group className="mb-3">
                                  <Form.Label>Amount</Form.Label>
                                  <Form.Control type="number" placeholder="₦ 1,000" />
                                </Form.Group>
                                <Form.Group className="mb-4">
                                  <Form.Label>Number of Referrals (Signed up with referral)</Form.Label>
                                  <Form.Control type="number" placeholder="10" />
                                </Form.Group>
                                <div className="text-center">
                                  <button className="btn-save">Save Changes</button>
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
                    id="pills-profile"
                    role="tabpanel"
                    aria-labelledby="pills-profile-tab"
                    tabIndex="0"
                  >
                    <div className="acc-details">
                      <div className="row justify-content-center">
                        <div className="col-sm-5">
                          <div className="details-card">
                            <div className="bg-white p-4">
                              <h3>Cashback Configuration</h3>
                              <h5 className="my-3 w-75">Set the amount of cashback a user has to attain and the amount they get in return</h5>
                              <Form className="modal-m">
                                <Form.Group className="mb-3">
                                  <Form.Label>Transaction Type</Form.Label>
                                  <Form.Select aria-label="Default select example">
                                    <option>Open this select menu</option>
                                    <option value="1">Electricity</option>
                                    <option value="2">Internet</option>
                                  </Form.Select>
                                </Form.Group>
                                <Row>
                                  <Col xs={8}>
                                    <Form.Group className="mb-3">
                                      <Form.Label>Minimum Transaction Amount</Form.Label>
                                      <Form.Control type="number" placeholder="₦ 1,000" />
                                    </Form.Group>
                                  </Col>
                                  <Col>
                                    <Form.Group className="mb-3">
                                      <Form.Label>Percentage</Form.Label>
                                      <Form.Control type="number" placeholder="5%" />
                                    </Form.Group>
                                  </Col>
                                </Row>
                                <Row>
                                  <Col xs={8}>
                                    <Form.Group className="mb-3">
                                      <Form.Label>Maximum Transaction Amount</Form.Label>
                                      <Form.Control type="number" placeholder="₦ 1,000" />
                                    </Form.Group>
                                  </Col>
                                  <Col>
                                    <Form.Group className="mb-3">
                                      <Form.Label>Percentage</Form.Label>
                                      <Form.Control type="number" placeholder="5%" />
                                    </Form.Group>
                                  </Col>
                                </Row>
                                <Row>
                                  <Col xs={8}>
                                    <Form.Group className="mb-3">
                                      <Form.Label>Frequency</Form.Label>
                                      <Form.Select aria-label="Default select example">
                                        <option>Select daily</option>
                                        <option value="1">Daily</option>
                                        <option value="2">Monthly</option>
                                      </Form.Select>
                                    </Form.Group>
                                  </Col>
                                  <Col>
                                    <Form.Group className="mb-3">
                                      <Form.Label>Duration</Form.Label>
                                      <Form.Select aria-label="Default select example">
                                        <option>Select frequency</option>
                                        <option value="1">1x</option>
                                        <option value="2">2x</option>
                                      </Form.Select>
                                    </Form.Group>
                                  </Col>
                                </Row>
                                <div className="text-center mt-4">
                                  <button className="btn-save">Save Changes</button>
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
                    <div className="acc-details">
                      <div className="row justify-content-center">
                        <div className="col-sm-7">
                          <div className="details-card">
                            <div className="bg-white p-4">
                              <h3>Reports and Analytics</h3>
                              <div className="row">
                                <div className="col-sm-6">
                                  <div className="tog-bg p-1">
                                    <ul
                                      className="nav nav-pills nav-justified"
                                      id="pills-tab"
                                      role="tablist"
                                    >
                                      <li className="nav-item" role="presentation">
                                        <button
                                          className="nav-link active"
                                          id="pills-rewards-tab"
                                          data-bs-toggle="pill"
                                          data-bs-target="#pills-rewards"
                                          type="button"
                                          role="tab"
                                          aria-controls="pills-rewards"
                                          aria-selected="true"
                                        >
                                          All Rewards
                                        </button>
                                      </li>
                                      <li className="nav-item" role="presentation">
                                        <button
                                          className="nav-link"
                                          id="pills-cashback-tab"
                                          data-bs-toggle="pill"
                                          data-bs-target="#pills-cashback"
                                          type="button"
                                          role="tab"
                                          aria-controls="pills-cashback"
                                          aria-selected="false"
                                        >
                                          CashBack
                                        </button>
                                      </li>
                                      <li class="nav-item" role="presentation">
                                        <button
                                          class="nav-link"
                                          id="pills-referral-tab"
                                          data-bs-toggle="pill"
                                          data-bs-target="#pills-referral"
                                          type="button"
                                          role="tab"
                                          aria-controls="pills-referral"
                                          aria-selected="false"
                                        >
                                          Referral
                                        </button>
                      
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                              <div className="tab-content" id="pills-tabContent">
                                <div className="tab-pane fade show active" id="pills-rewards" role="tabpanel" aria-labelledby="pills-rewards-tab" tabindex="0">
                                  <div className="mt-3">
                                    <img src={reward} alt="reward" className="img-fluid w-100" />
                                  </div>
                                </div>
                                <div className="tab-pane fade" id="pills-cashback" role="tabpanel" aria-labelledby="pills-cashback-tab" tabindex="0">
                                  <div className="mt-3">
                                    <img src={cashback} alt="reward" className="img-fluid w-100" />
                                  </div>
                                </div>
                                <div className="tab-pane fade" id="pills-referral" role="tabpanel" aria-labelledby="pills-referral-tab" tabindex="0">
                                  <div className="mt-3">
                                    <img src={referral} alt="reward" className="img-fluid w-100" />
                                  </div>
                                </div>
                              </div>
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
                     <div className="acc-details">
                      <div className="row justify-content-center">
                        <div className="col-sm-5">
                          <div className="details-card">
                            <div className="bg-white p-4">
                              <div>
                                <h6>Status</h6>
                                <button className="btn-save float-end add" data-bs-toggle="modal" data-bs-target="#add-status">Add <i className="bi bi-plus"></i></button>
                              </div>
                              <div className="mt-5">
                                <div className="row title-head">
                                  <div className="col-sm-8">
                                    <h6>Name</h6>
                                  </div>
                                  <div className="col-sm-4 text-end">
                                    <h6>Actions</h6>
                                  </div>
                                </div>
                                <div className="addlist">
                                  <div className="row">
                                    <div className="col-sm-6">
                                      <h6>Successful</h6>
                                    </div>
                                    <div className="col-sm-6 text-end">
                                      <div className="dropdown">
                                        <i
                                          className="bi bi-three-dots"
                                          data-bs-toggle="dropdown"
                                          aria-expanded="false"
                                        ></i>
                                        <ul class="dropdown-menu details">
                                          <li>
                                            <a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#edit-status">
                                              Edit
                                            </a>
                                          </li>
                                          <li>
                                            <a className="dropdown-item" href="/">
                                              Delete
                                            </a>
                                          </li>
                                        </ul>
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
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default SettingsReward;

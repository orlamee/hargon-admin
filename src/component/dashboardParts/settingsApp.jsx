/* eslint-disable jsx-a11y/anchor-is-valid */
import SearchNotification from "./searchNotification";
import {Col, Form, Row } from "react-bootstrap";


export default function SettingsApp() {
  return (
    <div className="content home">
      <SearchNotification />
      <div className="mt-5 row mx-5">
        <div className="col-sm-12 px-0">
          <div className="pending-loan">
            <div className="d-flex flex-row">
              <h5 className="me-3">Application Settings</h5>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-2 row mx-5">
        <div className="col-sm-12 px-0">
          <div className="bg-white p-4 view-loans">
            <div className="row justify-content-center mt-5">
              <div className="col-sm-9">
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
                        Amount
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
                        id="pills-z-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-z"
                        type="button"
                        role="tab"
                        aria-controls="pills-z"
                        aria-selected="false"
                      >
                        Beneficiary
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
                              <div>
                                <h6>Loan Purpose</h6>
                                <button className="btn-save float-end add" data-bs-toggle="modal" data-bs-target="#add">Add <i className="bi bi-plus"></i></button>
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
                                      <h6>Premium</h6>
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
                                            <a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#edit">
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
                              <div>
                                <h6>Bank Name</h6>
                                <button className="btn-save float-end add" data-bs-toggle="modal" data-bs-target="#add-title">Add <i className="bi bi-plus"></i></button>
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
                                      <h6>Globus Bank</h6>
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
                                            <a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#edit-title">
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
                  <div
                    className="tab-pane fade"
                    id="pills-h"
                    role="tabpanel"
                    aria-labelledby="pills-h-tab"
                    tabIndex="0"
                  >
                    <div className="row justify-content-center">
                      <div className="col-sm-6 loany">
                        <ul className="nav nav-pills  nav-justified" id="pills-tab" role="tablist">
                          <li className="nav-item" role="presentation">
                            <button className="nav-link active" id="pills-loana-tab" data-bs-toggle="pill" data-bs-target="#pills-loana" type="button" role="tab" aria-controls="pills-loana" aria-selected="true">Marital Status</button>
                          </li>
                          <li className="nav-item" role="presentation">
                            <button className="nav-link" id="pills-savingsa-tab" data-bs-toggle="pill" data-bs-target="#pills-savingsa" type="button" role="tab" aria-controls="pills-savinga" aria-selected="false">Residence Type</button>
                          </li>
                          <li className="nav-item" role="presentation">
                            <button className="nav-link" id="pills-edu-tab" data-bs-toggle="pill" data-bs-target="#pills-edu" type="button" role="tab" aria-controls="pills-edu" aria-selected="false">Educational Attainment</button>
                          </li>
                          <li className="nav-item" role="presentation">
                            <button className="nav-link" id="pills-lga-tab" data-bs-toggle="pill" data-bs-target="#pills-lga" type="button" role="tab" aria-controls="pills-lga" aria-selected="false">LGA</button>
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* Personal Groups */}
                    <div className="row mt-5">
                      <div className="col-sm-12">
                        <div class="tab-content" id="pills-tabContent">
                          <div class="tab-pane fade show active" id="pills-loana" role="tabpanel" aria-labelledby="pills-loan-tab" tabindex="0">
                            <div className="acc-details">
                              <div className="row justify-content-center">
                                <div className="col-sm-5">
                                  <div className="details-card">
                                    <div className="bg-white p-4">
                                      <div>
                                        <h6>Marital Status</h6>
                                        <button className="btn-save float-end add" data-bs-toggle="modal" data-bs-target="#add-profession">Add <i className="bi bi-plus"></i></button>
                                      </div>
                                      <div className="mt-5">
                                        <div className="row title-head">
                                          <div className="col-sm-4">
                                            <h6>Name</h6>
                                          </div>
                                          <div className="col-sm-4 text-center">
                                            <h6>Points</h6>
                                          </div>
                                          <div className="col-sm-4 text-end">
                                            <h6>Actions</h6>
                                          </div>
                                        </div>
                                        <div className="addlist">
                                          <div className="row">
                                            <div className="col-sm-4">
                                              <h6>Marital Status</h6>
                                            </div>
                                            <div className="col-sm-4 text-center">
                                              <h6>9</h6>
                                            </div>
                                            <div className="col-sm-4 text-end">
                                              <div className="dropdown">
                                                <i
                                                  className="bi bi-three-dots"
                                                  data-bs-toggle="dropdown"
                                                  aria-expanded="false"
                                                ></i>
                                                <ul class="dropdown-menu details">
                                                  <li>
                                                    <a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#edit-profession">
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
                          <div class="tab-pane fade" id="pills-savingsa" role="tabpanel" aria-labelledby="pills-savings-tab" tabindex="0">
                            <div className="acc-details">
                              <div className="row justify-content-center">
                                <div className="col-sm-5">
                                  <div className="details-card">
                                    <div className="bg-white p-4">
                                      <div>
                                        <h6>Residence Type</h6>
                                        <button className="btn-save float-end add" data-bs-toggle="modal" data-bs-target="#add-profession">Add <i className="bi bi-plus"></i></button>
                                      </div>
                                      <div className="mt-5">
                                        <div className="row title-head">
                                          <div className="col-sm-4">
                                            <h6>Name</h6>
                                          </div>
                                          <div className="col-sm-4 text-center">
                                            <h6>Points</h6>
                                          </div>
                                          <div className="col-sm-4 text-end">
                                            <h6>Actions</h6>
                                          </div>
                                        </div>
                                        <div className="addlist">
                                          <div className="row">
                                            <div className="col-sm-4">
                                              <h6>Marital Status</h6>
                                            </div>
                                            <div className="col-sm-4 text-center">
                                              <h6>9</h6>
                                            </div>
                                            <div className="col-sm-4 text-end">
                                              <div className="dropdown">
                                                <i
                                                  className="bi bi-three-dots"
                                                  data-bs-toggle="dropdown"
                                                  aria-expanded="false"
                                                ></i>
                                                <ul class="dropdown-menu details">
                                                  <li>
                                                    <a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#edit-profession">
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
                          <div class="tab-pane fade" id="pills-edu" role="tabpanel" aria-labelledby="pills-edu-tab" tabindex="0">
                            <div className="acc-details">
                              <div className="row justify-content-center">
                                <div className="col-sm-5">
                                  <div className="details-card">
                                  <div className="bg-white p-4">
                                      <div>
                                        <h6>Educational Attainment</h6>
                                        <button className="btn-save float-end add" data-bs-toggle="modal" data-bs-target="#add-profession">Add <i className="bi bi-plus"></i></button>
                                      </div>
                                      <div className="mt-5">
                                        <div className="row title-head">
                                          <div className="col-sm-4">
                                            <h6>Name</h6>
                                          </div>
                                          <div className="col-sm-4 text-center">
                                            <h6>Points</h6>
                                          </div>
                                          <div className="col-sm-4 text-end">
                                            <h6>Actions</h6>
                                          </div>
                                        </div>
                                        <div className="addlist">
                                          <div className="row">
                                            <div className="col-sm-4">
                                              <h6>Marital Status</h6>
                                            </div>
                                            <div className="col-sm-4 text-center">
                                              <h6>9</h6>
                                            </div>
                                            <div className="col-sm-4 text-end">
                                              <div className="dropdown">
                                                <i
                                                  className="bi bi-three-dots"
                                                  data-bs-toggle="dropdown"
                                                  aria-expanded="false"
                                                ></i>
                                                <ul class="dropdown-menu details">
                                                  <li>
                                                    <a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#edit-profession">
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
                          <div class="tab-pane fade" id="pills-lga" role="tabpanel" aria-labelledby="pills-lga-tab" tabindex="0">
                            <div className="acc-details">
                              <div className="row justify-content-center">
                                <div className="col-sm-5">
                                  <div className="details-card">
                                  <div className="bg-white p-4">
                                      <div>
                                        <h6>LGA</h6>
                                        <button className="btn-save float-end add" data-bs-toggle="modal" data-bs-target="#add-profession">Add <i className="bi bi-plus"></i></button>
                                      </div>
                                      <div className="mt-5">
                                        <div className="row title-head">
                                          <div className="col-sm-4">
                                            <h6>Name</h6>
                                          </div>
                                          <div className="col-sm-4 text-center">
                                            <h6>Points</h6>
                                          </div>
                                          <div className="col-sm-4 text-end">
                                            <h6>Actions</h6>
                                          </div>
                                        </div>
                                        <div className="addlist">
                                          <div className="row">
                                            <div className="col-sm-4">
                                              <h6>Marital Status</h6>
                                            </div>
                                            <div className="col-sm-4 text-center">
                                              <h6>9</h6>
                                            </div>
                                            <div className="col-sm-4 text-end">
                                              <div className="dropdown">
                                                <i
                                                  className="bi bi-three-dots"
                                                  data-bs-toggle="dropdown"
                                                  aria-expanded="false"
                                                ></i>
                                                <ul class="dropdown-menu details">
                                                  <li>
                                                    <a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#edit-profession">
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
                  <div
                    className="tab-pane fade"
                    id="pills-g"
                    role="tabpanel"
                    aria-labelledby="pills-g-tab"
                    tabIndex="0"
                  >
                    <div className="row justify-content-center">
                      <div className="col-sm-8 loany">
                        <ul className="nav nav-pills  nav-justified" id="pills-tab" role="tablist">
                          <li className="nav-item" role="presentation">
                            <button className="nav-link active" id="pills-wt-tab" data-bs-toggle="pill" data-bs-target="#pills-wt" type="button" role="tab" aria-controls="pills-wt" aria-selected="true">Work Type</button>
                          </li>
                          <li className="nav-item" role="presentation">
                            <button className="nav-link" id="pills-industry-tab" data-bs-toggle="pill" data-bs-target="#pills-industry" type="button" role="tab" aria-controls="pills-industry" aria-selected="false">Industry</button>
                          </li>
                          <li className="nav-item" role="presentation">
                            <button className="nav-link" id="pills-mni-tab" data-bs-toggle="pill" data-bs-target="#pills-mni" type="button" role="tab" aria-controls="pills-mni" aria-selected="false">Monthly Net Income</button>
                          </li>
                          <li className="nav-item" role="presentation">
                            <button className="nav-link" id="pills-es-tab" data-bs-toggle="pill" data-bs-target="#pills-es" type="button" role="tab" aria-controls="pills-es" aria-selected="false">Employment Sector</button>
                          </li>
                          <li className="nav-item" role="presentation">
                            <button className="nav-link" id="pills-ec-tab" data-bs-toggle="pill" data-bs-target="#pills-ec" type="button" role="tab" aria-controls="pills-ec" aria-selected="false">Employment Category</button>
                          </li>
                          <li className="nav-item" role="presentation">
                            <button className="nav-link" id="pills-estatus-tab" data-bs-toggle="pill" data-bs-target="#pills-estatus" type="button" role="tab" aria-controls="pills-estatus" aria-selected="false">Employment Status</button>
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* Employer Groups */}
                    <div className="row mt-5">
                      <div className="col-sm-12">
                        <div class="tab-content" id="pills-tabContent">
                          <div class="tab-pane fade show active" id="pills-wt" role="tabpanel" aria-labelledby="pills-wt-tab" tabindex="0">
                            <div className="acc-details">
                              <div className="row justify-content-center">
                                <div className="col-sm-5">
                                  <div className="details-card">
                                    <div className="bg-white p-4">
                                      <div>
                                        <h6>Work Type</h6>
                                        <button className="btn-save float-end add" data-bs-toggle="modal" data-bs-target="#add-profession">Add <i className="bi bi-plus"></i></button>
                                      </div>
                                      <div className="mt-5">
                                        <div className="row title-head justify-content-between">
                                          <div className="col-sm-4">
                                            <h6>Name</h6>
                                          </div>
                                          <div className="col-sm-4 text-end">
                                            <h6>Actions</h6>
                                          </div>
                                        </div>
                                        <div className="addlist">
                                          <div className="row justify-content-between">
                                            <div className="col-sm-4">
                                              <h6>Work Type</h6>
                                            </div>
                                            <div className="col-sm-4 text-end">
                                              <div className="dropdown">
                                                <i
                                                  className="bi bi-three-dots"
                                                  data-bs-toggle="dropdown"
                                                  aria-expanded="false"
                                                ></i>
                                                <ul class="dropdown-menu details">
                                                  <li>
                                                    <a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#edit-profession">
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
                          <div class="tab-pane fade" id="pills-industry" role="tabpanel" aria-labelledby="pills-industry-tab" tabindex="0">
                            <div className="acc-details">
                              <div className="row justify-content-center">
                                <div className="col-sm-5">
                                  <div className="details-card">
                                    <div className="bg-white p-4">
                                      <div>
                                        <h6>Industry</h6>
                                        <button className="btn-save float-end add" data-bs-toggle="modal" data-bs-target="#add-profession">Add <i className="bi bi-plus"></i></button>
                                      </div>
                                      <div className="mt-5">
                                        <div className="row title-head justify-content-between">
                                          <div className="col-sm-4">
                                            <h6>Name</h6>
                                          </div>
                                         
                                          <div className="col-sm-4 text-end">
                                            <h6>Actions</h6>
                                          </div>
                                        </div>
                                        <div className="addlist">
                                          <div className="row justify-content-between">
                                            <div className="col-sm-4">
                                              <h6>Education</h6>
                                            </div>
                                            <div className="col-sm-4 text-end">
                                              <div className="dropdown">
                                                <i
                                                  className="bi bi-three-dots"
                                                  data-bs-toggle="dropdown"
                                                  aria-expanded="false"
                                                ></i>
                                                <ul class="dropdown-menu details">
                                                  <li>
                                                    <a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#edit-profession">
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
                          <div class="tab-pane fade" id="pills-mni" role="tabpanel" aria-labelledby="pills-mni-tab" tabindex="0">
                            <div className="acc-details">
                              <div className="row justify-content-center">
                                <div className="col-sm-5">
                                  <div className="details-card">
                                  <div className="bg-white p-4">
                                      <div>
                                        <h6>Monthly Net Income</h6>
                                        <button className="btn-save float-end add" data-bs-toggle="modal" data-bs-target="#add-profession">Add <i className="bi bi-plus"></i></button>
                                      </div>
                                      <div className="mt-5">
                                        <div className="row title-head">
                                          <div className="col-sm-4">
                                            <h6>Name</h6>
                                          </div>
                                          <div className="col-sm-4 text-center">
                                            <h6>Points</h6>
                                          </div>
                                          <div className="col-sm-4 text-end">
                                            <h6>Actions</h6>
                                          </div>
                                        </div>
                                        <div className="addlist">
                                          <div className="row">
                                            <div className="col-sm-4">
                                              <h6>Above N 1,000,000</h6>
                                            </div>
                                            <div className="col-sm-4 text-center">
                                              <h6>9</h6>
                                            </div>
                                            <div className="col-sm-4 text-end">
                                              <div className="dropdown">
                                                <i
                                                  className="bi bi-three-dots"
                                                  data-bs-toggle="dropdown"
                                                  aria-expanded="false"
                                                ></i>
                                                <ul class="dropdown-menu details">
                                                  <li>
                                                    <a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#edit-profession">
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
                          <div class="tab-pane fade" id="pills-es" role="tabpanel" aria-labelledby="pills-es-tab" tabindex="0">
                            <div className="acc-details">
                              <div className="row justify-content-center">
                                <div className="col-sm-5">
                                  <div className="details-card">
                                  <div className="bg-white p-4">
                                      <div>
                                        <h6>Employment Sector</h6>
                                        <button className="btn-save float-end add" data-bs-toggle="modal" data-bs-target="#add-profession">Add <i className="bi bi-plus"></i></button>
                                      </div>
                                      <div className="mt-5">
                                        <div className="row title-head">
                                          <div className="col-sm-4">
                                            <h6>Name</h6>
                                          </div>
                                          <div className="col-sm-4 text-center">
                                            <h6>Points</h6>
                                          </div>
                                          <div className="col-sm-4 text-end">
                                            <h6>Actions</h6>
                                          </div>
                                        </div>
                                        <div className="addlist">
                                          <div className="row">
                                            <div className="col-sm-4">
                                              <h6>Education</h6>
                                            </div>
                                            <div className="col-sm-4 text-center">
                                              <h6>9</h6>
                                            </div>
                                            <div className="col-sm-4 text-end">
                                              <div className="dropdown">
                                                <i
                                                  className="bi bi-three-dots"
                                                  data-bs-toggle="dropdown"
                                                  aria-expanded="false"
                                                ></i>
                                                <ul class="dropdown-menu details">
                                                  <li>
                                                    <a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#edit-profession">
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
                          <div class="tab-pane fade" id="pills-ec" role="tabpanel" aria-labelledby="pills-ec-tab" tabindex="0">
                            <div className="acc-details">
                              <div className="row justify-content-center">
                                <div className="col-sm-5">
                                  <div className="details-card">
                                  <div className="bg-white p-4">
                                      <div>
                                        <h6>Employment Category</h6>
                                        <button className="btn-save float-end add" data-bs-toggle="modal" data-bs-target="#add-profession">Add <i className="bi bi-plus"></i></button>
                                      </div>
                                      <div className="mt-5">
                                        <div className="row title-head">
                                          <div className="col-sm-4">
                                            <h6>Name</h6>
                                          </div>
                                          <div className="col-sm-4 text-center">
                                            <h6>Points</h6>
                                          </div>
                                          <div className="col-sm-4 text-end">
                                            <h6>Actions</h6>
                                          </div>
                                        </div>
                                        <div className="addlist">
                                          <div className="row">
                                            <div className="col-sm-4">
                                              <h6>Education</h6>
                                            </div>
                                            <div className="col-sm-4 text-center">
                                              <h6>9</h6>
                                            </div>
                                            <div className="col-sm-4 text-end">
                                              <div className="dropdown">
                                                <i
                                                  className="bi bi-three-dots"
                                                  data-bs-toggle="dropdown"
                                                  aria-expanded="false"
                                                ></i>
                                                <ul class="dropdown-menu details">
                                                  <li>
                                                    <a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#edit-profession">
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
                          <div class="tab-pane fade" id="pills-estatus" role="tabpanel" aria-labelledby="pills-estatus-tab" tabindex="0">
                            <div className="acc-details">
                              <div className="row justify-content-center">
                                <div className="col-sm-5">
                                  <div className="details-card">
                                  <div className="bg-white p-4">
                                      <div>
                                        <h6>Employment Status</h6>
                                        <button className="btn-save float-end add" data-bs-toggle="modal" data-bs-target="#add-profession">Add <i className="bi bi-plus"></i></button>
                                      </div>
                                      <div className="mt-5">
                                        <div className="row title-head">
                                          <div className="col-sm-4">
                                            <h6>Name</h6>
                                          </div>
                                          <div className="col-sm-4 text-center">
                                            <h6>Points</h6>
                                          </div>
                                          <div className="col-sm-4 text-end">
                                            <h6>Actions</h6>
                                          </div>
                                        </div>
                                        <div className="addlist">
                                          <div className="row">
                                            <div className="col-sm-4">
                                              <h6>Unemployed</h6>
                                            </div>
                                            <div className="col-sm-4 text-center">
                                              <h6>9</h6>
                                            </div>
                                            <div className="col-sm-4 text-end">
                                              <div className="dropdown">
                                                <i
                                                  className="bi bi-three-dots"
                                                  data-bs-toggle="dropdown"
                                                  aria-expanded="false"
                                                ></i>
                                                <ul class="dropdown-menu details">
                                                  <li>
                                                    <a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#edit-profession">
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
                  <div
                    className="tab-pane fade"
                    id="pills-z"
                    role="tabpanel"
                    aria-labelledby="pills-z-tab"
                    tabIndex="0"
                  >
                     <div className="acc-details">
                      <div className="row justify-content-center">
                        <div className="col-sm-5">
                          <div className="details-card">
                            <div className="bg-white p-4">
                              <div>
                                <h6>Relationship</h6>
                                <button className="btn-save float-end add" data-bs-toggle="modal" data-bs-target="#add-mit">Add <i className="bi bi-plus"></i></button>
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
                                      <h6>Spouse</h6>
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
                                            <a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#edit-mit">
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
                  <div
                    className="tab-pane fade"
                    id="pills-x"
                    role="tabpanel"
                    aria-labelledby="pills-x-tab"
                    tabIndex="0"
                  >
                    <div className="row justify-content-center">
                      <div className="col-sm-4 loany">
                        <ul className="nav nav-pills  nav-justified" id="pills-tab" role="tablist">
                          <li className="nav-item" role="presentation">
                            <button className="nav-link active" id="pills-pb-tab" data-bs-toggle="pill" data-bs-target="#pills-pb" type="button" role="tab" aria-controls="pills-pb" aria-selected="true">Place of Birth</button>
                          </li>
                          <li className="nav-item" role="presentation">
                            <button className="nav-link" id="pills-gender-tab" data-bs-toggle="pill" data-bs-target="#pills-gender" type="button" role="tab" aria-controls="pills-gender" aria-selected="false">Gender</button>
                          </li>
                          <li className="nav-item" role="presentation">
                            <button className="nav-link" id="pills-doc-tab" data-bs-toggle="pill" data-bs-target="#pills-doc" type="button" role="tab" aria-controls="pills-doc" aria-selected="false">Document</button>
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* KYC Groups */}
                    <div className="row mt-5">
                      <div className="col-sm-12">
                        <div class="tab-content" id="pills-tabContent">
                          <div class="tab-pane fade show active" id="pills-pb" role="tabpanel" aria-labelledby="pills-pb-tab" tabindex="0">
                            <div className="acc-details">
                              <div className="row justify-content-center">
                                <div className="col-sm-5">
                                  <div className="details-card">
                                    <div className="bg-white p-4">
                                      <div>
                                        <h6>Place of Birth</h6>
                                        <button className="btn-save float-end add" data-bs-toggle="modal" data-bs-target="#">Add <i className="bi bi-plus"></i></button>
                                      </div>
                                      <div className="mt-5">
                                        <div className="row title-head justify-content-between">
                                          <div className="col-sm-4">
                                            <h6>Name</h6>
                                          </div>
                                          <div className="col-sm-4 text-end">
                                            <h6>Actions</h6>
                                          </div>
                                        </div>
                                        <div className="addlist">
                                          <div className="row justify-content-between">
                                            <div className="col-sm-4 ">
                                              <h6>Lagos, Ikeja</h6>
                                            </div>
                                            <div className="col-sm-4 text-end">
                                              <div className="dropdown">
                                                <i
                                                  className="bi bi-three-dots"
                                                  data-bs-toggle="dropdown"
                                                  aria-expanded="false"
                                                ></i>
                                                <ul class="dropdown-menu details">
                                                  <li>
                                                    <a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#">
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
                          <div class="tab-pane fade" id="pills-gender" role="tabpanel" aria-labelledby="pills-gender-tab" tabindex="0">
                            <div className="acc-details">
                              <div className="row justify-content-center">
                                <div className="col-sm-5">
                                  <div className="details-card">
                                    <div className="bg-white p-4">
                                      <div>
                                        <h6>Gender</h6>
                                        <button className="btn-save float-end add" data-bs-toggle="modal" data-bs-target="#">Add <i className="bi bi-plus"></i></button>
                                      </div>
                                      <div className="mt-5">
                                        <div className="row title-head">
                                          <div className="col-sm-4">
                                            <h6>Name</h6>
                                          </div>
                                          <div className="col-sm-4 text-center">
                                            <h6>Points</h6>
                                          </div>
                                          <div className="col-sm-4 text-end">
                                            <h6>Actions</h6>
                                          </div>
                                        </div>
                                        <div className="addlist">
                                          <div className="row">
                                            <div className="col-sm-4">
                                              <h6>Male</h6>
                                            </div>
                                            <div className="col-sm-4 text-center">
                                              <h6>9</h6>
                                            </div>
                                            <div className="col-sm-4 text-end">
                                              <div className="dropdown">
                                                <i
                                                  className="bi bi-three-dots"
                                                  data-bs-toggle="dropdown"
                                                  aria-expanded="false"
                                                ></i>
                                                <ul class="dropdown-menu details">
                                                  <li>
                                                    <a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#">
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
                          <div class="tab-pane fade" id="pills-doc" role="tabpanel" aria-labelledby="pills-doc-tab" tabindex="0">
                            <div className="acc-details">
                              <div className="row justify-content-center">
                                <div className="col-sm-5">
                                  <div className="details-card">
                                  <div className="bg-white p-4">
                                      <div>
                                        <h6>Document</h6>
                                        <button className="btn-save float-end add" data-bs-toggle="modal" data-bs-target="#">Add <i className="bi bi-plus"></i></button>
                                      </div>
                                      <div className="mt-5">
                                        <div className="row title-head justify-content-between">
                                          <div className="col-sm-4">
                                            <h6>Name</h6>
                                          </div>
                                          <div className="col-sm-4 text-end">
                                            <h6>Actions</h6>
                                          </div>
                                        </div>
                                        <div className="addlist">
                                          <div className="row justify-content-between">
                                            <div className="col-sm-4">
                                              <h6>Electric Bill</h6>
                                            </div>
                                            <div className="col-sm-4 text-end">
                                              <div className="dropdown">
                                                <i
                                                  className="bi bi-three-dots"
                                                  data-bs-toggle="dropdown"
                                                  aria-expanded="false"
                                                ></i>
                                                <ul class="dropdown-menu details">
                                                  <li>
                                                    <a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#">
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
          </div>
        </div>
      </div>
      {/* Add Product Modal */}
      <div className="modal fade modal-m" id="add" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title">Create Loan Purpose</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className="inner-card">
                <div className="row mt-5">
                  <div className="col-sm-12">
                    <Form>
                      <Form.Group className="mb-3">
                        <Form.Control type="text" placeholder="" />
                      </Form.Group>
                      <div className="text-end">
                        <button type="button" className="btn-save"> Save</button>
                      </div>
                    </Form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Edit Product Modal */}
      <div className="modal fade modal-m" id="edit" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title">Edit Loan Purpose</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className="inner-card">
                <div className="row mt-5">
                  <div className="col-sm-12">
                    <Form>
                      <Form.Group className="mb-3">
                        <Form.Control type="text" defaultValue="Premium" />
                      </Form.Group>
                      <div className="text-end">
                        <button type="button" className="btn-save"> Save</button>
                      </div>
                    </Form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Add Bank */}
      <div className="modal fade modal-m" id="add-title" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title">Create Bank Name</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className="inner-card">
                <div className="row mt-5">
                  <div className="col-sm-12">
                    <Form>
                      <Form.Group className="mb-3">
                        <Form.Control type="text" placeholder="Name of Bank" />
                      </Form.Group>
                      <div className="text-end">
                        <button type="button" className="btn-save"> Save</button>
                      </div>
                    </Form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Edit Bank Modal */}
      <div className="modal fade modal-m" id="edit-title" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title">Edit Title</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className="inner-card">
                <div className="row mt-5">
                  <div className="col-sm-12">
                    <Form>
                      <Form.Group className="mb-3">
                        <Form.Control type="text" defaultValue="Globus" />
                      </Form.Group>
                      <div className="text-end">
                        <button type="button" className="btn-save"> Save</button>
                      </div>
                    </Form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Add Marital Status Type */}
      <div className="modal fade modal-m" id="add-profession" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title">Create Marital Status Type</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className="inner-card">
                <div className="row mt-5">
                  <div className="col-sm-12">
                    <Form>
                      <Row>
                        <Col>
                          <Form.Group className="mb-3">
                            <Form.Control type="text" placeholder="Name of Marital Status Type" />
                          </Form.Group>
                        </Col>
                        <Col>
                          <Form.Group className="mb-3">
                            <Form.Control type="number" placeholder="Enter point value (Max of 10 pts Min of 0 pts)" />
                          </Form.Group>
                        </Col>
                      </Row>
                      <div className="text-end">
                        <button type="button" className="btn-save"> Save</button>
                      </div>
                    </Form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Edit Marital Status Type */}
      <div className="modal fade modal-m" id="edit-profession" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title">Edit Marital Status Type</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className="inner-card">
                <div className="row mt-5">
                  <div className="col-sm-12">
                    <Form>
                      <Row>
                        <Col>
                          <Form.Group className="mb-3">
                            <Form.Control type="text" placeholder="Name of Marital Status Type" />
                          </Form.Group>
                        </Col>
                        <Col>
                          <Form.Group className="mb-3">
                            <Form.Control type="number" placeholder="Enter point value (Max of 10 pts Min of 0 pts)" />
                          </Form.Group>
                        </Col>
                      </Row>
                      <div className="text-end">
                        <button type="button" className="btn-save"> Save</button>
                      </div>
                    </Form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Add Member Relationship */}
      <div className="modal fade modal-m" id="add-mr" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title">Create Member Relationship</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className="inner-card">
                <div className="row mt-5">
                  <div className="col-sm-12">
                    <Form>
                      <Form.Group className="mb-3">
                        <Form.Control type="text" placeholder="Name of Member Relationship" />
                      </Form.Group>
                      <div className="text-end">
                        <button type="button" className="btn-save"> Save</button>
                      </div>
                    </Form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Edit Member Relationship */}
      <div className="modal fade modal-m" id="edit-mr" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title">Edit Member Relationship</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className="inner-card">
                <div className="row mt-5">
                  <div className="col-sm-12">
                    <Form>
                      <Form.Group className="mb-3">
                        <Form.Control type="text" defaultValue="Member Relationship" />
                      </Form.Group>
                      <div className="text-end">
                        <button type="button" className="btn-save"> Save</button>
                      </div>
                    </Form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Add Relationship Type */}
      <div className="modal fade modal-m" id="add-mit" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title">Create Relationship Type</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className="inner-card">
                <div className="row mt-5">
                  <div className="col-sm-12">
                    <Form>
                      <Form.Group className="mb-3">
                        <Form.Control type="text" placeholder="Spouse/Wife" />
                      </Form.Group>
                      <div className="text-end">
                        <button type="button" className="btn-save"> Save</button>
                      </div>
                    </Form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Edit Relationship Type */}
      <div className="modal fade modal-m" id="edit-mit" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title">Edit Relationship Type</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className="inner-card">
                <div className="row mt-5">
                  <div className="col-sm-12">
                    <Form>
                      <Form.Group className="mb-3">
                        <Form.Control type="text" defaultValue="" />
                      </Form.Group>
                      <div className="text-end">
                        <button type="button" className="btn-save"> Save</button>
                      </div>
                    </Form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
       {/* Add Member Instructions */}
      <div className="modal fade modal-m" id="add-mi" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title">Create Member Instructions</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className="inner-card">
                <div className="row mt-5">
                  <div className="col-sm-12">
                    <Form>
                      <Form.Group className="mb-3">
                        <Form.Control type="text" placeholder="Member Instructions" />
                      </Form.Group>
                      <div className="text-end">
                        <button type="button" className="btn-save"> Save</button>
                      </div>
                    </Form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Edit Member Instructions */}
      <div className="modal fade modal-m" id="edit-mi" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title">Edit Member Instructions</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className="inner-card">
                <div className="row mt-5">
                  <div className="col-sm-12">
                    <Form>
                      <Form.Group className="mb-3">
                        <Form.Control type="text" defaultValue="Member Instructions" />
                      </Form.Group>
                      <div className="text-end">
                        <button type="button" className="btn-save"> Save</button>
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



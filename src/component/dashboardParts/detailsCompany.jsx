import SearchNotification from "./searchNotification";
import { Swiper, SwiperSlide } from 'swiper/react';
import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';
import valid from "../../assets/validid.svg";
import back from "../../assets/back.svg";
import avi from "../../assets/o.svg";
import { Col, Form, Row } from "react-bootstrap";
import { Icon } from "@iconify/react";


const fileTypes = ["JPG", "PNG"];
function DetailsCompany() {
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
              <h5 className="me-3">Company Details</h5>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-2 mx-5">
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="report-card">
              <h3>Total companies</h3>
              <h6 className="mt-3 text-black">0</h6>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="report-card">
              <h3>Rejected companies</h3>
              <h6 className="mt-3 text-black">0</h6>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="report-card">
              <h3>Onboarded companies</h3>
              <h6 className="mt-3 text-black">0</h6>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="report-card">
              <h3>Pending companies</h3>
              <h6 className="mt-3 text-black">0</h6>
            </div>
          </SwiperSlide>
          {/* <SwiperSlide>
            <div className="report-card">
              <h3>Agents logged in today</h3>
              <h6 className="mt-3 text-black">0</h6>
            </div>
          </SwiperSlide> */}
        </Swiper>
      </div>
      <div className="mt-5 row mx-5">
        <div className="col-sm-12 px-0">
          <div className="bg-white p-4 view-loans">
            <div className="row justify-content-center mt-5">
              <div className="col-sm-12">
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
                        Overview
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
                        Statements
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
                        Accounts
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
                        KYC Identification
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
                        Collateral
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
                        Company Details
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
                        Bank Details
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
                        Files
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
                        Payments
                      </button>
                    </li>
                    <li class="nav-item" role="presentation">
                      <button
                        class="nav-link"
                        id="pills-n-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-n"
                        type="button"
                        role="tab"
                        aria-controls="pills-n"
                        aria-selected="false"
                      >
                        Employees
                      </button>
                    </li>
                    <li class="nav-item" role="presentation">
                      <button
                        class="nav-link"
                        id="pills-m-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-m"
                        type="button"
                        role="tab"
                        aria-controls="pills-m"
                        aria-selected="false"
                      >
                        Payroll
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
                        <div className="col-sm-10">
                          <div className="details-card">
                            <div className="bg-white p-4">
                              <div>
                                <h6>Overview</h6>
                                <img src={avi} alt="user" className="img-fluid float-end" style={{marginTop: "-27px"}}/>
                                <hr />
                              </div>
                              <table className="table overview-table mt-3">
                                <tbody>
                                  <tr>
                                    <th>First Name</th>
                                    <td>Olamilekan</td>
                                  </tr>
                                  <tr>
                                    <th>Middle Name</th>
                                    <td>Anikulapo</td>
                                  </tr>
                                  <tr>
                                    <th>Gender</th>
                                    <td>Male</td>
                                  </tr>
                                  <tr>
                                    <th>Prefix</th>
                                    <td>Mr</td>
                                  </tr>
                                  <tr>
                                    <th>Marital Status</th>
                                    <td>Single</td>
                                  </tr>
                                  <tr>
                                    <th>Date of Birth</th>
                                    <td>09-11-1999</td>
                                  </tr>
                                </tbody>
                              </table>
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
                    <div className="row justify-content-center">
                      <div className="col-sm-2 loany">
                        <ul className="nav nav-pills  nav-justified" id="pills-tab" role="tablist">
                          <li className="nav-item" role="presentation">
                            <button className="nav-link active" id="pills-loan-tab" data-bs-toggle="pill" data-bs-target="#pills-loan" type="button" role="tab" aria-controls="pills-loan" aria-selected="true">Loans</button>
                          </li>
                          <li className="nav-item" role="presentation">
                            <button className="nav-link" id="pills-savings-tab" data-bs-toggle="pill" data-bs-target="#pills-savings" type="button" role="tab" aria-controls="pills-saving" aria-selected="false">Savings</button>
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* Loan and Saving */}
                    <div className="row mt-5">
                      <div className="col-sm-12">
                        <div class="tab-content" id="pills-tabContent">
                          <div class="tab-pane fade show active" id="pills-loan" role="tabpanel" aria-labelledby="pills-loan-tab" tabindex="0">
                            <div className="overview">
                              <div className="row justify-content-center">
                                <div className="col-sm-10">
                                  <div className="details-card">
                                    <div className="bg-white p-4">
                                      <div>
                                        <h6>Statement - <span style={{color: "#9CA3AF", fontSize: "10px"}}>Account Summary</span></h6>
                                        <hr />
                                      </div>
                                      <Form className="modal-m">
                                        <Row className="mb-4">
                                          <Col xs={5}>
                                            <Form.Label>From:</Form.Label>
                                            <Form.Control type="date" />
                                          </Col>
                                          <Col xs={5}>
                                            <Form.Label>To:</Form.Label>
                                            <Form.Control type="date"  />
                                          </Col>
                                          <Col xs={2}>
                                            <button className="btn-save w-100" style={{marginTop: "33px"}}>Proceed</button>
                                          </Col>
                                        </Row>
                                      </Form>
                                      <p>Showing all statements from January 1 2023 to June 20 2023</p>
                                      <table className="table overview-table mt-3">
                                        <tbody>
                                          <tr>
                                            <th>Total Debit</th>
                                            <td>₦ 0.00</td>
                                          </tr>
                                          <tr>
                                            <th>Total Credit</th>
                                            <td>₦ 0.00</td>
                                          </tr>
                                          <tr>
                                            <th>Balance Due</th>
                                            <td>₦ 0.00</td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="tab-pane fade" id="pills-savings" role="tabpanel" aria-labelledby="pills-savings-tab" tabindex="0">
                            <div className="overview">
                              <div className="row justify-content-center">
                                <div className="col-sm-10">
                                  <div className="details-card">
                                    <div className="bg-white p-4">
                                      <div>
                                        <h6>Statement - <span style={{color: "#9CA3AF", fontSize: "10px"}}>Account Summary</span></h6>
                                        <hr />
                                      </div>
                                      <Form className="modal-m">
                                        <Row className="mb-4">
                                          <Col xs={5}>
                                            <Form.Label>From:</Form.Label>
                                            <Form.Control type="date" />
                                          </Col>
                                          <Col xs={5}>
                                            <Form.Label>To:</Form.Label>
                                            <Form.Control type="date"  />
                                          </Col>
                                          <Col xs={2}>
                                            <button className="btn-save w-100" style={{marginTop: "33px"}}>Proceed</button>
                                          </Col>
                                        </Row>
                                      </Form>
                                      <p>Showing all statements from February 1 2023 to June 20 2023</p>
                                      <table className="table overview-table mt-3">
                                        <tbody>
                                          <tr>
                                            <th>Total Debit</th>
                                            <td>₦ 0.00</td>
                                          </tr>
                                          <tr>
                                            <th>Total Credit</th>
                                            <td>₦ 0.00</td>
                                          </tr>
                                          <tr>
                                            <th>Balance Due</th>
                                            <td>₦ 0.00</td>
                                          </tr>
                                        </tbody>
                                      </table>
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
                      <div className="col-sm-2 loany">
                        <ul className="nav nav-pills  nav-justified" id="pills-tab" role="tablist">
                          <li className="nav-item" role="presentation">
                            <button className="nav-link active" id="pills-loana-tab" data-bs-toggle="pill" data-bs-target="#pills-loana" type="button" role="tab" aria-controls="pills-loana" aria-selected="true">Loans</button>
                          </li>
                          <li className="nav-item" role="presentation">
                            <button className="nav-link" id="pills-savingsa-tab" data-bs-toggle="pill" data-bs-target="#pills-savingsa" type="button" role="tab" aria-controls="pills-savinga" aria-selected="false">Savings</button>
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* Loan and Saving */}
                    <div className="row mt-5">
                      <div className="col-sm-12">
                        <div class="tab-content" id="pills-tabContent">
                          <div class="tab-pane fade show active" id="pills-loana" role="tabpanel" aria-labelledby="pills-loan-tab" tabindex="0">
                            <div className="overview">
                              <div className="row justify-content-center">
                                <div className="col-sm-12">
                                  <div className="details-card members">
                                    <div className="bg-white p-4">
                                      <table
                                        className="table table-responsive"
                                        style={{ width: "100%" }}
                                        id="example"
                                      >
                                        <thead className="bg-white rounded-pill">
                                          <tr>
                                            <th>Action</th>
                                            <th>ID</th>
                                            <th>Loan officer</th>
                                            <th>Client type</th>
                                            <th>Principal</th>
                                            <th>Balance</th>
                                            <th>Disbursed date</th>
                                            <th>Product</th>
                                            <th>Interest rate</th>
                                            <th>Current amount date</th>
                                            <th>Total amount paid</th>
                                            <th>Last repayment date</th>
                                            <th>Status</th>
                                            <th>Maturity date</th>
                                          </tr>
                                        </thead>
                                        <tbody>
                                          <tr>
                                            <td>
                                              <div className="dropdown">
                                                <i
                                                  className="bi bi-three-dots"
                                                  data-bs-toggle="dropdown"
                                                  aria-expanded="false"
                                                ></i>
                                                <ul class="dropdown-menu details">
                                                  <li>
                                                    <a className="dropdown-item" href="/all-loans/details">
                                                      View Details
                                                    </a>
                                                  </li>
                                                </ul>
                                              </div>
                                            </td>
                                            <td>#11-22</td>
                                            <td>Ade Ola</td>
                                            <td>Level 1</td>
                                            <td>₦10,000</td>
                                            <td>₦10,000,</td>
                                            <td>15/06/2023</td>
                                            <td>Auto loan</td>
                                            <td>5%</td>
                                            <td>15/06/2023</td>
                                            <td>₦10,000,000</td>
                                            <td>15/06/2023</td>
                                            <td>
                                              <span className="approved">Approved</span>
                                            </td>
                                            <td>15/06/2023</td>
                                          </tr>
                                          <tr>
                                            <td>
                                              <div className="dropdown">
                                                <i
                                                  className="bi bi-three-dots"
                                                  data-bs-toggle="dropdown"
                                                  aria-expanded="false"
                                                ></i>
                                                <ul class="dropdown-menu details">
                                                  <li>
                                                    <a className="dropdown-item" href="/all-loans/details">
                                                      View Details
                                                    </a>
                                                  </li>
                                                </ul>
                                              </div>
                                            </td>
                                            <td>#11-22</td>
                                            <td>Ugbor Faith</td>
                                            <td>Level 1</td>
                                            <td>₦10,000</td>
                                            <td>₦10,000,</td>
                                            <td>15/06/2023</td>
                                            <td>Auto loan</td>
                                            <td>5%</td>
                                            <td>15/06/2023</td>
                                            <td>₦10,000,000</td>
                                            <td>15/06/2023</td>
                                            <td>
                                              <span className="withdrawn">Withdrawn</span>
                                            </td>
                                            <td>15/06/2023</td>
                                          </tr>
                                          <tr>
                                            <td>
                                              <div className="dropdown">
                                                <i
                                                  className="bi bi-three-dots"
                                                  data-bs-toggle="dropdown"
                                                  aria-expanded="false"
                                                ></i>
                                                <ul class="dropdown-menu details">
                                                  <li>
                                                    <a className="dropdown-item" href="/all-loans/details">
                                                      View Details
                                                    </a>
                                                  </li>
                                                </ul>
                                              </div>
                                            </td>
                                            <td>#11-22</td>
                                            <td>Elon Musk</td>
                                            <td>Level 1</td>
                                            <td>₦10,000</td>
                                            <td>₦10,000,</td>
                                            <td>15/06/2023</td>
                                            <td>Auto loan</td>
                                            <td>5%</td>
                                            <td>15/06/2023</td>
                                            <td>₦10,000,000</td>
                                            <td>15/06/2023</td>
                                            <td>
                                              <span className="awaiting">Awaiting</span>
                                            </td>
                                            <td>15/06/2023</td>
                                          </tr>
                                          <tr>
                                            <td>
                                              <div className="dropdown">
                                                <i
                                                  className="bi bi-three-dots"
                                                  data-bs-toggle="dropdown"
                                                  aria-expanded="false"
                                                ></i>
                                                <ul class="dropdown-menu details">
                                                  <li>
                                                    <a className="dropdown-item" href="/all-loans/details">
                                                      View Details
                                                    </a>
                                                  </li>
                                                </ul>
                                              </div>
                                            </td>
                                            <td>#11-22</td>
                                            <td>John Doe</td>
                                            <td>Level 7</td>
                                            <td>₦10,000</td>
                                            <td>₦10,000,</td>
                                            <td>15/06/2023</td>
                                            <td>Auto loan</td>
                                            <td>5%</td>
                                            <td>15/06/2023</td>
                                            <td>₦10,000,000</td>
                                            <td>15/06/2023</td>
                                            <td>
                                              <span className="approved">In good standing</span>
                                            </td>
                                            <td>15/06/2023</td>
                                          </tr>
                                          <tr>
                                            <td>
                                              <div className="dropdown">
                                                <i
                                                  className="bi bi-three-dots"
                                                  data-bs-toggle="dropdown"
                                                  aria-expanded="false"
                                                ></i>
                                                <ul class="dropdown-menu details">
                                                  <li>
                                                    <a className="dropdown-item" href="/all-loans/details">
                                                      View Details
                                                    </a>
                                                  </li>
                                                </ul>
                                              </div>
                                            </td>
                                            <td>#11-22</td>
                                            <td>John Doe</td>
                                            <td>Level 7</td>
                                            <td>₦10,000</td>
                                            <td>₦10,000,</td>
                                            <td>15/06/2023</td>
                                            <td>Auto loan</td>
                                            <td>5%</td>
                                            <td>15/06/2023</td>
                                            <td>₦10,000,000</td>
                                            <td>15/06/2023</td>
                                            <td>
                                              <span className="withdrawn">Closed</span>
                                            </td>
                                            <td>15/06/2023</td>
                                          </tr>
                                          <tr>
                                            <td>
                                              <div className="dropdown">
                                                <i
                                                  className="bi bi-three-dots"
                                                  data-bs-toggle="dropdown"
                                                  aria-expanded="false"
                                                ></i>
                                                <ul class="dropdown-menu details">
                                                  <li>
                                                    <a className="dropdown-item" href="/all-loans/details">
                                                      View Details
                                                    </a>
                                                  </li>
                                                </ul>
                                              </div>
                                            </td>
                                            <td>#11-22</td>
                                            <td>John Doe</td>
                                            <td>Level 7</td>
                                            <td>₦10,000</td>
                                            <td>₦10,000,</td>
                                            <td>15/06/2023</td>
                                            <td>Auto loan</td>
                                            <td>5%</td>
                                            <td>15/06/2023</td>
                                            <td>₦10,000,000</td>
                                            <td>15/06/2023</td>
                                            <td>
                                              <span className="activ">Active</span>
                                            </td>
                                            <td>15/06/2023</td>
                                          </tr>
                                          <tr>
                                            <td>
                                              <div className="dropdown">
                                                <i
                                                  className="bi bi-three-dots"
                                                  data-bs-toggle="dropdown"
                                                  aria-expanded="false"
                                                ></i>
                                                <ul class="dropdown-menu details">
                                                  <li>
                                                    <a className="dropdown-item" href="/all-loans/details">
                                                      View Details
                                                    </a>
                                                  </li>
                                                </ul>
                                              </div>
                                            </td>
                                            <td>#11-22</td>
                                            <td>John Doe</td>
                                            <td>Level 7</td>
                                            <td>₦10,000</td>
                                            <td>₦10,000,</td>
                                            <td>15/06/2023</td>
                                            <td>Auto loan</td>
                                            <td>5%</td>
                                            <td>15/06/2023</td>
                                            <td>₦10,000,000</td>
                                            <td>15/06/2023</td>
                                            <td>
                                              <span className="activ">Active</span>
                                            </td>
                                            <td>15/06/2023</td>
                                          </tr>
                                          <tr>
                                            <td>
                                              <div className="dropdown">
                                                <i
                                                  className="bi bi-three-dots"
                                                  data-bs-toggle="dropdown"
                                                  aria-expanded="false"
                                                ></i>
                                                <ul class="dropdown-menu details">
                                                  <li>
                                                    <a className="dropdown-item" href="/all-loans/details">
                                                      View Details
                                                    </a>
                                                  </li>
                                                </ul>
                                              </div>
                                            </td>
                                            <td>#11-22</td>
                                            <td>John Doe</td>
                                            <td>Level 7</td>
                                            <td>₦10,000</td>
                                            <td>₦10,000,</td>
                                            <td>15/06/2023</td>
                                            <td>Auto loan</td>
                                            <td>5%</td>
                                            <td>15/06/2023</td>
                                            <td>₦10,000,000</td>
                                            <td>15/06/2023</td>
                                            <td>
                                              <span className="activ">Active</span>
                                            </td>
                                            <td>15/06/2023</td>
                                          </tr>
                                          <tr>
                                            <td>
                                              <div className="dropdown">
                                                <i
                                                  className="bi bi-three-dots"
                                                  data-bs-toggle="dropdown"
                                                  aria-expanded="false"
                                                ></i>
                                                <ul class="dropdown-menu details">
                                                  <li>
                                                    <a className="dropdown-item" href="/all-loans/details">
                                                      View Details
                                                    </a>
                                                  </li>
                                                </ul>
                                              </div>
                                            </td>
                                            <td>#11-22</td>
                                            <td>John Doe</td>
                                            <td>Level 7</td>
                                            <td>₦10,000</td>
                                            <td>₦10,000,</td>
                                            <td>15/06/2023</td>
                                            <td>Auto loan</td>
                                            <td>5%</td>
                                            <td>15/06/2023</td>
                                            <td>₦10,000,000</td>
                                            <td>15/06/2023</td>
                                            <td>
                                              <span className="activ">Active</span>
                                            </td>
                                            <td>15/06/2023</td>
                                          </tr>
                                          <tr>
                                            <td>
                                              <div className="dropdown">
                                                <i
                                                  className="bi bi-three-dots"
                                                  data-bs-toggle="dropdown"
                                                  aria-expanded="false"
                                                ></i>
                                                <ul class="dropdown-menu details">
                                                  <li>
                                                    <a className="dropdown-item" href="/all-loans/details">
                                                      View Details
                                                    </a>
                                                  </li>
                                                </ul>
                                              </div>
                                            </td>
                                            <td>#11-22</td>
                                            <td>John Doe</td>
                                            <td>Level 7</td>
                                            <td>₦10,000</td>
                                            <td>₦10,000,</td>
                                            <td>15/06/2023</td>
                                            <td>Auto loan</td>
                                            <td>5%</td>
                                            <td>15/06/2023</td>
                                            <td>₦10,000,000</td>
                                            <td>15/06/2023</td>
                                            <td>
                                              <span className="activ">Active</span>
                                            </td>
                                            <td>15/06/2023</td>
                                          </tr>
                                          <tr>
                                            <td>
                                              <div className="dropdown">
                                                <i
                                                  className="bi bi-three-dots"
                                                  data-bs-toggle="dropdown"
                                                  aria-expanded="false"
                                                ></i>
                                                <ul class="dropdown-menu details">
                                                  <li>
                                                    <a className="dropdown-item" href="/all-loans/details">
                                                      View Details
                                                    </a>
                                                  </li>
                                                </ul>
                                              </div>
                                            </td>
                                            <td>#11-22</td>
                                            <td>Rukky</td>
                                            <td>Level 7</td>
                                            <td>₦10,000</td>
                                            <td>₦10,000,</td>
                                            <td>15/06/2023</td>
                                            <td>Auto loan</td>
                                            <td>5%</td>
                                            <td>15/06/2023</td>
                                            <td>₦10,000,000</td>
                                            <td>15/06/2023</td>
                                            <td>
                                              <span className="activ">Active</span>
                                            </td>
                                            <td>15/06/2023</td>
                                          </tr>
                                          <tr>
                                            <td>
                                              <div className="dropdown">
                                                <i
                                                  className="bi bi-three-dots"
                                                  data-bs-toggle="dropdown"
                                                  aria-expanded="false"
                                                ></i>
                                                <ul class="dropdown-menu details">
                                                  <li>
                                                    <a className="dropdown-item" href="/all-loans/details">
                                                      View Details
                                                    </a>
                                                  </li>
                                                </ul>
                                              </div>
                                            </td>
                                            <td>#11-22</td>
                                            <td>Kunle Ola</td>
                                            <td>Level 2</td>
                                            <td>₦10,000</td>
                                            <td>₦10,000,</td>
                                            <td>15/06/2023</td>
                                            <td>Auto loan</td>
                                            <td>5%</td>
                                            <td>15/06/2023</td>
                                            <td>₦10,000,000</td>
                                            <td>15/06/2023</td>
                                            <td>
                                              <span className="activ">Active</span>
                                            </td>
                                            <td>15/06/2023</td>
                                          </tr>
                                        </tbody>
                                      </table> 
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="tab-pane fade" id="pills-savingsa" role="tabpanel" aria-labelledby="pills-savings-tab" tabindex="0">
                            <div className="overview">
                              <div className="row justify-content-center">
                                <div className="col-sm-12">
                                  <div className="details-card members">
                                    <div className="bg-white p-4">
                                      <table
                                        className="table table-responsive"
                                        style={{ width: "100%" }}
                                        id="loans"
                                      >
                                        <thead className="bg-white rounded-pill">
                                          <tr>
                                            <th>Action</th>
                                            <th>ID</th>
                                            <th>Loan officer</th>
                                            <th>Client type</th>
                                            <th>Principal</th>
                                            <th>Balance</th>
                                            <th>Disbursed date</th>
                                            <th>Product</th>
                                            <th>Interest rate</th>
                                            <th>Current amount date</th>
                                            <th>Total amount paid</th>
                                            <th>Last repayment date</th>
                                            <th>Status</th>
                                            <th>Maturity date</th>
                                          </tr>
                                        </thead>
                                        <tbody>
                                          <tr>
                                            <td>
                                              <div className="dropdown">
                                                <i
                                                  className="bi bi-three-dots"
                                                  data-bs-toggle="dropdown"
                                                  aria-expanded="false"
                                                ></i>
                                                <ul class="dropdown-menu details">
                                                  <li>
                                                    <a className="dropdown-item" href="/all-loans/details">
                                                      View Details
                                                    </a>
                                                  </li>
                                                </ul>
                                              </div>
                                            </td>
                                            <td>#11-22</td>
                                            <td>Ade Ola</td>
                                            <td>Level 1</td>
                                            <td>₦10,000</td>
                                            <td>₦10,000,</td>
                                            <td>15/06/2023</td>
                                            <td>Auto loan</td>
                                            <td>5%</td>
                                            <td>15/06/2023</td>
                                            <td>₦10,000,000</td>
                                            <td>15/06/2023</td>
                                            <td>
                                              <span className="approved">Approved</span>
                                            </td>
                                            <td>15/06/2023</td>
                                          </tr>
                                          <tr>
                                            <td>
                                              <div className="dropdown">
                                                <i
                                                  className="bi bi-three-dots"
                                                  data-bs-toggle="dropdown"
                                                  aria-expanded="false"
                                                ></i>
                                                <ul class="dropdown-menu details">
                                                  <li>
                                                    <a className="dropdown-item" href="/all-loans/details">
                                                      View Details
                                                    </a>
                                                  </li>
                                                </ul>
                                              </div>
                                            </td>
                                            <td>#11-22</td>
                                            <td>Ugbor Faith</td>
                                            <td>Level 1</td>
                                            <td>₦10,000</td>
                                            <td>₦10,000,</td>
                                            <td>15/06/2023</td>
                                            <td>Auto loan</td>
                                            <td>5%</td>
                                            <td>15/06/2023</td>
                                            <td>₦10,000,000</td>
                                            <td>15/06/2023</td>
                                            <td>
                                              <span className="withdrawn">Withdrawn</span>
                                            </td>
                                            <td>15/06/2023</td>
                                          </tr>
                                          <tr>
                                            <td>
                                              <div className="dropdown">
                                                <i
                                                  className="bi bi-three-dots"
                                                  data-bs-toggle="dropdown"
                                                  aria-expanded="false"
                                                ></i>
                                                <ul class="dropdown-menu details">
                                                  <li>
                                                    <a className="dropdown-item" href="/all-loans/details">
                                                      View Details
                                                    </a>
                                                  </li>
                                                </ul>
                                              </div>
                                            </td>
                                            <td>#11-22</td>
                                            <td>Elon Musk</td>
                                            <td>Level 1</td>
                                            <td>₦10,000</td>
                                            <td>₦10,000,</td>
                                            <td>15/06/2023</td>
                                            <td>Auto loan</td>
                                            <td>5%</td>
                                            <td>15/06/2023</td>
                                            <td>₦10,000,000</td>
                                            <td>15/06/2023</td>
                                            <td>
                                              <span className="awaiting">Awaiting</span>
                                            </td>
                                            <td>15/06/2023</td>
                                          </tr>
                                          <tr>
                                            <td>
                                              <div className="dropdown">
                                                <i
                                                  className="bi bi-three-dots"
                                                  data-bs-toggle="dropdown"
                                                  aria-expanded="false"
                                                ></i>
                                                <ul class="dropdown-menu details">
                                                  <li>
                                                    <a className="dropdown-item" href="/all-loans/details">
                                                      View Details
                                                    </a>
                                                  </li>
                                                </ul>
                                              </div>
                                            </td>
                                            <td>#11-22</td>
                                            <td>John Doe</td>
                                            <td>Level 7</td>
                                            <td>₦10,000</td>
                                            <td>₦10,000,</td>
                                            <td>15/06/2023</td>
                                            <td>Auto loan</td>
                                            <td>5%</td>
                                            <td>15/06/2023</td>
                                            <td>₦10,000,000</td>
                                            <td>15/06/2023</td>
                                            <td>
                                              <span className="approved">In good standing</span>
                                            </td>
                                            <td>15/06/2023</td>
                                          </tr>
                                          <tr>
                                            <td>
                                              <div className="dropdown">
                                                <i
                                                  className="bi bi-three-dots"
                                                  data-bs-toggle="dropdown"
                                                  aria-expanded="false"
                                                ></i>
                                                <ul class="dropdown-menu details">
                                                  <li>
                                                    <a className="dropdown-item" href="/all-loans/details">
                                                      View Details
                                                    </a>
                                                  </li>
                                                </ul>
                                              </div>
                                            </td>
                                            <td>#11-22</td>
                                            <td>John Doe</td>
                                            <td>Level 7</td>
                                            <td>₦10,000</td>
                                            <td>₦10,000,</td>
                                            <td>15/06/2023</td>
                                            <td>Auto loan</td>
                                            <td>5%</td>
                                            <td>15/06/2023</td>
                                            <td>₦10,000,000</td>
                                            <td>15/06/2023</td>
                                            <td>
                                              <span className="withdrawn">Closed</span>
                                            </td>
                                            <td>15/06/2023</td>
                                          </tr>
                                          <tr>
                                            <td>
                                              <div className="dropdown">
                                                <i
                                                  className="bi bi-three-dots"
                                                  data-bs-toggle="dropdown"
                                                  aria-expanded="false"
                                                ></i>
                                                <ul class="dropdown-menu details">
                                                  <li>
                                                    <a className="dropdown-item" href="/all-loans/details">
                                                      View Details
                                                    </a>
                                                  </li>
                                                </ul>
                                              </div>
                                            </td>
                                            <td>#11-22</td>
                                            <td>John Doe</td>
                                            <td>Level 7</td>
                                            <td>₦10,000</td>
                                            <td>₦10,000,</td>
                                            <td>15/06/2023</td>
                                            <td>Auto loan</td>
                                            <td>5%</td>
                                            <td>15/06/2023</td>
                                            <td>₦10,000,000</td>
                                            <td>15/06/2023</td>
                                            <td>
                                              <span className="activ">Active</span>
                                            </td>
                                            <td>15/06/2023</td>
                                          </tr>
                                          <tr>
                                            <td>
                                              <div className="dropdown">
                                                <i
                                                  className="bi bi-three-dots"
                                                  data-bs-toggle="dropdown"
                                                  aria-expanded="false"
                                                ></i>
                                                <ul class="dropdown-menu details">
                                                  <li>
                                                    <a className="dropdown-item" href="/all-loans/details">
                                                      View Details
                                                    </a>
                                                  </li>
                                                </ul>
                                              </div>
                                            </td>
                                            <td>#11-22</td>
                                            <td>John Doe</td>
                                            <td>Level 7</td>
                                            <td>₦10,000</td>
                                            <td>₦10,000,</td>
                                            <td>15/06/2023</td>
                                            <td>Auto loan</td>
                                            <td>5%</td>
                                            <td>15/06/2023</td>
                                            <td>₦10,000,000</td>
                                            <td>15/06/2023</td>
                                            <td>
                                              <span className="activ">Active</span>
                                            </td>
                                            <td>15/06/2023</td>
                                          </tr>
                                          <tr>
                                            <td>
                                              <div className="dropdown">
                                                <i
                                                  className="bi bi-three-dots"
                                                  data-bs-toggle="dropdown"
                                                  aria-expanded="false"
                                                ></i>
                                                <ul class="dropdown-menu details">
                                                  <li>
                                                    <a className="dropdown-item" href="/all-loans/details">
                                                      View Details
                                                    </a>
                                                  </li>
                                                </ul>
                                              </div>
                                            </td>
                                            <td>#11-22</td>
                                            <td>John Doe</td>
                                            <td>Level 7</td>
                                            <td>₦10,000</td>
                                            <td>₦10,000,</td>
                                            <td>15/06/2023</td>
                                            <td>Auto loan</td>
                                            <td>5%</td>
                                            <td>15/06/2023</td>
                                            <td>₦10,000,000</td>
                                            <td>15/06/2023</td>
                                            <td>
                                              <span className="activ">Active</span>
                                            </td>
                                            <td>15/06/2023</td>
                                          </tr>
                                          <tr>
                                            <td>
                                              <div className="dropdown">
                                                <i
                                                  className="bi bi-three-dots"
                                                  data-bs-toggle="dropdown"
                                                  aria-expanded="false"
                                                ></i>
                                                <ul class="dropdown-menu details">
                                                  <li>
                                                    <a className="dropdown-item" href="/all-loans/details">
                                                      View Details
                                                    </a>
                                                  </li>
                                                </ul>
                                              </div>
                                            </td>
                                            <td>#11-22</td>
                                            <td>John Doe</td>
                                            <td>Level 7</td>
                                            <td>₦10,000</td>
                                            <td>₦10,000,</td>
                                            <td>15/06/2023</td>
                                            <td>Auto loan</td>
                                            <td>5%</td>
                                            <td>15/06/2023</td>
                                            <td>₦10,000,000</td>
                                            <td>15/06/2023</td>
                                            <td>
                                              <span className="activ">Active</span>
                                            </td>
                                            <td>15/06/2023</td>
                                          </tr>
                                          <tr>
                                            <td>
                                              <div className="dropdown">
                                                <i
                                                  className="bi bi-three-dots"
                                                  data-bs-toggle="dropdown"
                                                  aria-expanded="false"
                                                ></i>
                                                <ul class="dropdown-menu details">
                                                  <li>
                                                    <a className="dropdown-item" href="/all-loans/details">
                                                      View Details
                                                    </a>
                                                  </li>
                                                </ul>
                                              </div>
                                            </td>
                                            <td>#11-22</td>
                                            <td>John Doe</td>
                                            <td>Level 7</td>
                                            <td>₦10,000</td>
                                            <td>₦10,000,</td>
                                            <td>15/06/2023</td>
                                            <td>Auto loan</td>
                                            <td>5%</td>
                                            <td>15/06/2023</td>
                                            <td>₦10,000,000</td>
                                            <td>15/06/2023</td>
                                            <td>
                                              <span className="activ">Active</span>
                                            </td>
                                            <td>15/06/2023</td>
                                          </tr>
                                          <tr>
                                            <td>
                                              <div className="dropdown">
                                                <i
                                                  className="bi bi-three-dots"
                                                  data-bs-toggle="dropdown"
                                                  aria-expanded="false"
                                                ></i>
                                                <ul class="dropdown-menu details">
                                                  <li>
                                                    <a className="dropdown-item" href="/all-loans/details">
                                                      View Details
                                                    </a>
                                                  </li>
                                                </ul>
                                              </div>
                                            </td>
                                            <td>#11-22</td>
                                            <td>Rukky</td>
                                            <td>Level 7</td>
                                            <td>₦10,000</td>
                                            <td>₦10,000,</td>
                                            <td>15/06/2023</td>
                                            <td>Auto loan</td>
                                            <td>5%</td>
                                            <td>15/06/2023</td>
                                            <td>₦10,000,000</td>
                                            <td>15/06/2023</td>
                                            <td>
                                              <span className="activ">Active</span>
                                            </td>
                                            <td>15/06/2023</td>
                                          </tr>
                                          <tr>
                                            <td>
                                              <div className="dropdown">
                                                <i
                                                  className="bi bi-three-dots"
                                                  data-bs-toggle="dropdown"
                                                  aria-expanded="false"
                                                ></i>
                                                <ul class="dropdown-menu details">
                                                  <li>
                                                    <a className="dropdown-item" href="/all-loans/details">
                                                      View Details
                                                    </a>
                                                  </li>
                                                </ul>
                                              </div>
                                            </td>
                                            <td>#11-22</td>
                                            <td>Kunle Ola</td>
                                            <td>Level 2</td>
                                            <td>₦10,000</td>
                                            <td>₦10,000,</td>
                                            <td>15/06/2023</td>
                                            <td>Auto loan</td>
                                            <td>5%</td>
                                            <td>15/06/2023</td>
                                            <td>₦10,000,000</td>
                                            <td>15/06/2023</td>
                                            <td>
                                              <span className="activ">Active</span>
                                            </td>
                                            <td>15/06/2023</td>
                                          </tr>
                                        </tbody>
                                      </table> 
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
                    <div className="files">
                      <div className="row justify-content-center">
                        <div className="col-sm-10">
                          <div className="details-card">
                            <button className="btn-save mb-3" data-bs-toggle="modal" data-bs-target="#add-kyc">Add New <i className="bi bi-plus ms-2"></i></button>
                            <div className="bg-white px-5 py-4">
                              <div>
                                <h3>Valid ID</h3>
                                <div className="row">
                                  <div className="col-sm-6">
                                    <img src={valid} alt="id" className="img-fluid w-100" />
                                  </div>
                                  <div className="col-sm-6">
                                    <img src={back} alt="id" className="img-fluid w-100" />
                                  </div>
                                </div>
                              </div>
                              <div className="mt-4">
                                <h3>Valid ID</h3>
                                <div className="row">
                                  <div className="col-sm-6">
                                    <img src={valid} alt="id" className="img-fluid w-100" />
                                  </div>
                                  <div className="col-sm-6">
                                    <img src={back} alt="id" className="img-fluid w-100" />
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
                    <div className="guarantor">
                      <div className="row justify-content-center">
                        <div className="col-sm-7">
                          <div className="details-card">
                            <button className="btn-save mb-3" data-bs-toggle="modal" data-bs-target="#add-kin">Add New <i className="bi bi-plus ms-2"></i></button>
                            <div className="bg-white p-4">
                              <h3>Collateral 1</h3>
                              <hr />
                              <div className="row mt-4">
                                <div className="col-sm-6 mb-2">
                                  <h5>HouseDocument (C Of O)</h5>
                                  <div className="p-3 empty-state text-center">
                                    <h5>Empty</h5>
                                  </div>
                                </div>
                                <div className="col-sm-6 mb-2">
                                  <h5>Land Document (C Of O)</h5>
                                  <div className="p-3 empty-state text-center">
                                    <h5>Empty</h5>
                                  </div>
                                </div>
                              </div>
                              <div className="row mt-2">
                                <div className="col-sm-6 mb-2">
                                  <h5>HouseDocument (C Of O)</h5>
                                  <div className="p-3 empty-state">
                                    <h6><Icon icon="majesticons:file" className="me-2 fs-4" style={{color: "#9CA3AF"}} />HouseDocument.docx</h6>
                                  </div>
                                </div>
                                <div className="col-sm-6 mb-2">
                                  <h5>Land Document (C Of O)</h5>
                                  <div className="p-3 empty-state">
                                    <h6><Icon icon="majesticons:file" className="me-2 fs-4" style={{color: "#9CA3AF"}} />HouseDocument.docx</h6>
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
                    <div className="guarantor">
                      <div className="row justify-content-center">
                        <div className="col-sm-7">
                          <div className="details-card">
                            <button className="btn-save mb-3" data-bs-toggle="modal" data-bs-target="#add-work">Add New <i className="bi bi-plus ms-2"></i></button>
                            <div className="bg-white p-4">
                              <h3>Business Details 1</h3>
                              <hr />
                              <div className="row">
                                <div className="col-sm-4 mb-3">
                                  <h5>Business Name</h5>
                                  <h6>Victoria Beckham</h6>
                                </div>
                                <div className="col-sm-4 mb-3">
                                  <h5>Business Reg No</h5>
                                  <h6>Manager</h6>
                                </div>
                                <div className="col-sm-4 mb-3">
                                  <h5>Phone number</h5>
                                  <h6>+234 867 876 7593</h6>
                                </div>
                              </div>
                              <div className="row mt-3">
                                <div className="col-sm-4 mb-3">
                                  <h5>Address</h5>
                                  <h6>2, Adebowale street, Ikeja, Lagos state. Nigeria</h6>
                                </div>
                                <div className="col-sm-4 mb-3">
                                  <h5>Tax No</h5>
                                  <h6>293242</h6>
                                </div>
                                <div className="col-sm-4 mb-3">
                                  <h5>Industry</h5>
                                  <h6>Bank</h6>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="details-card">
                            <div className="bg-white p-4">
                              <h3>Business Details 2</h3>
                              <hr />
                              <div className="row">
                                <div className="col-sm-4 mb-3">
                                  <h5>Business Name</h5>
                                  <h6>Victoria Beckham</h6>
                                </div>
                                <div className="col-sm-4 mb-3">
                                  <h5>Business Reg No</h5>
                                  <h6>Manager</h6>
                                </div>
                                <div className="col-sm-4 mb-3">
                                  <h5>Phone number</h5>
                                  <h6>+234 867 876 7593</h6>
                                </div>
                              </div>
                              <div className="row mt-3">
                                <div className="col-sm-4 mb-3">
                                  <h5>Address</h5>
                                  <h6>2, Adebowale street, Ikeja, Lagos state. Nigeria</h6>
                                </div>
                                <div className="col-sm-4 mb-3">
                                  <h5>Tax No</h5>
                                  <h6>293242</h6>
                                </div>
                                <div className="col-sm-4 mb-3">
                                  <h5>Industry</h5>
                                  <h6>Bank</h6>
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
                    id="pills-c"
                    role="tabpanel"
                    aria-labelledby="pills-c-tab"
                    tabIndex="0"
                  >
                    <div className="guarantor">
                      <div className="row justify-content-center">
                        <div className="col-sm-7">
                          <div className="details-card pb-0">
                            <button className="btn-save mb-3" data-bs-toggle="modal" data-bs-target="#add-bank">Add New <i className="bi bi-plus ms-2"></i></button>
                            <div className="bg-white p-4">
                              <h3>Bank Details 1</h3>
                              <hr />
                              <div className="row">
                                <div className="col-sm-3 mb-3">
                                  <h5>Acoount holder’s name</h5>
                                  <h6>Victoria Beckham</h6>
                                </div>
                                <div className="col-sm-3 mb-3">
                                  <h5>Account number</h5>
                                  <h6>123456789</h6>
                                </div>
                                <div className="col-sm-3 mb-3">
                                  <h5>Bank name</h5>
                                  <h6>GT Bank</h6>
                                </div>
                                <div className="col-sm-3 mb-3">
                                  <h5>Branch</h5>
                                  <h6>Ikeja, Lagos</h6>
                                </div>
                              </div>
                              <div className="row mt-3">
                                <div className="col-sm-3 mb-3">
                                  <h5>Bank swift code</h5>
                                  <h6>100343</h6>
                                </div>
                                <div className="col-sm-3 mb-3">
                                  <h5>Tax payer ID</h5>
                                  <h6>N-5678907</h6>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="details-card">
                            <div className="bg-white p-4">
                              <h3>Bank Details 2</h3>
                              <hr />
                              <div className="row">
                                <div className="col-sm-3 mb-3">
                                  <h5>Acoount holder’s name</h5>
                                  <h6>Victoria Beckham</h6>
                                </div>
                                <div className="col-sm-3 mb-3">
                                  <h5>Account number</h5>
                                  <h6>123456789</h6>
                                </div>
                                <div className="col-sm-3 mb-3">
                                  <h5>Bank name</h5>
                                  <h6>GT Bank</h6>
                                </div>
                                <div className="col-sm-3 mb-3">
                                  <h5>Branch</h5>
                                  <h6>Ikeja, Lagos</h6>
                                </div>
                              </div>
                              <div className="row mt-3">
                                <div className="col-sm-3 mb-3">
                                  <h5>Bank swift code</h5>
                                  <h6>100343</h6>
                                </div>
                                <div className="col-sm-3 mb-3">
                                  <h5>Tax payer ID</h5>
                                  <h6>N-5678907</h6>
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
                    id="pills-v"
                    role="tabpanel"
                    aria-labelledby="pills-c-tab"
                    tabIndex="0"
                  >
                    <div className="files">
                      <div className="row justify-content-center">
                        <div className="col-sm-10">
                          <div className="details-card">
                            <button className="btn-save mb-3" data-bs-toggle="modal" data-bs-target="#add-files">Add New <i className="bi bi-plus ms-2"></i></button>
                            <div className="bg-white px-5 py-4">
                              <div>
                                <h3>Valid ID</h3>
                                <div className="row">
                                  <div className="col-sm-6">
                                    <img src={valid} alt="id" className="img-fluid w-100" />
                                  </div>
                                  <div className="col-sm-6">
                                    <img src={back} alt="id" className="img-fluid w-100" />
                                  </div>
                                </div>
                              </div>
                              <div className="mt-4">
                                <h3>Appointment Letter</h3>
                                <div className="row">
                                  <div className="col-sm-6">
                                    <img src={valid} alt="id" className="img-fluid w-100" />
                                  </div>
                                  <div className="col-sm-6">
                                    <img src={back} alt="id" className="img-fluid w-100" />
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
                    id="pills-b"
                    role="tabpanel"
                    aria-labelledby="pills-b-tab"
                    tabIndex="0"
                  >
                     <div className="row justify-content-center">
                      <div className="col-sm-2 loany">
                        <ul className="nav nav-pills  nav-justified" id="pills-tab" role="tablist">
                          <li className="nav-item" role="presentation">
                            <button className="nav-link active" id="pills-lo-tab" data-bs-toggle="pill" data-bs-target="#pills-lo" type="button" role="tab" aria-controls="pills-loana" aria-selected="true">Loans</button>
                          </li>
                          <li className="nav-item" role="presentation">
                            <button className="nav-link" id="pills-sa-tab" data-bs-toggle="pill" data-bs-target="#pills-sa" type="button" role="tab" aria-controls="pills-sa" aria-selected="false">Savings</button>
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* Loan and Saving */}
                    <div className="row mt-5">
                      <div className="col-sm-12">
                        <div class="tab-content" id="pills-tabContent">
                          <div class="tab-pane fade show active" id="pills-lo" role="tabpanel" aria-labelledby="pills-loan-tab" tabindex="0">
                            <div className="overview">
                              <div className="row justify-content-center">
                                <div className="col-sm-12">
                                  <div className="details-card members">
                                    <div className="bg-white p-4">
                                      <table
                                        className="table table-responsive"
                                        style={{ width: "100%" }}
                                        id="exa"
                                      >
                                        <thead className="bg-white rounded-pill">
                                          <tr>
                                            <th>Date</th>
                                            <th>Submitted on</th>
                                            <th>Transaction type</th>
                                            <th>Transaction ID</th>
                                            <th>Credit</th>
                                            <th>Balance</th>
                                          </tr>
                                        </thead>
                                        <tbody>
                                          <tr>
                                            <td>15/06/2023</td>
                                            <td>15/06/2023</td>
                                            <td>Credit</td>
                                            <td>234578090987523</td>
                                            <td>₦10,000</td>
                                            <td>₦10,000,000</td>
                                          </tr>
                                        </tbody>
                                      </table> 
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="tab-pane fade" id="pills-sa" role="tabpanel" aria-labelledby="pills-sa-tab" tabindex="0">
                            <div className="overview">
                              <div className="row justify-content-center">
                                <div className="col-sm-12">
                                  <div className="details-card members">
                                    <div className="bg-white p-4">
                                      <table
                                        className="table table-responsive"
                                        style={{ width: "100%" }}
                                        id="ex"
                                      >
                                        <thead className="bg-white rounded-pill">
                                          <tr>
                                            <th>Date</th>
                                            <th>Submitted on</th>
                                            <th>Transaction type</th>
                                            <th>Transaction ID</th>
                                            <th>Credit</th>
                                            <th>Balance</th>
                                          </tr>
                                        </thead>
                                        <tbody>
                                          <tr>
                                            <td>15/06/2023</td>
                                            <td>15/06/2023</td>
                                            <td>Credit</td>
                                            <td>234578090987523</td>
                                            <td>₦10,000</td>
                                            <td>₦10,000</td>
                                          </tr>
                                        </tbody>
                                      </table> 
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
                    id="pills-n"
                    role="tabpanel"
                    aria-labelledby="pills-n-tab"
                    tabIndex="0"
                  >
                    <div className="overview">
                      <div className="row justify-content-center">
                        <div className="col-sm-10">
                          <button className="mb-4 btn-save" data-bs-toggle="modal" data-bs-target="#add-employee">Add New Employee <i className="bi bi-plus ms-2"></i></button>
                          <div className="details-card members">
                            <div className="bg-white p-4">
                              <table
                                className="table table-responsive"
                                style={{ width: "100%" }}
                                id="employee"
                              >
                                <thead className="bg-white rounded-pill">
                                  <tr>
                                    <th>Actions</th>
                                    <th>Employee Name</th>
                                    <th>Department</th>
                                    <th>Date</th>
                                    <th>Loan Type</th>
                                    <th>Advance</th>
                                    <th>Credit Account</th>
                                    <th>Debit Account</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td>
                                      <div className="dropdown">
                                        <i
                                          className="bi bi-three-dots"
                                          data-bs-toggle="dropdown"
                                          aria-expanded="false"
                                        ></i>
                                        <ul class="dropdown-menu details">
                                          <li>
                                            <a className="dropdown-item" href="/employee-details">
                                              View Details
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                    </td>
                                    <td>Ola Jones</td>
                                    <td>technology</td>
                                    <td>15/06/2023</td>
                                    <td style={{color: "#FF823B"}}>Salary Advance</td>
                                    <td>₦10,000</td>
                                    <td>Globus Bank</td>
                                    <td>GTB</td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <div className="dropdown">
                                        <i
                                          className="bi bi-three-dots"
                                          data-bs-toggle="dropdown"
                                          aria-expanded="false"
                                        ></i>
                                        <ul class="dropdown-menu details">
                                          <li>
                                            <a className="dropdown-item" href="/employee-details">
                                              View Details
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                    </td>
                                    <td>Ola Jones</td>
                                    <td>technology</td>
                                    <td>15/06/2023</td>
                                    <td style={{color: "#FF823B"}}>Salary Advance</td>
                                    <td>₦10,000</td>
                                    <td>Globus Bank</td>
                                    <td>GTB</td>
                                  </tr>
                                </tbody>
                              </table> 
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="pills-m"
                    role="tabpanel"
                    aria-labelledby="pills-m-tab"
                    tabIndex="0"
                  >
                    <div className="overview">
                      <div className="row justify-content-center">
                        <div className="col-sm-10">
                          <div className="details-card members">
                            <div className="bg-white p-4">
                              <div className="row">
                                <div className="col-sm-5 mt-3">
                                  <h6>Payroll for July 2023</h6>
                                </div>
                                <div className="col-sm-7">
                                  <Form className="modal-m">
                                    <Row>
                                      <Col xs={6}>
                                        <Form.Select>
                                          <option>Select Employee</option>
                                          <option value="1">Ola</option>
                                          <option value="2">Ade</option>
                                          <option value="3">Bola</option>
                                        </Form.Select>
                                      </Col>
                                      <Col>
                                        <Form.Select>
                                          <option>Month</option>
                                          <option value="1">January</option>
                                          <option value="2">July</option>
                                          <option value="3">December</option>
                                        </Form.Select>
                                      </Col>
                                      <Col>
                                        <Form.Select>
                                          <option>Year</option>
                                          <option value="1">1999</option>
                                          <option value="2">2001</option>
                                          <option value="3">2023</option>
                                        </Form.Select>
                                      </Col>
                                    </Row>
                                  </Form>
                                </div>
                              </div>
                              <Form className="mt-4 modal-m">
                                <Row className="mb-3">
                                  <Form.Group as={Col}>
                                    <Form.Label>Work Duration</Form.Label>
                                    <Form.Control type="number" placeholder="0" />
                                  </Form.Group>
                                  <Form.Group as={Col}>
                                    <Form.Label>Duration Limit</Form.Label>
                                    <Form.Control type="text" placeholder="Month" />
                                  </Form.Group>
                                </Row>
                                <Row className="mb-4">
                                  <Form.Group as={Col}>
                                    <Form.Label>Amount Per Unit Duration</Form.Label>
                                    <Form.Control type="number" placeholder="0" />
                                  </Form.Group>
                                  <Form.Group as={Col}>
                                    <Form.Label>Total</Form.Label>
                                    <Form.Control type="number" placeholder="0.00" />
                                  </Form.Group>
                                </Row>
                                <button className="btn-save">Request Payroll Loan</button>
                              </Form>
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
      {/* Add Collateral Modal */}
      <div className="modal fade modal-m" id="add-kin" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title">Add Collateral</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className="inner-card">
                <div className="row">
                  <div className="col-sm-12">
                    <Form>
                      <Row className="mb-3">
                        <Form.Group as={Col}>
                          <Form.Label>HouseDocument (C Of O)</Form.Label>
                          <FileUploader handleChange={handleChange} name="file" label="Upload Picture" types={fileTypes} />
                          <p>{file ? `File name: ${file[0].name}` : "no files uploaded yet"}</p>
                        </Form.Group>
                        <Form.Group as={Col}>
                          <Form.Label>Land Document (C Of O)</Form.Label>
                          <FileUploader handleChange={handleChange} name="file" label="Upload Picture" types={fileTypes} />
                          <p>{file ? `File name: ${file[0].name}` : "no files uploaded yet"}</p>
                        </Form.Group>
                      </Row>
                      <Row className="mb-3">
                        <Form.Group as={Col}>
                          <Form.Label>HouseDocument (C Of O)</Form.Label>
                          <FileUploader handleChange={handleChange} name="file" label="Upload Picture" types={fileTypes} />
                          <p>{file ? `File name: ${file[0].name}` : "no files uploaded yet"}</p>
                        </Form.Group>
                        <Form.Group as={Col}>
                          <Form.Label>Land Document (C Of O)</Form.Label>
                          <FileUploader handleChange={handleChange} name="file" label="Upload Picture" types={fileTypes} />
                          <p>{file ? `File name: ${file[0].name}` : "no files uploaded yet"}</p>
                        </Form.Group>
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
      {/* Add Business Modal */}
      <div className="modal fade modal-m" id="add-work" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title">Add Business Details</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className="inner-card">
                <div className="row">
                  <div className="col-sm-12">
                    <Form>
                      <Row className="mb-3">
                        <Col>
                          <Form.Control placeholder="Business Name" />
                        </Col>
                        <Col>
                          <Form.Control type="number" placeholder="Business Reg No" />
                        </Col>
                      </Row>
                      <Row className="mb-3">
                        <Col>
                          <Form.Control placeholder="Address" />
                        </Col>
                        <Col>
                          <Form.Control type="tel" placeholder="Phone No" />
                        </Col>
                      </Row>
                      <Row className="mb-3">
                        <Col>
                          <Form.Control type="number" placeholder="Tax No" />
                        </Col>
                        <Col>
                          <Form.Control type="text" placeholder="Industry" />
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
      {/* Add New Employee */}
      <div className="modal fade modal-m" id="add-employee" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title">Add New Employee</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className="inner-card">
                <div className="row">
                  <div className="col-sm-12">
                    <Form>
                      <Row className="mb-3">
                        <Col>
                          <Form.Control placeholder="Employer Name" />
                        </Col>
                        <Col>
                          <Form.Control type="text" placeholder="Department" />
                        </Col>
                      </Row>
                      <Row className="mb-3">
                        <Col>
                          <Form.Control type="date" placeholder="Date" />
                        </Col>
                        <Col>
                          <Form.Control type="text" placeholder="Loan Type" />
                        </Col>
                      </Row>
                      <Row className="mb-3">
                        <Col>
                          <Form.Control type="text" placeholder="Advance" />
                        </Col>
                        <Col>
                          <Form.Control type="text" placeholder="Salary Type" />
                        </Col>
                      </Row>
                      <div className="text-end">
                        <button type="button" className="btn-save">Add</button>
                      </div>
                    </Form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Add KYC Modal */}
      <div className="modal fade modal-m" id="add-kyc" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title">Add KYC</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className="inner-card">
                <div className="row">
                  <div className="col-sm-12">
                    <Form>
                      <Row className="mb-3">
                        <Form.Group as={Col}>
                          <Form.Label>HouseDocument (C Of O)</Form.Label>
                          <FileUploader handleChange={handleChange} name="file" label="Upload Picture" types={fileTypes} />
                          <p>{file ? `File name: ${file[0].name}` : "no files uploaded yet"}</p>
                        </Form.Group>
                        <Form.Group as={Col}>
                          <Form.Label>Land Document (C Of O)</Form.Label>
                          <FileUploader handleChange={handleChange} name="file" label="Upload Picture" types={fileTypes} />
                          <p>{file ? `File name: ${file[0].name}` : "no files uploaded yet"}</p>
                        </Form.Group>
                      </Row>
                      <Row className="mb-3">
                        <Form.Group as={Col}>
                          <Form.Label>HouseDocument (C Of O)</Form.Label>
                          <FileUploader handleChange={handleChange} name="file" label="Upload Picture" types={fileTypes} />
                          <p>{file ? `File name: ${file[0].name}` : "no files uploaded yet"}</p>
                        </Form.Group>
                        <Form.Group as={Col}>
                          <Form.Label>Land Document (C Of O)</Form.Label>
                          <FileUploader handleChange={handleChange} name="file" label="Upload Picture" types={fileTypes} />
                          <p>{file ? `File name: ${file[0].name}` : "no files uploaded yet"}</p>
                        </Form.Group>
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
      {/* Add Files Modal */}
      <div className="modal fade modal-m" id="add-files" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title">Add Files</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className="inner-card">
                <div className="row">
                  <div className="col-sm-12">
                    <Form>
                      <Row className="mb-3">
                        <Form.Group as={Col}>
                          <Form.Label>HouseDocument (C Of O)</Form.Label>
                          <FileUploader handleChange={handleChange} name="file" label="Upload Picture" types={fileTypes} />
                          <p>{file ? `File name: ${file[0].name}` : "no files uploaded yet"}</p>
                        </Form.Group>
                        <Form.Group as={Col}>
                          <Form.Label>Land Document (C Of O)</Form.Label>
                          <FileUploader handleChange={handleChange} name="file" label="Upload Picture" types={fileTypes} />
                          <p>{file ? `File name: ${file[0].name}` : "no files uploaded yet"}</p>
                        </Form.Group>
                      </Row>
                      <Row className="mb-3">
                        <Form.Group as={Col}>
                          <Form.Label>HouseDocument (C Of O)</Form.Label>
                          <FileUploader handleChange={handleChange} name="file" label="Upload Picture" types={fileTypes} />
                          <p>{file ? `File name: ${file[0].name}` : "no files uploaded yet"}</p>
                        </Form.Group>
                        <Form.Group as={Col}>
                          <Form.Label>Land Document (C Of O)</Form.Label>
                          <FileUploader handleChange={handleChange} name="file" label="Upload Picture" types={fileTypes} />
                          <p>{file ? `File name: ${file[0].name}` : "no files uploaded yet"}</p>
                        </Form.Group>
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

export default DetailsCompany;

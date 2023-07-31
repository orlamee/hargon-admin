import SearchNotification from "./searchNotification";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';
import { Col, Form, Row } from "react-bootstrap";

function CompanyManage() {
  return (
    <div className="content home">
      <SearchNotification />
      <div className="mt-5 row mx-5">
        <div className="col-sm-12 px-0">
          <div className="pending-loan">
            <div className="d-flex flex-row">
              <h5 className="me-3">Company Management - <span style={{color: "#9CA3AF", fontSize: "10px"}}>Manage companies</span></h5>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-5 mx-5">
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
          <div className="pending-loan">
            <div className="d-flex flex-row">
              <h5 className="me-3">All Your Companies </h5>
            </div>
            <button className="btn-save float-end" data-bs-toggle="modal" data-bs-target="#add-user" style={{marginTop: "-38px"}}>Add <i className="bi bi-plus ms-2"></i></button>
          </div>
        </div>
      </div>
      <div
        className="row mt-5 mx-5 members bg-white py-5 px-2"
        style={{ borderRadius: "0 0 20px 20px" }}
      >
        <div className="col">
          <table
            className="table table-responsive"
            style={{ width: "100%" }}
            id="example"
          >
            <thead className="bg-white rounded-pill">
              <tr>
                <th>Action</th>
                <th>ID</th>
                <th>Company Name</th>
                <th>Company No</th>
                <th>Employees</th>
                <th>Name</th>
                <th>Email</th>
                <th>Tax No</th>
                <th>Added on</th>
                <th>Account Officer</th>
                <th>Address</th>
                <th>Loan Type</th>
                <th>Total Loans</th>
                <th>Total Fund Balance</th>
                <th>Status</th>
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
                        <a className="dropdown-item" href="/manage-company/details">
                          View Details
                        </a>
                      </li>
                    </ul>
                  </div>
                </td>
                <td>#11-22</td>
                <td>Trancorp</td>
                <td>564785</td>
                <td>GTB</td>
                <td>Ololade Asake</td>
                <td>john@gmail.com</td>
                <td>9932</td>
                <td>15/06/2023</td>
                <td>Olaitan Davis</td>
                <td>29,Adelabu street</td>
                <td style={{color: "#FF823B"}}>Capital</td>
                <td>₦10,000</td>
                <td>₦10,000</td>
                <td>
                  <span className="withdrawn">Due Today</span>
                </td>
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
                        <a className="dropdown-item" href="/manage-company/details">
                          View Details
                        </a>
                      </li>
                    </ul>
                  </div>
                </td>
                <td>#11-22</td>
                <td>Twitter Inc</td>
                <td>456756</td>
                <td>Globus</td>
                <td>Ololade Asake</td>
                <td>john@gmail.com</td>
                <td>9932</td>
                <td>15/06/2023</td>
                <td>Olaitan Davis</td>
                <td>29,Adelabu street</td>
                <td style={{color: "#FF823B"}}>Capital</td>
                <td>₦10,000</td>
                <td>₦10,000</td>
                <td>
                  <span className="withdrawn">Due Today</span>
                </td>
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
                        <a className="dropdown-item" href="/manage-company/details">
                          View Details
                        </a>
                      </li>
                    </ul>
                  </div>
                </td>
                <td>#11-22</td>
                <td>Lapo</td>
                <td>27282</td>
                <td>Access</td>
                <td>Elon Musk</td>
                <td>john@gmail.com</td>
                <td>9932</td>
                <td>15/06/2023</td>
                <td>Adeola</td>
                <td>29,Adelabu street</td>
                <td style={{color: "#FF823B"}}>Capital</td>
                <td>₦1000</td>
                <td>₦10,000</td>
                <td>
                  <span className="withdrawn">Due Today</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      {/* Add Users */}
      <div className="modal fade modal-m" id="add-user" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title">Add Company</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className="inner-card">
                <div className="row">
                  <div className="col-sm-12 add-m">
                    <Form>
                      <h4>Personal Details</h4>
                      <hr />
                      <Row className="mb-4">
                        <Col xs={4}>
                          <Form.Control type="text" placeholder="Name" />
                        </Col>
                        <Col>
                          <Form.Control placeholder="Gender" />
                        </Col>
                        <Col>
                          <Form.Control placeholder="Prefix" />
                        </Col>
                        <Col>
                          <Form.Control placeholder="Marital Status" />
                        </Col>
                        <Col>
                          <Form.Control placeholder="Date of Birth" />
                        </Col>
                      </Row>
                      <h4>Contact Details</h4>
                      <hr />
                      <Row className="mb-4">
                        <Col>
                          <Form.Control type="email" placeholder="Email" />
                        </Col>
                        <Col>
                          <Form.Control type="tel" placeholder="Phone no" />
                        </Col>
                        <Col>
                          <Form.Control type="tel" placeholder="Alternate Client No" />
                        </Col>
                      </Row>
                      <h4>Company Details</h4>
                      <hr />
                      <Row className="mb-4">
                        <Col>
                          <Form.Control type="text" placeholder="Name Of Company" />
                        </Col>
                        <Col>
                          <Form.Control placeholder="Company Industry" />
                        </Col>
                        <Col>
                          <Form.Control placeholder="Percentage" />
                        </Col>
                      </Row>
                      <Row className="mb-4">
                        <Col>
                          <Form.Control placeholder="Collateral" />
                        </Col>
                        <Col>
                          <Form.Control placeholder="Company Reg No" />
                        </Col>
                      </Row>
                      <Row className="mb-4">
                        <Col>
                          <Form.Control type="text" placeholder="Address Line 1" />
                        </Col>
                        <Col>
                          <Form.Control placeholder="Address Line 2" />
                        </Col>
                      </Row>
                      <Row className="mb-4">
                        <Col>
                          <Form.Control type="number" placeholder="City" />
                        </Col>
                        <Col>
                          <Form.Control placeholder="State" />
                        </Col>
                        <Col>
                          <Form.Control type="number" placeholder="Country" />
                        </Col>
                        <Col>
                          <Form.Control placeholder="Zip Code" />
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

export default CompanyManage;

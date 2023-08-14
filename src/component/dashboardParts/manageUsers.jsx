import SearchNotification from "./searchNotification";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';
import { Col, Form, Row } from "react-bootstrap";

function ManageUsers() {
  return (
    <div className="content home">
      <SearchNotification />
      <div className="mt-5 row mx-5">
        <div className="col-sm-12 px-0">
          <div className="pending-loan">
            <div className="d-flex flex-row">
              <h5 className="me-3">User Management - <span style={{color: "#9CA3AF", fontSize: "10px"}}>Manage Users</span></h5>
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
              <h3>Total clients</h3>
              <h6 className="mt-3 text-black">0</h6>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="report-card">
              <h3>Active clients</h3>
              <h6 className="mt-3 text-black">0</h6>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="report-card">
              <h3>Inactive clients</h3>
              <h6 className="mt-3 text-black">0</h6>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="report-card">
              <h3>Pending clients</h3>
              <h6 className="mt-3 text-black">0</h6>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="report-card">
              <h3>Clients logged in today</h3>
              <h6 className="mt-3 text-black">0</h6>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="mt-5 row mx-5">
        <div className="col-sm-12 px-0">
          <div className="pending-loan">
            <div className="d-flex flex-row">
              <h5 className="me-3">All Your Clients </h5>
            </div>
            <button className="btn-save float-end" data-bs-toggle="modal" data-bs-target="#add-user" style={{marginTop: "-38px"}}>Add <i className="bi bi-plus ms-2"></i></button>
          </div>
        </div>
      </div>
      <div
        className="row mt-2 mx-5 members bg-white py-5 px-2"
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
                <th>Organization Name</th>
                <th>Name</th>
                <th>Email</th>
                <th>Tax No</th>
                <th>Added On</th>
                <th>Account Officer</th>
                <th>Address</th>
                <th>Mobile No</th>
                <th>Total Loans Paid</th>
                <th>Total Loans Balance</th>
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
                        <a className="dropdown-item" href="/manage-users/details">
                          View Details
                        </a>
                      </li>
                    </ul>
                  </div>
                </td>
                <td>#11-22</td>
                <td>Twitter</td>
                <td>Elon Musk</td>
                <td>johndoe@gmail.com</td>
                <td>45995</td>
                <td>15/06/2023</td>
                <td>Kunle Ola</td>
                <td>29, Oladoyingbr street</td>
                <td>08167875342</td>
                <td>₦10,000</td>
                <td>₦10,000,000</td>
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
                        <a className="dropdown-item" href="/manage-users/details">
                          View Details
                        </a>
                      </li>
                    </ul>
                  </div>
                </td>
                <td>#11-22</td>
                <td>Twitter</td>
                <td>Elon Musk</td>
                <td>johndoe@gmail.com</td>
                <td>45995</td>
                <td>15/06/2023</td>
                <td>Kunle Ola</td>
                <td>29, Oladoyingbr street</td>
                <td>08167875342</td>
                <td>₦10,000</td>
                <td>₦10,000,000</td>
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
                        <a className="dropdown-item" href="/manage-users/details">
                          View Details
                        </a>
                      </li>
                    </ul>
                  </div>
                </td>
                <td>#11-22</td>
                <td>Twitter</td>
                <td>Elon Musk</td>
                <td>johndoe@gmail.com</td>
                <td>45995</td>
                <td>15/06/2023</td>
                <td>Kunle Ola</td>
                <td>29, Oladoyingbr street</td>
                <td>08167875342</td>
                <td>₦10,000</td>
                <td>₦10,000,000</td>
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
                        <a className="dropdown-item" href="/manage-users/details">
                          View Details
                        </a>
                      </li>
                    </ul>
                  </div>
                </td>
                <td>#11-22</td>
                <td>Twitter</td>
                <td>Elon Musk</td>
                <td>johndoe@gmail.com</td>
                <td>45995</td>
                <td>15/06/2023</td>
                <td>Kunle Ola</td>
                <td>29, Oladoyingbr street</td>
                <td>08167875342</td>
                <td>₦10,000</td>
                <td>₦10,000,000</td>
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
              <h1 className="modal-title">Add Clients</h1>
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
                        <Col>
                          <Form.Control type="number" placeholder="Client Unique ID" />
                        </Col>
                        <Col>
                          <Form.Control placeholder="First Name" />
                        </Col>
                        <Col>
                          <Form.Control placeholder="Middle Name" />
                        </Col>
                        <Col>
                          <Form.Control placeholder="Last Name" />
                        </Col>
                      </Row>
                      <Row className="mb-4">
                        <Col>
                          <Form.Control type="text" placeholder="Gender" />
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
                      <h4>Other Details</h4>
                      <hr />
                      <Row className="mb-4">
                        <Col>
                          <Form.Control type="number" placeholder="Work Type" />
                        </Col>
                        <Col>
                          <Form.Control placeholder="Loan Officer" />
                        </Col>
                        <Col>
                          <Form.Control placeholder="Branch" />
                        </Col>
                      </Row>
                      <Row className="mb-4">
                        <Col>
                          <Form.Control type="number" placeholder="Address Line 1" />
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

export default ManageUsers;

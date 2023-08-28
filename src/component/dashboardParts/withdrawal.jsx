import SearchNotification from "./searchNotification";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { useRef } from "react";
import { Autoplay } from "swiper/modules";
import { Col, Form, Row } from "react-bootstrap";

function WithDrawal() {
  const ref = useRef();
  return (
    <div className="content home">
      <SearchNotification />
      <div className="mt-5 row mx-5">
        <div className="col-sm-12 px-0">
          <div className="pending-loan">
            <div className="d-flex flex-row">
              <h5 className="me-3">
                Savings -{" "}
                <span style={{ color: "#9CA3AF", fontSize: "10px" }}>
                  Total Deposits
                </span>
              </h5>
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
              <h3>Savings customers</h3>
              <h6 className="mt-3 text-black">0</h6>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="report-card">
              <h3>Active savings</h3>
              <h6 className="mt-3 text-black">0</h6>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="report-card">
              <h3>Total withdrawal</h3>
              <h6 className="mt-3 text-black">0</h6>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="report-card">
              <h3>Total balance</h3>
              <h6 className="mt-3 text-black">0</h6>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="report-card">
              <h3>Total charges</h3>
              <h6 className="mt-3 text-black">0</h6>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="mt-5 row mx-5">
        <div className="col-sm-12 px-0">
          <div className="pending-loan">
            <div className="d-flex flex-row">
              <h5 className="me-3">Withdrawal </h5>
            </div>
            <button
              className="btn-save float-end"
              data-bs-toggle="modal"
              data-bs-target="#add-user"
              style={{ marginTop: "-38px" }}
            >
              Add <i className="bi bi-plus ms-2"></i>
            </button>
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
                <th>Customer ID</th>
                <th>Amount</th>
                <th>Date</th>
                <th>Savings ID</th>
                <th>Type</th>
                <th>Balance</th>
                <th>Status</th>
                <th>Product</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>#11-22</td>
                <td>150,000</td>
                <td>10/08/2023</td>
                <td>100302</td>
                <td>Break</td>
                <td>10000</td>
                <td><span className="approved">Disbursed</span></td>
                <td>LP</td>
                <td>
                  <div className="dropdown">
                    <i
                      className="bi bi-three-dots"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    ></i>
                    <ul class="dropdown-menu details">
                      <li>
                        <a className="dropdown-item" href="#!">
                          View Details
                        </a>
                      </li>
                    </ul>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      {/* Add Users */}
      <div
        className="modal fade modal-m"
        id="add-user"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title">Add Deposit</h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="inner-card">
                <div className="row">
                  <div className="col-sm-12">
                    <Form>
                      <Row className="mb-4 mt-4">
                        <Col>
                          <Form.Control
                            type="number"
                            placeholder="Customer ID"
                          />
                        </Col>
                        <Col>
                          <Form.Control type="number" placeholder="Amount" />
                        </Col>
                        <Col>
                          <Form.Control
                            type="date"
                            placeholder="Date"
                            ref={ref}
                            onChange={(e) => console.log(e.target.value)}
                            onFocus={() => (ref.current.type = "date")}
                            onBlur={() => (ref.current.type = "text")}
                          />
                        </Col>
                      </Row>
                      <Row className="mb-4">
                        <Col>
                          <Form.Control
                            type="number"
                            placeholder="Savings ID"
                          />
                        </Col>
                        <Col>
                          <Form.Control type="number" placeholder="Frequency" />
                        </Col>
                        <Col>
                          <Form.Control
                            type="number"
                            placeholder="Interest Rate"
                          />
                        </Col>
                      </Row>
                      <Row className="mb-4">
                        <Col>
                          <Form.Control
                            type="number"
                            placeholder="Balance"
                          />
                        </Col>
                        <Col>
                          <Form.Control type="number" placeholder="Status" />
                        </Col>
                        <Col>
                          <Form.Control type="text" placeholder="Product" />
                        </Col>
                      </Row>
                      <Row className="mb-4">
                        <Col xs={4}>
                          <Form.Control
                            type="number"
                            placeholder="Duration"
                          />
                        </Col>
                      </Row>
                      <div className="text-end">
                        <button type="button" className="btn-save">
                          Add
                        </button>
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

export default WithDrawal;

import SearchNotification from "./searchNotification";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { useRef } from "react";
import { Autoplay } from "swiper/modules";
import { Col, Form, Row } from "react-bootstrap";

function WalletTable() {
  const ref = useRef();
  return (
    <div className="content home">
      <SearchNotification />
      <div className="mt-5 row mx-5">
        <div className="col-sm-12 px-0">
          <div className="pending-loan">
            <div className="d-flex flex-row">
              <h5 className="me-3">
                Wallet
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
              <h3>Customer’s wallet</h3>
              <h6 className="mt-3 text-black">0</h6>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="report-card">
              <h3>Active wallet</h3>
              <h6 className="mt-3 text-black">0</h6>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="report-card">
              <h3>Closed wallet</h3>
              <h6 className="mt-3 text-black">0</h6>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="report-card">
              <h3>Total deposits</h3>
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
              <h5 className="me-3">All Wallets </h5>
            </div>
            <button
              className="btn-save float-end"
              data-bs-toggle="modal"
              data-bs-target="#add-depo"
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
                <th>User</th>
                <th>KodeHex</th>
                <th>Date</th>
                <th>Transaction ID</th>
                <th>Amount</th>
                <th>Charges</th>
                <th>Activity</th>
                
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Michael Opara</td>
                <td>{"<"}Bola{"/>"}</td>
                <td>10/08/2023</td>
                <td>#253166</td>
                <td>150,000</td>
                <td>10000</td>
                <td><span className="text-danger"><i className="bi bi-upload me-2"></i>Withdrawal</span></td>
              </tr>
              <tr>
                <td>Ola Ola</td>
                <td>{"<"}Nakel{"/>"}</td>
                <td>10/08/2023</td>
                <td>#253166</td>
                <td>150,000</td>
                <td>10000</td>
                <td><span style={{color: "#228B22"}}><i className="bi bi-download me-2"></i>Deposit</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      {/* Add Deposit */}
      <div
        className="modal fade modal-m"
        id="add-depo"
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
                            type="text"
                            placeholder="Enter User Name"
                          />
                        </Col>
                        <Col>
                          <Form.Control type="text" placeholder="Enter KodeHex" />
                        </Col>
                        
                      </Row>
                      <Row className="mb-4">
                        <Col>
                          <Form.Control
                            type="datetime-local"
                            placeholder="Schedule Date and Time"
                            ref={ref}
                            onChange={(e) => console.log(e.target.value)}
                            onFocus={() => (ref.current.type = "datetime-local")}
                            onBlur={() => (ref.current.type = "text")}
                          />
                        </Col>
                        <Col>
                          <Form.Control type="number" placeholder="Amount" />
                        </Col>
                      </Row>
                      <Row className="mb-4">
                        <Col>
                          <Form.Control
                            type="number"
                            placeholder="Charges"
                          />
                        </Col>
                        <Col>
                          <Form.Control type="number" placeholder="Transaction ID" />
                        </Col>
                      </Row>
                      <div className="text-end">
                        <button type="button" className="btn-save">
                          Add Wallet
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

export default WalletTable;

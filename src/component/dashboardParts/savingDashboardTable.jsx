import SearchNotification from "./searchNotification";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';
import { Col, Form, Row } from "react-bootstrap";

export default function SavingsDashboadTable() {
  return (
    <div className="content home">
      <SearchNotification />
      <div className="mt-5 row mx-5">
        <div className="col-sm-12 px-0">
          <div className="pending-loan">
            <div className="d-flex flex-row">
              <h5 className="me-3">Savings - <span style={{color: "#9CA3AF", fontSize: "10px"}}>Dashboard</span></h5>
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
              <h5 className="me-3">Manage Savings </h5>
            </div>
            <button className="btn-save float-end" data-bs-toggle="modal" data-bs-target="#add-save" style={{marginTop: "-38px"}}>Add <i className="bi bi-plus ms-2"></i></button>
          </div>
        </div>
      </div>
      <div
        className="mt-2 mx-5 members bg-white py-5 px-2"
        style={{ borderRadius: "0 0 20px 20px" }}
      >
        <div className="row px-4">
          <div className="col-sm-4 mb-3">
            <div className="table-cards">
              <div>
                <h6>Client ID: <span className="fs-6" style={{color: "#228B22"}}>#14-54</span></h6>
                <i className="bi bi-three-dots-vertical float-end" style={{marginTop: "-25px"}}></i>
              </div>
              <div className="row mt-4">
                <div className="col-sm-3 mb-3">
                  <h6>Type of Plan</h6>
                  <h5 className="text-black">Auto</h5>
                </div>
                <div className="col-sm-3 mb-3">
                  <h6>Opening Amount</h6>
                  <h5 className="text-black">N 0.00</h5>
                </div>
                <div className="col-sm-3 mb-3">
                  <h6>Amount to be saved</h6>
                  <h5 className="text-black">N 0.00</h5>
                </div>
                <div className="col-sm-3 mb-3">
                  <h6>Frequency</h6>
                  <h5 className="text-black">Monthly</h5>
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-sm-3 mb-3">
                  <h6>Duration</h6>
                  <h5 className="text-black">Auto</h5>
                </div>
                <div className="col-sm-3 mb-3">
                  <h6>Interest Rate</h6>
                  <h5 style={{color: "#228B22"}}>10%</h5>
                </div>
                <div className="col-sm-3 mb-3">
                  <h6>Savings ID</h6>
                  <h5 className="text-black">N 0.00</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-4 mb-3">
            <div className="table-cards">
              <div>
                <h6>Client ID: <span className="fs-6" style={{color: "#228B22"}}>#14-54</span></h6>
                <i className="bi bi-three-dots-vertical float-end" style={{marginTop: "-25px"}}></i>
              </div>
              <div className="row mt-4">
                <div className="col-sm-3 mb-3">
                  <h6>Type of Plan</h6>
                  <h5 className="text-black">Auto</h5>
                </div>
                <div className="col-sm-3 mb-3">
                  <h6>Opening Amount</h6>
                  <h5 className="text-black">N 0.00</h5>
                </div>
                <div className="col-sm-3 mb-3">
                  <h6>Amount to be saved</h6>
                  <h5 className="text-black">N 0.00</h5>
                </div>
                <div className="col-sm-3 mb-3">
                  <h6>Frequency</h6>
                  <h5 className="text-black">Monthly</h5>
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-sm-3 mb-3">
                  <h6>Duration</h6>
                  <h5 className="text-black">Auto</h5>
                </div>
                <div className="col-sm-3 mb-3">
                  <h6>Interest Rate</h6>
                  <h5 style={{color: "#228B22"}}>10%</h5>
                </div>
                <div className="col-sm-3 mb-3">
                  <h6>Savings ID</h6>
                  <h5 className="text-black">N 0.00</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-4 mb-3">
            <div className="table-cards">
              <div>
                <h6>Client ID: <span className="fs-6" style={{color: "#228B22"}}>#14-54</span></h6>
                <i className="bi bi-three-dots-vertical float-end" style={{marginTop: "-25px"}}></i>
              </div>
              <div className="row mt-4">
                <div className="col-sm-3 mb-3">
                  <h6>Type of Plan</h6>
                  <h5 className="text-black">Auto</h5>
                </div>
                <div className="col-sm-3 mb-3">
                  <h6>Opening Amount</h6>
                  <h5 className="text-black">N 0.00</h5>
                </div>
                <div className="col-sm-3 mb-3">
                  <h6>Amount to be saved</h6>
                  <h5 className="text-black">N 0.00</h5>
                </div>
                <div className="col-sm-3 mb-3">
                  <h6>Frequency</h6>
                  <h5 className="text-black">Monthly</h5>
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-sm-3 mb-3">
                  <h6>Duration</h6>
                  <h5 className="text-black">Auto</h5>
                </div>
                <div className="col-sm-3 mb-3">
                  <h6>Interest Rate</h6>
                  <h5 style={{color: "#228B22"}}>10%</h5>
                </div>
                <div className="col-sm-3 mb-3">
                  <h6>Savings ID</h6>
                  <h5 className="text-black">N 0.00</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row px-4">
          <div className="col-sm-4 mb-3">
            <div className="table-cards">
              <div>
                <h6>Client ID: <span className="fs-6" style={{color: "#228B22"}}>#14-54</span></h6>
                <i className="bi bi-three-dots-vertical float-end" style={{marginTop: "-25px"}}></i>
              </div>
              <div className="row mt-4">
                <div className="col-sm-3 mb-3">
                  <h6>Type of Plan</h6>
                  <h5 className="text-black">Auto</h5>
                </div>
                <div className="col-sm-3 mb-3">
                  <h6>Opening Amount</h6>
                  <h5 className="text-black">N 0.00</h5>
                </div>
                <div className="col-sm-3 mb-3">
                  <h6>Amount to be saved</h6>
                  <h5 className="text-black">N 0.00</h5>
                </div>
                <div className="col-sm-3 mb-3">
                  <h6>Frequency</h6>
                  <h5 className="text-black">Monthly</h5>
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-sm-3 mb-3">
                  <h6>Duration</h6>
                  <h5 className="text-black">Auto</h5>
                </div>
                <div className="col-sm-3 mb-3">
                  <h6>Interest Rate</h6>
                  <h5 style={{color: "#228B22"}}>10%</h5>
                </div>
                <div className="col-sm-3 mb-3">
                  <h6>Savings ID</h6>
                  <h5 className="text-black">N 0.00</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-4 mb-3">
            <div className="table-cards">
              <div>
                <h6>Client ID: <span className="fs-6" style={{color: "#228B22"}}>#14-54</span></h6>
                <i className="bi bi-three-dots-vertical float-end" style={{marginTop: "-25px"}}></i>
              </div>
              <div className="row mt-4">
                <div className="col-sm-3 mb-3">
                  <h6>Type of Plan</h6>
                  <h5 className="text-black">Auto</h5>
                </div>
                <div className="col-sm-3 mb-3">
                  <h6>Opening Amount</h6>
                  <h5 className="text-black">N 0.00</h5>
                </div>
                <div className="col-sm-3 mb-3">
                  <h6>Amount to be saved</h6>
                  <h5 className="text-black">N 0.00</h5>
                </div>
                <div className="col-sm-3 mb-3">
                  <h6>Frequency</h6>
                  <h5 className="text-black">Monthly</h5>
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-sm-3 mb-3">
                  <h6>Duration</h6>
                  <h5 className="text-black">Auto</h5>
                </div>
                <div className="col-sm-3 mb-3">
                  <h6>Interest Rate</h6>
                  <h5 style={{color: "#228B22"}}>10%</h5>
                </div>
                <div className="col-sm-3 mb-3">
                  <h6>Savings ID</h6>
                  <h5 className="text-black">N 0.00</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-4 mb-3">
            <div className="table-cards">
              <div>
                <h6>Client ID: <span className="fs-6" style={{color: "#228B22"}}>#14-54</span></h6>
                <i className="bi bi-three-dots-vertical float-end" style={{marginTop: "-25px"}}></i>
              </div>
              <div className="row mt-4">
                <div className="col-sm-3 mb-3">
                  <h6>Type of Plan</h6>
                  <h5 className="text-black">Auto</h5>
                </div>
                <div className="col-sm-3 mb-3">
                  <h6>Opening Amount</h6>
                  <h5 className="text-black">N 0.00</h5>
                </div>
                <div className="col-sm-3 mb-3">
                  <h6>Amount to be saved</h6>
                  <h5 className="text-black">N 0.00</h5>
                </div>
                <div className="col-sm-3 mb-3">
                  <h6>Frequency</h6>
                  <h5 className="text-black">Monthly</h5>
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-sm-3 mb-3">
                  <h6>Duration</h6>
                  <h5 className="text-black">Auto</h5>
                </div>
                <div className="col-sm-3 mb-3">
                  <h6>Interest Rate</h6>
                  <h5 style={{color: "#228B22"}}>10%</h5>
                </div>
                <div className="col-sm-3 mb-3">
                  <h6>Savings ID</h6>
                  <h5 className="text-black">N 0.00</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Add Users */}
      <div className="modal fade modal-m" id="add-save" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title">Add Savings Plan</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className="inner-card">
                <div className="row">
                  <div className="col-sm-12">
                    <Form>
                      <Row className="mb-4 mt-4">
                        <Col>
                          <Form.Control type="number" placeholder="Client ID" />
                        </Col>
                        <Col>
                          <Form.Control type="number" placeholder="Savings ID" />
                        </Col>
                        <Col>
                          <Form.Control type="number" placeholder="Opening Amount" />
                        </Col>
                      </Row>
                      <Row className="mb-4">
                        <Col>
                          <Form.Control type="number" placeholder="Amount to be Saved" />
                        </Col>
                        <Col>
                          <Form.Control type="number" placeholder="Frequency" />
                        </Col>
                        <Col>
                          <Form.Control type="text" placeholder="Type of Plan" />
                        </Col>
                      </Row>
                      <Row className="mb-4">
                        <Col>
                          <Form.Control type="number" placeholder="Interest Rate" />
                        </Col>
                        <Col>
                          <Form.Control type="number" placeholder="Duration" />
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
    </div>
  );
}


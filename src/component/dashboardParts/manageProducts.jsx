import SearchNotification from "./searchNotification";
import first from "../../assets/top-1.svg";
import second from "../../assets/top.svg";
import lo from "../../assets/officers.svg";
import third from "../../assets/top-2.svg";
import last from "../../assets/last.svg";
import { Col, Form, Row } from "react-bootstrap";

export default function ManageProduct() {
  return (
    <div className="content home modal-m">
      <SearchNotification />
      <div className="mt-5 row mx-5">
        <div className="col-sm-12 px-0">
          <div className="pending-loan">
            <div className="d-flex flex-row">
              <h5 className="me-3">Manage Products</h5>
            </div>
          </div>
        </div>
      </div>
      <div
        className="row mt-5 mx-5 members bg-white py-5 px-2"
        style={{ borderRadius: "0 0 20px 20px", minHeight: "999px" }}
      >
        <div className="col">
          <div className="text-end add_">
            <button className="btn-save" data-bs-toggle="modal" data-bs-target="#first">Add <i className="bi bi-plus"></i></button>
          </div>
          <table
            className="table table-responsive"
            style={{ width: "100%" }}
            id="example"
          >
            <thead className="bg-white rounded-pill">
              <tr>
                <th>Name</th>
                <th>Short Name</th>
                <th>Start Date</th>
                <th>End Date</th>
                <th>Fund</th>
                <th>Active</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Loan Products</td>
                <td>LP</td>
                <td>15/06/2023</td>
                <td>15/06/2023</td>
                <td>Hargon acct</td>
                <td><span className="approved">Yes</span></td>
                <td><i className="bi bi-three-dots"></i>
                </td>
              </tr>
              <tr>
                <td>Auto Loan</td>
                <td>AL</td>
                <td>15/06/2023</td>
                <td>15/06/2023</td>
                <td>Hargon acct</td>
                <td><span className="approved">Yes</span></td>
                <td><i className="bi bi-three-dots"></i>
                </td>
              </tr>
              <tr>
                <td>Quick Credit</td>
                <td>QC</td>
                <td>15/06/2023</td>
                <td>15/06/2023</td>
                <td>Hargon acct</td>
                <td><span className="withdrawn">No</span></td>
                <td><i className="bi bi-three-dots"></i>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      {/* First Modal */}
      <div className="modal fade" id="first" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title">Create Loan Product</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className="inner-card">
                <div className="row justify-content-center">
                  <div className="col-sm-9 text-center">
                    <img src={first} alt="first" className="img-fluid" />
                  </div>
                </div>
                <div className="row mt-5">
                  <div className="col-sm-12">
                    <Form>
                      <Row className="mb-4">
                        <Col>
                          <Form.Control placeholder="Name" />
                        </Col>
                        <Col>
                          <Form.Control placeholder="Short Name" />
                        </Col>
                      </Row>
                      <Row className="mb-4">
                        <Col>
                          <Form.Control placeholder="Description" />
                        </Col>
                        <Col>
                          <div className="form-check form-switch mt-2">
                            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                            <label className="form-check-label" for="flexSwitchCheckDefault">Active</label>
                          </div>
                        </Col>
                      </Row>
                      <div className="text-end">
                        <button type="button" className="btn-save" data-bs-toggle="modal" data-bs-target="#second"> Continue</button>
                      </div>
                    </Form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Second Modal */}
      <div className="modal fade" id="second" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title">Create Loan Product</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className="inner-card">
                <div className="row justify-content-center">
                  <div className="col-sm-9 text-center">
                    <img src={second} alt="first" className="img-fluid" />
                  </div>
                </div>
                <div className="row mt-5">
                  <div className="col-sm-12">
                    <Form>
                      <Row className="mb-4">
                        <Col>
                          <Form.Control placeholder="Default Principal" />
                        </Col>
                        <Col>
                          <Form.Control placeholder="Default Loan Term" />
                        </Col>
                      </Row>
                      <Row className="mb-4">
                        <Col>
                          <Form.Control placeholder="Default Repayment Frequency" />
                        </Col>
                        <Col>
                          <Form.Control placeholder="Default Interest Rate" />
                        </Col>
                      </Row>
                      <div className="text-end">
                        <button type="button" className="btn-save" data-bs-toggle="modal" data-bs-target="#third"> Continue</button>
                      </div>
                    </Form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Third Modal */}
      <div className="modal fade" id="third" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title">Create Loan Product</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className="inner-card">
                <div className="row justify-content-center">
                  <div className="col-sm-9 text-center">
                    <img src={third} alt="first" className="img-fluid" />
                  </div>
                </div>
                <div className="row mt-5">
                  <div className="col-sm-12">
                    <Form>
                      <Row className="mb-4">
                        <Col>
                          <Form.Control placeholder="Grace On Principal Payment" />
                        </Col>
                        <Col>
                          <Form.Control placeholder="Grace On Interest Payment" />
                        </Col>
                      </Row>
                      <Row className="mb-4">
                        <Col>
                          <Form.Control placeholder="Grace On Interest Charged" />
                        </Col>
                        <Col>
                          <Form.Control placeholder="Loan Officers to Approve Loans" />
                        </Col>
                      </Row>
                      <Row className="mb-4">
                        <Col>
                          <Form.Control placeholder="Interest Calculation Period" />
                        </Col>
                        <Col>
                          <Form.Control placeholder="Interest Free Period" />
                        </Col>
                      </Row>
                      <Row className="mb-4">
                        <Col>
                          <Form.Control placeholder="Days In Month" />
                        </Col>
                        <Col>
                          <Form.Control placeholder="Days before a loan overdued is marked as having arrears" />
                        </Col>
                      </Row>
                      <div className="text-end">
                        <button type="button" className="btn-save" data-bs-toggle="modal" data-bs-target="#last"> Continue</button>
                      </div>
                    </Form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Last Modal */}
      <div className="modal fade" id="last" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title">Create Loan Product</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className="inner-card">
                <div className="row justify-content-center">
                  <div className="col-sm-9 text-center">
                    <img src={last} alt="first" className="img-fluid" />
                  </div>
                </div>
                <div className="mt-5 preview">
                  <div className="row">
                    <div className="col-sm-3">
                      <h5>Name</h5>
                      <h6>Loan Product</h6>
                    </div>
                    <div className="col-sm-3">
                      <h5>Short Name</h5>
                      <h6>LP</h6>
                    </div>
                    <div className="col-sm-3">
                      <h5>Description</h5>
                      <h6>Loan Product</h6>
                    </div>
                    <div className="col-sm-3">
                      <h5>Active</h5>
                      <h6><span className="approved">Yes</span></h6>
                    </div>
                  </div>
                  <hr/>
                  <div className="row">
                    <div className="col-sm-3">
                      <h5>Default Principal</h5>
                      <h6>₦10,000,000</h6>
                    </div>
                    <div className="col-sm-3">
                      <h5>Default Loan Term</h5>
                      <h6>LP</h6>
                    </div>
                    <div className="col-sm-3">
                      <h5>Default Repayment Freq</h5>
                      <h6>Every 2 weeks</h6>
                    </div>
                    <div className="col-sm-3">
                      <h5>Default Interest Rate</h5>
                      <h6>40%</h6>
                    </div>
                  </div>
                  <hr/>
                  <div className="row">
                    <div className="col-sm-3">
                      <h5>Grace On Principal Payment</h5>
                      <h6>3 days</h6>
                    </div>
                    <div className="col-sm-3">
                      <h5>Grace On Interest Payment</h5>
                      <h6>3 days</h6>
                    </div>
                    <div className="col-sm-3">
                      <h5>Grace On Interest Charge</h5>
                      <h6>3 days</h6>
                    </div>
                    <div className="col-sm-3">
                      <h5>Loan Officers to Approve</h5>
                      <h6><img src={lo} alt="loan officers" className="img-fluid" /></h6>
                    </div>
                  </div>
                  <hr/>
                  <div className="row">
                    <div className="col-sm-3">
                      <h5>Interest Calculation Period</h5>
                      <h6>18/04/2023</h6>
                    </div>
                    <div className="col-sm-3">
                      <h5>Default Loan Term</h5>
                      <h6>18/04/2023</h6>
                    </div>
                    <div className="col-sm-3">
                      <h5>Interest Free Period</h5>
                      <h6>0</h6>
                    </div>
                    <div className="col-sm-3">
                      <h5>Days In Month</h5>
                      <h6>5 days</h6>
                    </div>
                  </div>
                  <div className="text-end mt-5">
                    <button type="button" className="btn-save"> Finish</button>
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

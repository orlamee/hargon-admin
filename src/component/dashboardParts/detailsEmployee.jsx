import { Col, Form, Row } from "react-bootstrap";
import SearchNotification from "./searchNotification";

function DetailsEmployee() {
  return (
    <div className="content home">
      <SearchNotification />
      <div className="mt-5 row mx-5">
        <div className="col-sm-12 px-0">
          <div className="pending-loan rounded-0">
            <div className="d-flex flex-row">
              <h5 className="me-3"><a href="/manage-company/details"><i className="bi bi-chevron-left me-2" style={{color: "#228B22"}}></i></a>Employee Details</h5>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-2 row mx-5">
        <div className="col-sm-12 px-0">
          <div className="pending-loan rounded-0">
            <Form className="mt-4 modal-m">
              <Row className="mb-3">
                <Form.Group as={Col}>
                  <Form.Label>Employee Name</Form.Label>
                  <Form.Control type="text" placeholder="Samanta Walsh" />
                </Form.Group>
                <Form.Group as={Col}>
                  <Form.Label>Department</Form.Label>
                  <Form.Control type="text" placeholder="Technology" />
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group as={Col}>
                  <Form.Label>Date</Form.Label>
                  <Form.Control type="date" placeholder="0" />
                </Form.Group>
                <Form.Group as={Col}>
                  <Form.Label>Loan Type</Form.Label>
                  <Form.Control type="text" placeholder="Salary Advance" />
                </Form.Group>
              </Row>
              <Row className="mb-4">
                <Form.Group as={Col}>
                  <Form.Label>Advance</Form.Label>
                  <Form.Control type="number" placeholder="₦150,000" />
                </Form.Group>
                <Form.Group as={Col}>
                  <Form.Label>Salary Account</Form.Label>
                  <Form.Control type="text" placeholder="LAPO" />
                </Form.Group>
              </Row>
              <button className="btn-save">Save Changes</button>
            </Form>
          </div>
        </div>
      </div>
      <div className="mt-2 row mx-5 emp-detail">
        <div className="col-sm-12 px-0">
          <div className="pending-loan rounded-0">
            <div>
              <h6>Statement - <span style={{color: "#9CA3AF", fontSize: "10px"}}>Account Summary</span></h6>
              <hr />
            </div>
            <div className="row">
              <div className="col-sm-4 loany">
                <ul className="nav nav-pills " id="pills-tab" role="tablist">
                  <li className="nav-item" role="presentation">
                    <button className="nav-link active" id="pills-loan-tab" data-bs-toggle="pill" data-bs-target="#pills-loan" type="button" role="tab" aria-controls="pills-loan" aria-selected="true">Payroll</button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button className="nav-link" id="pills-savings-tab" data-bs-toggle="pill" data-bs-target="#pills-savings" type="button" role="tab" aria-controls="pills-saving" aria-selected="false">Salary Advancement</button>
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
                        <div className="col-sm-12">
                          <div className="">
                            <div className="">
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
                                  <tr>
                                    <th>Status</th>
                                    <td><span className="awaiting">Pending</span></td>
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
                        <div className="col-sm-12">
                          <div className="">
                            <div className="">
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
                                  <tr>
                                    <th>Status</th>
                                    <td><span className="awaiting">Pending</span></td>
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
        </div>
      </div>
      
      
    </div>
  );
}

export default DetailsEmployee;

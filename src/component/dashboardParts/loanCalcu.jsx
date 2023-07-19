import { Col, Form, Row } from "react-bootstrap";
import SearchNotification from "./searchNotification";

function LoanCalcu() {
  return (
    <div className="content home">
      <SearchNotification />
      <div className="mt-5 row mx-5">
        <div className="col-sm-12 px-0">
          <div className="pending-loan">
            <div className="d-flex flex-row">
              <h5 className="me-3">Loan Calculator</h5>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-5 mt-5 row">
        <div className="col-sm-12 px-0">
          <div className="bg-white p-4 view-loans">
            <div className="acc-details">
              <div className="row justify-content-center">
                <div className="col-sm-7">
                  <div className="details-card">
                    <div className="bg-white p-4">
                      <h3>Input Loan Details</h3>
                      <hr />
                      <Form className="mt-4 app-cal">
                        <Row>
                          <Col>
                            <Form.Group className="mb-3">
                              <Form.Select aria-label="Default select example">
                                <option>Select Loan Product</option>
                                <option value="1">Auto Loan</option>
                                <option value="2">Business Loan</option>
                                <option value="3">Mortgage</option>
                              </Form.Select>
                            </Form.Group>
                          </Col>
                          <Col>
                            <Form.Group className="mb-3">
                              <Form.Control
                                type="text"
                                placeholder="Principal"
                              />
                            </Form.Group>
                          </Col>
                        </Row>
                        <Row>
                          <Col>
                            <Form.Group className="mb-3">
                              <Form.Control
                                type="number"
                                placeholder="Loan Term"
                              />
                            </Form.Group>
                          </Col>
                          <Col>
                            <Form.Group className="mb-3">
                              <Form.Control
                                type="number"
                                placeholder="Interest Rate"
                              />
                            </Form.Group>
                          </Col>
                        </Row>
                        <Row>
                          <Col>
                            <Form.Group className="mb-3">
                              <Form.Control
                                type="number"
                                placeholder="Repayment Frequency"
                              />
                            </Form.Group>
                          </Col>
                          <Col>
                            <Form.Group className="mb-3">
                              <Form.Control
                                type="number"
                                placeholder="Expected Disbursement Date"
                              />
                            </Form.Group>
                          </Col>
                        </Row>
                        <Row>
                          <Col>
                            <Form.Group className="mb-3">
                              <Form.Control type="number" placeholder="Type" />
                            </Form.Group>
                          </Col>
                          <Col>
                            <Form.Group className="mb-3">
                              <Form.Control
                                type="number"
                                placeholder="Expected First Repayment Date"
                              />
                            </Form.Group>
                          </Col>
                        </Row>
                        <a
                          href="/calculate-loan"
                          className="mt-5 btn-save"
                        >
                          Calculate
                        </a>
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
  );
}

export default LoanCalcu;

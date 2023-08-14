import { Col, Form, Row } from "react-bootstrap";
import SearchNotification from "./searchNotification";

function PaymentTable() {
  return (
    <div className="content home">
      <SearchNotification />
      <div className="mt-5 row mx-5">
        <div className="col-sm-12 px-0">
          <div className="pending-loan">
            <div className="d-flex flex-row">
              <h5 className="me-3">Payments</h5>
            </div>
            <div className="text-end" style={{marginTop: "-32px"}}>
              <a href="/new-application" className="btn-save" data-bs-toggle="modal" data-bs-target="#add-payment">
                Add <i className="bi bi-plus"></i>
              </a>
            </div>
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
            id="application"
          >
            <thead className="bg-white rounded-pill">
              <tr>
                <th>User ID</th>
                <th>Date</th>
                <th>Transaction Type</th>
                <th>Transaction ID</th>
                <th>Status</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>#11-22</td>
                <td>15/06/2023</td>
                <td>Loan Repayment</td>
                <td>234577523</td>
                <td>
                  <span className="approved">Credit</span>
                </td>
                <td>₦10,000</td>
              </tr>
              <tr>
                <td>#11-20</td>
                <td>15/06/2023</td>
                <td>Savings</td>
                <td>234578090987523</td>
                <td>
                  <span className="awaiting">Debit</span>
                </td>
                <td>₦10,000</td>
              </tr>
              <tr>
                <td>#11-22</td>
                <td>15/06/2023</td>
                <td>Loan Repayment</td>
                <td>234577523</td>
                <td>
                  <span className="approved">Credit</span>
                </td>
                <td>₦10,000</td>
              </tr>
              <tr>
                <td>#11-22</td>
                <td>15/06/2023</td>
                <td>Loan Repayment</td>
                <td>234577523</td>
                <td>
                  <span className="approved">Credit</span>
                </td>
                <td>₦10,000</td>
              </tr>
              <tr>
                <td>#11-20</td>
                <td>08/06/2023</td>
                <td>Client Withdrawal</td>
                <td>234578090987523</td>
                <td>
                  <span className="awaiting">Debit</span>
                </td>
                <td>₦10,000</td>
              </tr>
              <tr>
                <td>#11-20</td>
                <td>15/06/2023</td>
                <td>Savings</td>
                <td>234578090987523</td>
                <td>
                  <span className="awaiting">Debit</span>
                </td>
                <td>₦10,000</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      {/* Modal */}
      <div className="modal fade modal-m" id="add-payment" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title">Add Payments</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className="inner-card">
                <div className="row">
                  <div className="col-sm-12">
                    <h6>Payment Details</h6>
                    <hr />
                    <Form>
                      <Row className="mb-4 mt-4">
                        <Col>
                          <Form.Control type="number" placeholder="User ID" />
                        </Col>
                        <Col>
                          <Form.Control type="number" placeholder="Transaction ID" />
                        </Col>
                      </Row>
                      <Row className="mb-4">
                        <Col>
                          <Form.Control type="number" placeholder="Balance" />
                        </Col>
                        <Col>
                          <Form.Control type="number" placeholder="Amount" />
                        </Col>
                      </Row>
                      <Row className="mb-4">
                        <Col>
                          <Form.Control type="date" placeholder="Date" />
                        </Col>
                        <Col>
                          <Form.Control type="number" placeholder="Fee" />
                        </Col>
                        <Col>
                          <Form.Control placeholder="Status" />
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

export default PaymentTable;

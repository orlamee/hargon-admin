import SearchNotification from "./searchNotification";
import { useRef } from "react";
import { Col, Form, Row } from "react-bootstrap";

function EmailTable() {
  const ref = useRef();
  return (
    <div className="content home">
      <SearchNotification />
      <div className="mt-5 row mx-5">
        <div className="col-sm-12 px-0">
          <div className="pending-loan">
            <div className="d-flex flex-row">
              <h5 className="me-3">Manage Email </h5>
            </div>
            <a
              className="btn-save float-end"
              href="/create-email"
              style={{ marginTop: "-38px" }}
            >
              Create Email <i className="bi bi-plus ms-2"></i>
            </a>
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
                <th>Title</th>
                <th>Status</th>
                <th>Date</th>
                <th>Open Rate</th>
                <th>Clicks</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Hargon is going Live Now<br/>
                <span style={{color: "#9CA3AF", fontSize: "12px", lineHeight: "12px"}}>Hargon is going Live Now, so log on to our website and get started by signing...</span>
                </td>
                <td><span className="approved">Sent</span></td>
                <td>10/08/2023<br/>
                <span style={{color: "#9CA3AF", fontSize: "12px", lineHeight: "12px"}}>8:00 AM</span></td>
                <td>50.4%</td>
                <td style={{color: "#228B22"}}>30.4%</td>
                <td><i className="bi bi-three-dots"></i></td>
              </tr>
              <tr>
                <td>Hargon is going Live Now<br/>
                <span style={{color: "#9CA3AF", fontSize: "12px", lineHeight: "12px"}}>Hargon is going Live Now, so log on to our website and get started by signing...</span>
                </td>
                <td><span className="awaiting">Scheduled</span></td>
                <td>10/08/2023<br/>
                <span style={{color: "#9CA3AF", fontSize: "12px", lineHeight: "12px"}}>8:00 AM</span></td>
                <td>50.4%</td>
                <td style={{color: "#228B22"}}>30.4%</td>
                <td><i className="bi bi-three-dots"></i></td>
              </tr>
              <tr>
                <td>Hargon is going Live Now<br/>
                <span style={{color: "#9CA3AF", fontSize: "12px", lineHeight: "12px"}}>Hargon is going Live Now, so log on to our website and get started by signing...</span>
                </td>
                <td><span className="awaiting">Scheduled</span></td>
                <td>10/08/2023<br/>
                <span style={{color: "#9CA3AF", fontSize: "12px", lineHeight: "12px"}}>8:00 AM</span></td>
                <td>50.4%</td>
                <td style={{color: "#228B22"}}>30.4%</td>
                <td><i className="bi bi-three-dots"></i></td>
              </tr>
              <tr>
                <td>Hargon is going Live Now<br/>
                <span style={{color: "#9CA3AF", fontSize: "12px", lineHeight: "12px"}}>Hargon is going Live Now, so log on to our website and get started by signing...</span>
                </td>
                <td><span className="awaiting">Scheduled</span></td>
                <td>10/08/2023<br/>
                <span style={{color: "#9CA3AF", fontSize: "12px", lineHeight: "12px"}}>8:00 AM</span></td>
                <td>50.4%</td>
                <td style={{color: "#228B22"}}>30.4%</td>
                <td><i className="bi bi-three-dots"></i></td>
              </tr>
              <tr>
                <td>Hargon is going Live Now<br/>
                <span style={{color: "#9CA3AF", fontSize: "12px", lineHeight: "12px"}}>Hargon is going Live Now, so log on to our website and get started by signing...</span>
                </td>
                <td><span className="awaiting">Scheduled</span></td>
                <td>10/08/2023<br/>
                <span style={{color: "#9CA3AF", fontSize: "12px", lineHeight: "12px"}}>8:00 AM</span></td>
                <td>50.4%</td>
                <td style={{color: "#228B22"}}>30.4%</td>
                <td><i className="bi bi-three-dots"></i></td>
              </tr>
              <tr>
                <td>Hargon is going Live Now<br/>
                <span style={{color: "#9CA3AF", fontSize: "12px", lineHeight: "12px"}}>Hargon is going Live Now, so log on to our website and get started by signing...</span>
                </td>
                <td><span className="awaiting">Scheduled</span></td>
                <td>10/08/2023<br/>
                <span style={{color: "#9CA3AF", fontSize: "12px", lineHeight: "12px"}}>8:00 AM</span></td>
                <td>50.4%</td>
                <td style={{color: "#228B22"}}>30.4%</td>
                <td><i className="bi bi-three-dots"></i></td>
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

export default EmailTable;

import { Col, Form, Row } from "react-bootstrap";
import SearchNotification from "./searchNotification";

function AppDetails() {
  return (
    <div className="content home">
      <SearchNotification />
      <div className="mt-5 row mx-5">
        <div className="col-sm-12 px-0">
          <div className="pending-loan">
            <div className="d-flex flex-row">
              <h5 className="me-3"><a href="/applications"><i className="bi bi-chevron-left me-2" style={{color: "#228B22"}}></i></a>Application Details</h5>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white mt-5 mx-5 p-5 app-details">
        <div className="row">
          <div className="col-sm-6 mb-3">
            <h3 className="text-black mb-4">Product Details</h3>
            <hr />
            <Form className="mt-4">
              <Row>
                <Col>
                  <Form.Group className="mb-3" >
                    <Form.Label>Date Submitted</Form.Label>
                    <Form.Control type="date" />
                  </Form.Group>

                </Col>
                <Col>
                  <Form.Group className="mb-3">
                    <Form.Label>Product</Form.Label>
                    <Form.Control type="text" defaultValue="Auto Loan"  />
                  </Form.Group>
                </Col>
              </Row>
              <Form.Group>
                <div><Form.Label className="mb-3">Offer Letter</Form.Label></div>
                <div class="form-check form-check-inline me-5">
                  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
                  <label class="form-check-label" for="inlineRadio1">Signed</label>
                </div>
                <div class="form-check form-check-inline">
                  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
                  <label class="form-check-label" for="inlineRadio2">Not Signed</label>
                </div>
              </Form.Group>
              <h3 className="text-black my-4">Personal Details</h3>
              <hr />
              <Row>
                <Col>
                  <Form.Group className="mb-3">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control type="text" defaultValue="John Doe"/>
                  </Form.Group>

                </Col>
                <Col>
                  <Form.Group className="mb-3">
                    <Form.Label>Marital Status</Form.Label>
                    <Form.Select aria-label="Default select example">
                      <option>Select Marital Status</option>
                      <option value="1">Married</option>
                      <option value="2">Divorced</option>
                      <option value="3">Single</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
              </Row>
              <Form.Group className="mb-3">
                <Form.Label>Address</Form.Label>
                <Form.Control type="text" defaultValue="1 Agbaje stree, off Akinyemi, Ikeja, Lagos State" />
              </Form.Group>
              <h3 className="text-black my-4">Next of Kin</h3>
              <hr />
              <Row>
                <Col>
                  <Form.Group className="mb-3">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control type="text" defaultValue="John Doe"/>
                  </Form.Group>

                </Col>
                <Col>
                  <Form.Group className="mb-3">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control type="tel" defaultValue="080800222" />
                  </Form.Group>
                </Col>
              </Row>
              <Form.Group className="mb-5" controlId="exampleForm.ControlInput1">
                <Form.Label>Address</Form.Label>
                <Form.Control type="text" defaultValue="1 Agbaje stree, off Akinyemi, Ikeja, Lagos State" />
              </Form.Group>
              <div className="d-flex flex-row">
                <button className="btn-report me-3">Report Application</button>
                <button className="btn-save">Accept Application</button>
              </div>
            </Form>
          </div>
          <div className="col-sm-6">
            <h3 className="text-black mb-4">Account Details</h3>
            <hr />
            <Form className="mt-4">
              <Row>
                <Col>
                  <Form.Group className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control defaultValue="Ola Doe" />
                  </Form.Group>

                </Col>
                <Col>
                <Form.Group className="mb-3">
                    <Form.Label>Product</Form.Label>
                    <Form.Select aria-label="Default select example">
                      <option>Select Bank</option>
                      <option value="1">Globus</option>
                      <option value="2">LAPO</option>
                      <option value="3">GTBank</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group className="mb-3">
                    <Form.Label>Account Number</Form.Label>
                    <Form.Control type="number" defaultValue="2345456789" />
                  </Form.Group>

                </Col>
                <Col>
                  <Form.Group className="mb-3">
                    <Form.Label>Phone Linked</Form.Label>
                    <Form.Control type="tel" defaultValue="080800222" />
                  </Form.Group>
                </Col>
              </Row>
              <h3 className="text-black my-4">Employer/Business information</h3>
              <hr />
              <Row>
                <Col>
                  <Form.Group className="mb-3">
                    <Form.Label>Company Name</Form.Label>
                    <Form.Control defaultValue="Transcorp" />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-3">
                    <Form.Label>Industry</Form.Label>
                    <Form.Select aria-label="Default select example">
                      <option>Select Industry</option>
                      <option value="1">Education</option>
                      <option value="2">Oil & Gas</option>
                      <option value="3">Banking</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
              </Row>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Address</Form.Label>
                <Form.Control type="text" defaultValue="1 Agbaje stree, off Akinyemi, Ikeja, Lagos State" />
              </Form.Group>
              <Row>
                <Col xs={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Status</Form.Label>
                    <Form.Select aria-label="Default select example">
                      <option>Select Status</option>
                      <option value="1">Successful</option>
                      <option value="2">Pending</option>
                      <option value="3">Rejected</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
              </Row>
              <button className="mt-3 btn-save">Save Changes</button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppDetails;

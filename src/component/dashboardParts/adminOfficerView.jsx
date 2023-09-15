import SearchNotification from "./searchNotification";
import ratings from "../../assets/userrate.svg";
import avi from "../../assets/officer.svg";
import { Col, Form, Row } from "react-bootstrap";

function AdminOfficerView() {
  return (
    <div className="content home">
      <SearchNotification />
      <div className="mt-5 row mx-5">
        <div className="col-sm-12 px-0">
          <div className="pending-loan">
            <div className="d-flex flex-row">
              <h5 className="me-3">
                <a href="/admin/account-officer">
                  <i
                    className="bi bi-chevron-left me-2"
                    style={{ color: "#228B22" }}
                  ></i>
                </a>
                Details
              </h5>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-2 mx-5 justify-content-between">
        <div className="col-sm-5 mb-3 px-0">
          <div className="report-card">
            <div className="row justify-content-center">
              <div className="col-sm-5 text-center mb-4">
                <img src={avi} alt="avi" className="img-fluid" />
                <h5 className="my-3">Olabode Akindele</h5>
                <h3>08164356789</h3>
                <div className="d-flex flex-row justify-content-center mt-3">
                  <button
                    className="me-2 edit-btn"
                    data-bs-toggle="modal"
                    data-bs-target="#edit-officer"
                  >
                    <i className="bi bi-pencil me-2"></i>Edit
                  </button>
                  <button
                    data-bs-toggle="modal"
                    data-bs-target="#delete-officer"
                    className="delete-btn"
                  >
                    <i className="bi bi-archive me-2"></i>Delete
                  </button>
                </div>
              </div>
              <hr />
              <div className="text-center">
                <img src={ratings} alt="rating" className="img-fluid" />
                <h5 className="fs-6">50 Users</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-7 mb-3 px-0">
          <div className="report-card">
            
          </div>
        </div>
      </div>

      {/* Delete Officer */}
      <div
        className="modal fade vprogress"
        id="delete-officer"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="row justify-content-start not-alert mb-4">
                <div className="col">
                  <h3 className="mb-3 fs-4">Delete “Ololade Akindele”</h3>
                  <p>
                    You will not be able to undo after deleting this account
                    officer
                  </p>
                  <div className="d-flex flex-row mt-4 justify-content-center">
                    <button className="me-3 btn-delete">Delete</button>
                    <button className="me-3 btn-white">Cancel</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Edit Officer */}
      <div
        className="modal fade modal-m"
        id="edit-officer"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title">Edit Account Officer</h1>
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
                  <div className="col-sm-12 add-m">
                    <Form>
                      <Row className="mb-4">
                        <Col xs={6}>
                          <Form.Control type="text" placeholder="First Name" />
                        </Col>
                        <Col>
                          <Form.Control placeholder="Last Name" />
                        </Col>
                      </Row>
                      <Row className="mb-4">
                        <Col xs={6}>
                          <Form.Control type="tel" placeholder="Phone Number" />
                        </Col>
                        <Col>
                          <Form.Control placeholder="Email" />
                        </Col>
                      </Row>
                      <div className="text-end">
                        <button type="button" className="btn-save">
                          Save Update
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

export default AdminOfficerView;

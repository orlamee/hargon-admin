import SearchNotification from "./searchNotification";
import avi from "../../assets/acc-user.svg";
import { Col, Form, Row } from "react-bootstrap";
import Select from "react-select";

const options = [
  { value: "Dashboard", label: "Dashboard" },
  { value: "Application", label: "Application" },
  { value: "Loans", label: "Loans" },
  { value: "User-Management", label: "User Management" },
  { value: "Agent-Management", label: "Agent Management" },
  { value: "Business-Management", label: "Business Management" },
];

function DetailsMember() {
  return (
    <div className="content home">
      <SearchNotification />
      <div className="mt-5 row mx-5">
        <div className="col-sm-12 px-0">
          <div className="pending-loan">
            <div className="d-flex flex-row">
              <h5 className="me-3">Details</h5>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-2 row mx-5">
        <div className="col-sm-12 px-0">
          <div className="bg-white p-4 view-loans">
            <div className="row justify-content-center mt-5">
              <div className="col-sm-3">
                <div className="tog-bg p-1">
                  <ul
                    className="nav nav-pills nav-justified"
                    id="pills-tab"
                    role="tablist"
                  >
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link active"
                        id="pills-home-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-home"
                        type="button"
                        role="tab"
                        aria-controls="pills-home"
                        aria-selected="true"
                      >
                        Account Info
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link"
                        id="pills-profile-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-profile"
                        type="button"
                        role="tab"
                        aria-controls="pills-profile"
                        aria-selected="false"
                      >
                        Recent Activities
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="row mt-5">
              <div className="col-sm-12">
                <div className="tab-content" id="pills-tabContent">
                  <div
                    className="tab-pane fade show active"
                    id="pills-home"
                    role="tabpanel"
                    aria-labelledby="pills-home-tab"
                    tabIndex="0"
                  >
                    <div className="overview">
                      <div className="row justify-content-center">
                        <div className="col-sm-7">
                          <div className="details-card">
                            <div className="bg-white p-4">
                              <div className="my-5 text-center">
                                <img
                                  src={avi}
                                  alt="user"
                                  className="img-fluid"
                                  style={{ marginTop: "-27px" }}
                                />
                                <h6 className="my-3">Jane Doe</h6>
                                <button
                                  className="admin-badge border-0"
                                  data-bs-toggle="modal"
                                  data-bs-target="#edit-member"
                                >
                                  <i className="bi bi-pencil me-2"></i>Edit
                                </button>
                              </div>
                              <table className="table overview-table mt-3">
                                <tbody>
                                  <tr>
                                    <th>Email</th>
                                    <td>johndoe@gmail.com</td>
                                  </tr>
                                  <tr>
                                    <th>Phone Number</th>
                                    <td>08168463526</td>
                                  </tr>
                                  <tr>
                                    <th>Joined Since</th>
                                    <td>10/12/2023</td>
                                  </tr>
                                  <tr>
                                    <th>Title</th>
                                    <td>Admin</td>
                                  </tr>
                                  <tr>
                                    <th>Permission</th>
                                    <td>Dashboard, Application, Loans</td>
                                  </tr>
                                  <tr>
                                    <th>Current Password</th>
                                    <td>
                                      Password123{" "}
                                      <button
                                        className="admin-badge border-0 ms-2"
                                        data-bs-toggle="modal"
                                        data-bs-target="#password"
                                      >
                                        Change
                                      </button>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="pills-profile"
                    role="tabpanel"
                    aria-labelledby="pills-profile-tab"
                    tabIndex="0"
                  >
                    <div className="overview">
                      <div className="row justify-content-center">
                        <div className="col-sm-9">
                          <div className="details-card members">
                            <div className="bg-white p-4">
                              <table
                                className="table table-responsive"
                                style={{ width: "100%" }}
                                id="ex"
                              >
                                <thead className="bg-white rounded-pill">
                                  <tr>
                                    <th>Date</th>
                                    <th>Source IP</th>
                                    <th>Message</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td>15/06/2023</td>
                                    <td style={{ color: "#2563EB" }}>
                                      986.67.98.00
                                    </td>
                                    <td>
                                      Attended to a ticket opened by a customer
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>15/06/2023</td>
                                    <td style={{ color: "#2563EB" }}>
                                      986.67.98.00
                                    </td>
                                    <td>
                                      Attended to a ticket opened by a customer
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>15/06/2021</td>
                                    <td style={{ color: "#2563EB" }}>
                                      986.67.98.00
                                    </td>
                                    <td>
                                      Attended to a ticket opened by a customer
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>15/06/2021</td>
                                    <td style={{ color: "#2563EB" }}>
                                      986.67.98.00
                                    </td>
                                    <td>
                                      Attended to a ticket opened by a customer
                                    </td>
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
      {/* Edit Members */}
      <div
        className="modal fade modal-m"
        id="edit-member"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title">Edit Member Details</h1>
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
                          <Form.Control type="text" placeholder="Username" />
                        </Col>
                        <Col>
                          <Form.Control placeholder="Email" />
                        </Col>
                      </Row>
                      <Row className="mb-4">
                        <Col xs={6}>
                          <Form.Control type="tel" placeholder="Phone Number" />
                        </Col>
                        <Col>
                          <Form.Control placeholder="User Role" />
                        </Col>
                      </Row>
                      <Row className="mb-4">
                        <Col xs={6}>
                          <Form.Control
                            type="password"
                            placeholder="Password"
                          />
                        </Col>
                        <Col>
                          <Form.Control type="file" placeholder="" />
                        </Col>
                      </Row>
                      <Row className="mb-4">
                        <Col xs={12}>
                          <Select
                            options={options}
                            isMulti
                            className="basic-multi-select"
                            placeholder="Select Permission"
                          />
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

      {/* Change Password */}
      <div
        className="modal fade vprogress"
        id="password"
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
                  <h3 className="mb-3 fs-5">Change Password</h3>
                   <Form className="modal-m">
                    <Form.Group className="mb-3">
                      <Form.Label>New Password</Form.Label>
                      <Form.Control type="password" />
                    </Form.Group>
                    <div className="text-end">
                      <button className="btn-save">Save</button>
                    </div>
                   </Form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailsMember;

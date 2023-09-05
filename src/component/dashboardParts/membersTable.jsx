/* eslint-disable jsx-a11y/anchor-is-valid */
import { Col, Form, Row } from "react-bootstrap";
import SearchNotification from "./searchNotification";
import Select from 'react-select'

const options = [
  { value: 'Dashboard', label: 'Dashboard' },
  { value: 'Application', label: 'Application' },
  { value: 'Loans', label: 'Loans' },
  { value: 'User-Management', label: 'User Management' },
  { value: 'Agent-Management', label: 'Agent Management' },
  { value: 'Business-Management', label: 'Business Management' },
]


function MemberTables() {
  return (
    <div className="content home">
      <SearchNotification />
      <div className="mt-5 row mx-5">
        <div className="col-sm-12 px-0">
          <div className="pending-loan">
            <div className="d-flex flex-row">
              <h5 className="me-3">
                Member -{" "}
                <span style={{ color: "#FF823B", fontSize: "10px" }}>
                  Manage Member
                </span>
              </h5>
            </div>
            <button
              data-bs-toggle="modal"
              data-bs-target="#add-member"
              className="btn-save float-end"
              style={{ marginTop: "-38px" }}
            >
              Add New Member <i className="bi bi-plus ms-2"></i>
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
            id="application"
          >
            <thead className="bg-white rounded-pill">
              <tr>
                <th>Name</th>
                <th>Role</th>
                <th>Email</th>
                <th>Last Login</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>John Doe</td>
                <td>Admin</td>
                <td>johndoe@gmail.com</td>
                <td>15/08/2023, 10:00am</td>
                <td>
                  <div className="dropdown">
                    <i
                      className="bi bi-three-dots"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    ></i>
                    <ul class="dropdown-menu details">
                      <li>
                        <a className="dropdown-item" href="/members/details">
                          <i className="bi bi-eye me-2"></i>View Member Details
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          data-bs-toggle="modal"
                          data-bs-target="#delete-member"
                        >
                          <i className="bi bi-trash3 me-2 text-danger"></i>
                          Delete Member
                        </a>
                      </li>
                    </ul>
                  </div>
                </td>
              </tr>
              <tr>
                <td>John Doe</td>
                <td>Admin</td>
                <td>johndoe@gmail.com</td>
                <td>15/08/2023, 10:00am</td>
                <td>
                  <div className="dropdown">
                    <i
                      className="bi bi-three-dots"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    ></i>
                    <ul class="dropdown-menu details">
                      <li>
                        <a className="dropdown-item" href="/members/details">
                          <i className="bi bi-eye me-2"></i>View Member Details
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          data-bs-toggle="modal"
                          data-bs-target="#delete-member"
                        >
                          <i className="bi bi-trash3 me-2 text-danger"></i>
                          Delete Member
                        </a>
                      </li>
                    </ul>
                  </div>
                </td>
              </tr>
              <tr>
                <td>John Doe</td>
                <td>Admin</td>
                <td>johndoe@gmail.com</td>
                <td>15/08/2023, 10:00am</td>
                <td>
                  <div className="dropdown">
                    <i
                      className="bi bi-three-dots"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    ></i>
                    <ul class="dropdown-menu details">
                      <li>
                        <a className="dropdown-item" href="/members/details">
                          <i className="bi bi-eye me-2"></i>View Member Details
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          data-bs-toggle="modal"
                          data-bs-target="#delete-member"
                        >
                          <i className="bi bi-trash3 me-2 text-danger"></i>
                          Delete Member
                        </a>
                      </li>
                    </ul>
                  </div>
                </td>
              </tr>
              <tr>
                <td>John Doe</td>
                <td>Admin</td>
                <td>johndoe@gmail.com</td>
                <td>15/08/2023, 10:00am</td>
                <td>
                  <div className="dropdown">
                    <i
                      className="bi bi-three-dots"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    ></i>
                    <ul class="dropdown-menu details">
                      <li>
                        <a className="dropdown-item" href="/members/details">
                          <i className="bi bi-eye me-2"></i>View Member Details
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          data-bs-toggle="modal"
                          data-bs-target="#delete-member"
                        >
                          <i className="bi bi-trash3 me-2 text-danger"></i>
                          Delete Member
                        </a>
                      </li>
                    </ul>
                  </div>
                </td>
              </tr>
              <tr>
                <td>Maryanne Obidi</td>
                <td>Admin</td>
                <td>johndoe@gmail.com</td>
                <td>15/08/2023, 10:00am</td>
                <td>
                  <div className="dropdown">
                    <i
                      className="bi bi-three-dots"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    ></i>
                    <ul class="dropdown-menu details">
                      <li>
                        <a className="dropdown-item" href="/members/details">
                          <i className="bi bi-eye me-2"></i>View Member Details
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          data-bs-toggle="modal"
                          data-bs-target="#delete-member"
                        >
                          <i className="bi bi-trash3 me-2 text-danger"></i>
                          Delete Member
                        </a>
                      </li>
                    </ul>
                  </div>
                </td>
              </tr>
              <tr>
                <td>John Doe</td>
                <td>Admin</td>
                <td>johndoe@gmail.com</td>
                <td>15/08/2023, 10:00am</td>
                <td>
                  <div className="dropdown">
                    <i
                      className="bi bi-three-dots"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    ></i>
                    <ul class="dropdown-menu details">
                      <li>
                        <a className="dropdown-item" href="/members/details">
                          <i className="bi bi-eye me-2"></i>View Member Details
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          data-bs-toggle="modal"
                          data-bs-target="#delete-member"
                        >
                          <i className="bi bi-trash3 me-2 text-danger"></i>
                          Delete Member
                        </a>
                      </li>
                    </ul>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      {/* Add Members */}
      <div
        className="modal fade modal-m"
        id="add-member"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title">Add New Member</h1>
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
                          Add Member
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
      
      {/* Delete Member */}
      <div
        className="modal fade vprogress"
        id="delete-member"
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
                  <h3 className="mb-3 fs-4">Delete “John Doe”</h3>
                  <p>
                    You will not be able to undo after deleting this member
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
    </div>
  );
}

export default MemberTables;

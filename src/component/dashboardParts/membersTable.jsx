/* eslint-disable jsx-a11y/anchor-is-valid */
import { Col, Form, Row } from "react-bootstrap";
import SearchNotification from "./searchNotification";
import Select from 'react-select'
import React, { useState } from "react";
import DataTable from "react-data-table-component";


const options = [
  { value: 'Dashboard', label: 'Dashboard' },
  { value: 'Application', label: 'Application' },
  { value: 'Loans', label: 'Loans' },
  { value: 'User-Management', label: 'User Management' },
  { value: 'Agent-Management', label: 'Agent Management' },
  { value: 'Business-Management', label: 'Business Management' },
];


const columns = [
  {
    name: 'Name',
    selector: 'fullName',
    sortable: true,
  },
  {
    name: 'Role',
    selector: 'title',
    sortable: true,
  },
  {
    name: 'Email',
    selector: 'email',
    sortable: true,
  },
  {
    name: 'Last Login',
    selector: 'lastLogin',
    sortable: true,
  },
  {
    name: 'Action',
    cell: (row) => (
      <div className="dropdown">
        <i
          className="bi bi-three-dots"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        ></i>
        <ul className="dropdown-menu details">
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
    ),
  },
];


function MemberTables() {
  const [members, setMembers] = useState([]);
  const [showAddMemberModal, setShowAddMemberModal] = useState(false);
  const [newMemberData, setNewMemberData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    password: "",
    title: "",
    permissions: [],
  });

  const [loading, setLoading] = useState(false);

  const handleAddMember = (event) => {
    event.preventDefault();
    setLoading(true);

    // Simulate an API request delay (you can replace this with your actual API request)
    setTimeout(() => {
      const newMember = { ...newMemberData, lastLogin: '15/08/2023, 10:00am' };
      setMembers([...members, newMember]);
      setShowAddMemberModal(false);
      setLoading(false);
    }, 1500);
  };

  const data = members.map((member) => ({
    ...member,
    fullName: `${member.firstName} ${member.lastName}`,
  }));

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
              onClick={() => setShowAddMemberModal(true)}
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
        <div className="col" style={{minHeight: "600px"}}>
          <DataTable
            title="Members"
            columns={columns}
            data={data}
            pagination
            selectableRows
          />
        </div>
      </div>
      {/* Add Members Modal */}
      <div
        className={`modal fade modal-m ${showAddMemberModal ? "show" : ""}`}
        id="add-member"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden={!showAddMemberModal}
        style={{ display: showAddMemberModal ? "block" : "none" }}
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
                onClick={() => setShowAddMemberModal(false)}
              ></button>
            </div>
            <div className="modal-body">
              <div className="inner-card">
                <div className="row">
                  <div className="col-sm-12 add-m">
                    <Form onSubmit={handleAddMember}>
                      <Row className="mb-4">
                        <Col xs={6}>
                          <Form.Control
                            type="text"
                            placeholder="First Name"
                            name="firstName"
                            onChange={(e) => setNewMemberData({ ...newMemberData, firstName: e.target.value })}
                            required
                          />
                        </Col>
                        <Col>
                          <Form.Control
                            placeholder="Last Name"
                            name="lastName"
                            onChange={(e) => setNewMemberData({ ...newMemberData, lastName: e.target.value })}
                            required
                          />
                        </Col>
                      </Row>
                      <Row className="mb-4">
                        <Col xs={6}>
                          <Form.Control
                            type="tel"
                            placeholder="Phone Number"
                            name="phoneNumber"
                            onChange={(e) => setNewMemberData({ ...newMemberData, phoneNumber: e.target.value })}
                            required
                          />
                        </Col>
                        <Col>
                          <Form.Control
                            type="email"
                            placeholder="Email"
                            name="email"
                            onChange={(e) => setNewMemberData({ ...newMemberData, email: e.target.value })}
                            required
                          />
                        </Col>
                      </Row>
                      <Row className="mb-4">
                        <Col xs={6}>
                          <Form.Control
                            type="password"
                            placeholder="Password"
                            name="password"
                            onChange={(e) => setNewMemberData({ ...newMemberData, password: e.target.value })}
                            required
                          />
                        </Col>
                        <Col>
                          <Form.Control
                            placeholder="Title"
                            name="title"
                            onChange={(e) => setNewMemberData({ ...newMemberData, title: e.target.value })}
                            required
                          />
                        </Col>
                      </Row>
                      <Row className="mb-4">
                        <Col xs={6}>
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
                            name="permissions"
                            required
                            onChange={(selectedOptions) => setNewMemberData({ ...newMemberData, permissions: selectedOptions })}
                          />
                        </Col>
                      </Row>
                      <div className="text-end">
                        {loading ? (
                          <div className="spinner-border text-primary" role="status">
                            <span className="visually-hidden">Loading...</span>
                          </div>
                        ) : (
                          <button type="submit" className="btn-save">
                            Add Member
                          </button>
                        )}
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
        tabIndex="-1"
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

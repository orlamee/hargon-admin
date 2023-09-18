/* eslint-disable jsx-a11y/anchor-is-valid */
import { Col, Form, Row } from "react-bootstrap";
import SearchNotification from "./searchNotification";
import Select from "react-select";
import React, { useState } from "react";
import DataTable from "react-data-table-component";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useFormik } from "formik";
import * as Yup from "yup";

const options = [
  { value: "Dashboard", label: "Dashboard" },
  { value: "Application", label: "Application" },
  { value: "Loans", label: "Loans" },
  { value: "User-Management", label: "User Management" },
  { value: "Agent-Management", label: "Agent Management" },
  { value: "Business-Management", label: "Business Management" },
];

const MemberTables = () => {
  const [members, setMembers] = useState([]);
  const [showAddMemberModal, setShowAddMemberModal] = useState(false);
  const [showDeleteMemberModal, setShowDeleteMemberModal] = useState(false);
  const [memberToDelete, setMemberToDelete] = useState(null);

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      phoneNumber: "",
      email: "",
      password: "",
      title: "",
      permissions: [],
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("First Name is required"),
      lastName: Yup.string().required("Last Name is required"),
      phoneNumber: Yup.string().required("Phone Number is required"),
      email: Yup.string()
        .email("Invalid email format")
        .required("Email is required"),
      password: Yup.string().required("Password is required"),
      title: Yup.string().required("Title is required"),
    }),
    onSubmit: (values, { setSubmitting, resetForm }) => {
      if (members.some((member) => member.email === values.email)) {
        toast.error("Email is already taken.");
        resetForm();
      } else {
        // Simulate an API request delay (you can replace this with your actual API request)
        setTimeout(() => {
          const newMember = { ...values, lastLogin: "15/08/2023, 10:00am" };
          setMembers([...members, newMember]);
          setShowAddMemberModal(false);
          setSubmitting(false);
          toast.success("Member added successfully!");
          resetForm();
        }, 1500);
      }
    },
  });

  const columns = [
    {
      name: "Name",
      selector: "fullName",
      sortable: true,
    },
    {
      name: "Role",
      selector: "title",
      sortable: true,
    },
    {
      name: "Email",
      selector: "email",
      sortable: true,
    },
    {
      name: "Last Login",
      selector: "lastLogin",
      sortable: true,
    },
    {
      name: "Action",
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
                data-bs-target="#delete-member-modal"
                onClick={() => setMemberToDelete(row)}
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

  const data = members.map((member) => ({
    ...member,
    fullName: `${member.firstName} ${member.lastName}`,
  }));

  const handleDeleteMember = () => {
    if (memberToDelete) {
      const updatedMembers = members.filter(
        (member) => member.email !== memberToDelete.email
      );
      setMembers(updatedMembers);
      setShowDeleteMemberModal(false);
      toast.success("Member deleted successfully!");
    }
  };

  return (
    <div className="content home">
      <ToastContainer />
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
        <div className="col" style={{ minHeight: "600px" }}>
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
                    <Form onSubmit={formik.handleSubmit}>
                      <Row className="mb-4">
                        <Col xs={6}>
                          <Form.Control
                            type="text"
                            placeholder="First Name"
                            name="firstName"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.firstName}
                            isInvalid={
                              formik.touched.firstName &&
                              formik.errors.firstName
                            }
                          />
                          <Form.Control.Feedback type="invalid">
                            {formik.errors.firstName}
                          </Form.Control.Feedback>
                        </Col>
                        <Col>
                          <Form.Control
                            placeholder="Last Name"
                            name="lastName"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.lastName}
                            isInvalid={
                              formik.touched.lastName && formik.errors.lastName
                            }
                          />
                          <Form.Control.Feedback type="invalid">
                            {formik.errors.lastName}
                          </Form.Control.Feedback>
                        </Col>
                      </Row>
                      <Row className="mb-4">
                        <Col xs={6}>
                          <Form.Control
                            type="tel"
                            placeholder="Phone Number"
                            name="phoneNumber"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.phoneNumber}
                            isInvalid={
                              formik.touched.phoneNumber &&
                              formik.errors.phoneNumber
                            }
                          />
                          <Form.Control.Feedback type="invalid">
                            {formik.errors.phoneNumber}
                          </Form.Control.Feedback>
                        </Col>
                        <Col>
                          <Form.Control
                            type="email"
                            placeholder="Email"
                            name="email"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.email}
                            isInvalid={
                              formik.touched.email && formik.errors.email
                            }
                          />
                          <Form.Control.Feedback type="invalid">
                            {formik.errors.email}
                          </Form.Control.Feedback>
                        </Col>
                      </Row>
                      <Row className="mb-4">
                        <Col xs={6}>
                          <Form.Control
                            type="password"
                            placeholder="Password"
                            name="password"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.password}
                            isInvalid={
                              formik.touched.password && formik.errors.password
                            }
                          />
                          <Form.Control.Feedback type="invalid">
                            {formik.errors.password}
                          </Form.Control.Feedback>
                        </Col>
                        <Col>
                          <Form.Control
                            placeholder="Title"
                            name="title"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.title}
                            isInvalid={
                              formik.touched.title && formik.errors.title
                            }
                          />
                          <Form.Control.Feedback type="invalid">
                            {formik.errors.title}
                          </Form.Control.Feedback>
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
                            onChange={(selectedOptions) =>
                              formik.setFieldValue(
                                "permissions",
                                selectedOptions
                              )
                            }
                            onBlur={formik.handleBlur}
                            value={formik.values.permissions}
                          />
                        </Col>
                      </Row>
                      <div className="text-end">
                        {formik.isSubmitting ? (
                          <div
                            className="spinner-border text-primary"
                            role="status"
                          >
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
        className={`modal fade vprogress ${
          showDeleteMemberModal ? "show" : ""
        }`}
        id="delete-member-modal"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden={!showDeleteMemberModal}
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                // onClick={() => setShowDeleteMemberModal(false)}
              ></button>
            </div>
            <div className="modal-body">
              <div className="row justify-content-start not-alert mb-4">
                <div className="col">
                  <h3 className="mb-3 fs-4">{`Delete "${
                    memberToDelete ? memberToDelete.fullName : ""
                  }"`}</h3>
                  <p>You will not be able to undo after deleting this member</p>
                  <div className="d-flex flex-row mt-4 justify-content-center">
                    <button
                      className="me-3 btn-delete"
                      onClick={handleDeleteMember}
                    >
                      Delete
                    </button>
                    <button
                      className="me-3 btn-white"
                      onClick={() => setShowDeleteMemberModal(false)}
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemberTables;

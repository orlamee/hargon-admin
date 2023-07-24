/* eslint-disable jsx-a11y/anchor-is-valid */
import SearchNotification from "./searchNotification";
import {Form } from "react-bootstrap";


function SettingsUser() {
  return (
    <div className="content home">
      <SearchNotification />
      <div className="mt-5 row mx-5">
        <div className="col-sm-12 px-0">
          <div className="pending-loan">
            <div className="d-flex flex-row">
              <h5 className="me-3">User Settings</h5>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5 row mx-5">
        <div className="col-sm-12 px-0">
          <div className="bg-white p-4 view-loans">
            <div className="row justify-content-center mt-5">
              <div className="col-sm-9">
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
                        Member Type
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
                        Titles
                      </button>
                    </li>
                    <li class="nav-item" role="presentation">
                      <button
                        class="nav-link"
                        id="pills-h-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-h"
                        type="button"
                        role="tab"
                        aria-controls="pills-h"
                        aria-selected="false"
                      >
                        Professions
                      </button>
                      
                    </li>
                    <li class="nav-item" role="presentation">
                      <button
                        class="nav-link"
                        id="pills-g-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-g"
                        type="button"
                        role="tab"
                        aria-controls="pills-g"
                        aria-selected="false"
                      >
                        Member Relationships
                      </button>
                    </li>
                    <li class="nav-item" role="presentation">
                      <button
                        class="nav-link"
                        id="pills-z-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-z"
                        type="button"
                        role="tab"
                        aria-controls="pills-z"
                        aria-selected="false"
                      >
                        Member Identification Types
                      </button>
                    </li>
                    <li class="nav-item" role="presentation">
                      <button
                        class="nav-link"
                        id="pills-x-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-x"
                        type="button"
                        role="tab"
                        aria-controls="pills-x"
                        aria-selected="false"
                      >
                        Member Instructions
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
                    <div className="acc-details">
                      <div className="row justify-content-center">
                        <div className="col-sm-5">
                          <div className="details-card">
                            <div className="bg-white p-4">
                              <div>
                                <h6>Member Types</h6>
                                <button className="btn-save float-end add" data-bs-toggle="modal" data-bs-target="#add">Add <i className="bi bi-plus"></i></button>
                              </div>
                              <div className="mt-5">
                                <div className="row title-head">
                                  <div className="col-sm-8">
                                    <h6>Name</h6>
                                  </div>
                                  <div className="col-sm-4 text-end">
                                    <h6>Actions</h6>
                                  </div>
                                </div>
                                <div className="addlist">
                                  <div className="row">
                                    <div className="col-sm-6">
                                      <h6>Premium</h6>
                                    </div>
                                    <div className="col-sm-6 text-end">
                                      <div className="dropdown">
                                        <i
                                          className="bi bi-three-dots"
                                          data-bs-toggle="dropdown"
                                          aria-expanded="false"
                                        ></i>
                                        <ul class="dropdown-menu details">
                                          <li>
                                            <a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#edit">
                                              Edit
                                            </a>
                                          </li>
                                          <li>
                                            <a className="dropdown-item" href="/">
                                              Delete
                                            </a>
                                          </li>
                                        </ul>
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
                  <div
                    className="tab-pane fade"
                    id="pills-profile"
                    role="tabpanel"
                    aria-labelledby="pills-profile-tab"
                    tabIndex="0"
                  >
                    <div className="acc-details">
                      <div className="row justify-content-center">
                        <div className="col-sm-5">
                          <div className="details-card">
                            <div className="bg-white p-4">
                              <div>
                                <h6>Titles</h6>
                                <button className="btn-save float-end add" data-bs-toggle="modal" data-bs-target="#add-title">Add <i className="bi bi-plus"></i></button>
                              </div>
                              <div className="mt-5">
                                <div className="row title-head">
                                  <div className="col-sm-8">
                                    <h6>Name</h6>
                                  </div>
                                  <div className="col-sm-4 text-end">
                                    <h6>Actions</h6>
                                  </div>
                                </div>
                                <div className="addlist">
                                  <div className="row">
                                    <div className="col-sm-6">
                                      <h6>Premium Loans</h6>
                                    </div>
                                    <div className="col-sm-6 text-end">
                                      <div className="dropdown">
                                        <i
                                          className="bi bi-three-dots"
                                          data-bs-toggle="dropdown"
                                          aria-expanded="false"
                                        ></i>
                                        <ul class="dropdown-menu details">
                                          <li>
                                            <a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#edit-title">
                                              Edit
                                            </a>
                                          </li>
                                          <li>
                                            <a className="dropdown-item" href="/">
                                              Delete
                                            </a>
                                          </li>
                                        </ul>
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
                  <div
                    className="tab-pane fade"
                    id="pills-h"
                    role="tabpanel"
                    aria-labelledby="pills-h-tab"
                    tabIndex="0"
                  >
                    <div className="acc-details">
                      <div className="row justify-content-center">
                        <div className="col-sm-5">
                          <div className="details-card">
                            <div className="bg-white p-4">
                              <div>
                                <h6>Loan Purpose</h6>
                                <button className="btn-save float-end add" data-bs-toggle="modal" data-bs-target="#add-profession">Add <i className="bi bi-plus"></i></button>
                              </div>
                              <div className="mt-5">
                                <div className="row title-head">
                                  <div className="col-sm-8">
                                    <h6>Name</h6>
                                  </div>
                                  <div className="col-sm-4 text-end">
                                    <h6>Actions</h6>
                                  </div>
                                </div>
                                <div className="addlist">
                                  <div className="row">
                                    <div className="col-sm-6">
                                      <h6>Doctor</h6>
                                    </div>
                                    <div className="col-sm-6 text-end">
                                      <div className="dropdown">
                                        <i
                                          className="bi bi-three-dots"
                                          data-bs-toggle="dropdown"
                                          aria-expanded="false"
                                        ></i>
                                        <ul class="dropdown-menu details">
                                          <li>
                                            <a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#edit-profession">
                                              Edit
                                            </a>
                                          </li>
                                          <li>
                                            <a className="dropdown-item" href="/">
                                              Delete
                                            </a>
                                          </li>
                                        </ul>
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
                  <div
                    className="tab-pane fade"
                    id="pills-g"
                    role="tabpanel"
                    aria-labelledby="pills-g-tab"
                    tabIndex="0"
                  >
                     <div className="acc-details">
                      <div className="row justify-content-center">
                        <div className="col-sm-5">
                          <div className="details-card">
                            <div className="bg-white p-4">
                              <div>
                                <h6>Loan Status</h6>
                                <button className="btn-save float-end add" data-bs-toggle="modal" data-bs-target="#add-status">Add <i className="bi bi-plus"></i></button>
                              </div>
                              <div className="mt-5">
                                <div className="row title-head">
                                  <div className="col-sm-8">
                                    <h6>Name</h6>
                                  </div>
                                  <div className="col-sm-4 text-end">
                                    <h6>Actions</h6>
                                  </div>
                                </div>
                                <div className="addlist">
                                  <div className="row">
                                    <div className="col-sm-6">
                                      <h6>Hargon</h6>
                                    </div>
                                    <div className="col-sm-6 text-end">
                                      <div className="dropdown">
                                        <i
                                          className="bi bi-three-dots"
                                          data-bs-toggle="dropdown"
                                          aria-expanded="false"
                                        ></i>
                                        <ul class="dropdown-menu details">
                                          <li>
                                            <a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#edit-status">
                                              Edit
                                            </a>
                                          </li>
                                          <li>
                                            <a className="dropdown-item" href="/">
                                              Delete
                                            </a>
                                          </li>
                                        </ul>
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
            </div>
          </div>
        </div>
      </div>
      {/* Add Member Modal */}
      <div className="modal fade modal-m" id="add" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title">Create Member Types</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className="inner-card">
                <div className="row mt-5">
                  <div className="col-sm-12">
                    <Form>
                      <Form.Group className="mb-3">
                        <Form.Control type="text" placeholder="Name of Member Type" />
                      </Form.Group>
                      <div className="text-end">
                        <button type="button" className="btn-save"> Save</button>
                      </div>
                    </Form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Edit Member Modal */}
      <div className="modal fade modal-m" id="edit" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title">Edit Member Type</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className="inner-card">
                <div className="row mt-5">
                  <div className="col-sm-12">
                    <Form>
                      <Form.Group className="mb-3">
                        <Form.Control type="text" defaultValue="Premium" />
                      </Form.Group>
                      <div className="text-end">
                        <button type="button" className="btn-save"> Save</button>
                      </div>
                    </Form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Add Title */}
      <div className="modal fade modal-m" id="add-title" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title">Create Titles</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className="inner-card">
                <div className="row mt-5">
                  <div className="col-sm-12">
                    <Form>
                      <Form.Group className="mb-3">
                        <Form.Control type="text" placeholder="Name of Title" />
                      </Form.Group>
                      <div className="text-end">
                        <button type="button" className="btn-save"> Save</button>
                      </div>
                    </Form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Edit Title Modal */}
      <div className="modal fade modal-m" id="edit-title" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title">Edit Title</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className="inner-card">
                <div className="row mt-5">
                  <div className="col-sm-12">
                    <Form>
                      <Form.Group className="mb-3">
                        <Form.Control type="text" defaultValue="Premium" />
                      </Form.Group>
                      <div className="text-end">
                        <button type="button" className="btn-save"> Save</button>
                      </div>
                    </Form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Add Loan Purpose */}
      <div className="modal fade modal-m" id="add-profession" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title">Create Profession</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className="inner-card">
                <div className="row mt-5">
                  <div className="col-sm-12">
                    <Form>
                      <Form.Group className="mb-3">
                        <Form.Control type="text" placeholder="Name of Profession" />
                      </Form.Group>
                      <div className="text-end">
                        <button type="button" className="btn-save"> Save</button>
                      </div>
                    </Form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Edit Loan Purpose */}
      <div className="modal fade modal-m" id="edit-profession" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title">Edit Profession</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className="inner-card">
                <div className="row mt-5">
                  <div className="col-sm-12">
                    <Form>
                      <Form.Group className="mb-3">
                        <Form.Control type="text" defaultValue="Doctor" />
                      </Form.Group>
                      <div className="text-end">
                        <button type="button" className="btn-save"> Save</button>
                      </div>
                    </Form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Add Loan Purpose */}
      <div className="modal fade modal-m" id="add-status" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title">Create Loan Status</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className="inner-card">
                <div className="row mt-5">
                  <div className="col-sm-12">
                    <Form>
                      <Form.Group className="mb-3">
                        <Form.Control type="text" placeholder="Name of Fund" />
                      </Form.Group>
                      <div className="text-end">
                        <button type="button" className="btn-save"> Save</button>
                      </div>
                    </Form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Edit Loan Purpose */}
      <div className="modal fade modal-m" id="edit-status" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title">Edit Loan Status</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className="inner-card">
                <div className="row mt-5">
                  <div className="col-sm-12">
                    <Form>
                      <Form.Group className="mb-3">
                        <Form.Control type="text" defaultValue="Hargon" />
                      </Form.Group>
                      <div className="text-end">
                        <button type="button" className="btn-save"> Save</button>
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

export default SettingsUser;

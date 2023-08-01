/* eslint-disable jsx-a11y/anchor-is-valid */
import SearchNotification from "./searchNotification";
import {Form } from "react-bootstrap";


function SettingsCompany() {
  return (
    <div className="content home">
      <SearchNotification />
      <div className="mt-5 row mx-5">
        <div className="col-sm-12 px-0">
          <div className="pending-loan">
            <div className="d-flex flex-row">
              <h5 className="me-3">Company Settings</h5>
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
                        Company Types
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
                        Industry
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
                        Status
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
                                <h6>Company Types</h6>
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
                                      <h6>Education</h6>
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
                                <button className="btn-save float-end add" data-bs-toggle="modal" data-bs-target="#add-collateral">Add <i className="bi bi-plus"></i></button>
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
                                      <h6>Mr</h6>
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
                                            <a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#edit-collateral">
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
                                <h6>Industry</h6>
                                <button className="btn-save float-end add" data-bs-toggle="modal" data-bs-target="#add-purpose">Add <i className="bi bi-plus"></i></button>
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
                                      <h6>Banking</h6>
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
                                            <a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#edit-purpose">
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
                                <h6>Status</h6>
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
                                      <h6>Successful</h6>
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
      {/* Add Fund Modal */}
      <div className="modal fade modal-m" id="add" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title">Create Company Types</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className="inner-card">
                <div className="row mt-5">
                  <div className="col-sm-12">
                    <Form>
                      <Form.Group className="mb-3">
                        <Form.Control type="text" placeholder="Name of Company Types" />
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
      {/* Edit Fund Modal */}
      <div className="modal fade modal-m" id="edit" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title">Edit Company Types</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className="inner-card">
                <div className="row mt-5">
                  <div className="col-sm-12">
                    <Form>
                      <Form.Group className="mb-3">
                        <Form.Control type="text" defaultValue="Company Types" />
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
      {/* Add Collateral Modal */}
      <div className="modal fade modal-m" id="add-collateral" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
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
                        <Form.Control type="text" placeholder="Name of Titles" />
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
      {/* Edit Collateral Modal */}
      <div className="modal fade modal-m" id="edit-collateral" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title">Edit Titles</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className="inner-card">
                <div className="row mt-5">
                  <div className="col-sm-12">
                    <Form>
                      <Form.Group className="mb-3">
                        <Form.Control type="text" defaultValue="Titles" />
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
      <div className="modal fade modal-m" id="add-purpose" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title">Create Industry</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className="inner-card">
                <div className="row mt-5">
                  <div className="col-sm-12">
                    <Form>
                      <Form.Group className="mb-3">
                        <Form.Control type="text" placeholder="Name of Industry" />
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
      <div className="modal fade modal-m" id="edit-purpose" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title">Edit Industry</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className="inner-card">
                <div className="row mt-5">
                  <div className="col-sm-12">
                    <Form>
                      <Form.Group className="mb-3">
                        <Form.Control type="text" defaultValue="Industry" />
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
              <h1 className="modal-title">Create Status</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className="inner-card">
                <div className="row mt-5">
                  <div className="col-sm-12">
                    <Form>
                      <Form.Group className="mb-3">
                        <Form.Control type="text" placeholder="Name of Status" />
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
              <h1 className="modal-title">Edit Status</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className="inner-card">
                <div className="row mt-5">
                  <div className="col-sm-12">
                    <Form>
                      <Form.Group className="mb-3">
                        <Form.Control type="text" defaultValue="Status" />
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

export default SettingsCompany;

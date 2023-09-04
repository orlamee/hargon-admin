/* eslint-disable jsx-a11y/anchor-is-valid */
import SearchNotification from "./searchNotification";
import { Form } from "react-bootstrap";


function SettingsMember() {
  return (
    <div className="content home">
      <SearchNotification />
      <div className="mt-5 row mx-5">
        <div className="col-sm-12 px-0">
          <div className="pending-loan">
            <div className="d-flex flex-row">
              <h5 className="me-3">Member Settings</h5>
            </div>
          </div>
        </div>
      </div>
      <div
        className="mt-2 mx-5 members bg-white py-5 px-2 view-loans"
        style={{ borderRadius: "0 0 20px 20px" }}
      >
        <div className="acc-details">
          <div className="row justify-content-center">
            <div className="col-sm-5">
              <div className="details-card">
                <div className="bg-white p-4">
                  <div>
                    <h6>Role Type</h6>
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
                          <h6>Admin</h6>
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
                                <a className="dropdown-item" data-bs-toggle="modal" data-bs-target="#edit">
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
      {/* Add Role Types Modal */}
      <div className="modal fade modal-m" id="add" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title">Create Role Type</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className="inner-card">
                <div className="row mt-5">
                  <div className="col-sm-12">
                    <Form>
                      <Form.Group className="mb-3">
                        <Form.Control type="text" placeholder="Name of Role Type" />
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
      {/* Edit Role Types Modal */}
      <div className="modal fade modal-m" id="edit" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title">Edit Role Type</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className="inner-card">
                <div className="row mt-5">
                  <div className="col-sm-12">
                    <Form>
                      <Form.Group className="mb-3">
                        <Form.Control type="text" defaultValue="Admin" />
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

export default SettingsMember;

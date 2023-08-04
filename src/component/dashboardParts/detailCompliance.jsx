import SearchNotification from "./searchNotification";
import vc from "../../assets/int.svg";
import tier from "../../assets/t.svg";
import three from "../../assets/tii.svg";
import max from "../../assets/maxi.svg";
import { Form } from "react-bootstrap";

function DetailCompliance() {
  return (
    <div className="content home">
      <SearchNotification />
      <div className="mt-5 row mx-5">
        <div className="col-sm-12 px-0">
          <div className="pending-loan">
            <div className="d-flex flex-row">
              <h5 className="me-3">
                <a href="/compliance">
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
                        Tier 1
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
                        Tier 2
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
                        Tier 3
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
                        <div className="col-sm-5">
                          <div className="text-center step-">
                            <img
                              src={max}
                              alt="max"
                              className="img-fluid mb-3"
                            />
                            <p>
                              (6/6{" "}
                              <span style={{ color: "#228B22" }}>
                                Completed)
                              </span>
                            </p>
                          </div>
                          <div style={{height: "700px", overflow: "hidden auto"}}>
                            <div className="details-card pb-0">
                              <div className="bg-white p-4">
                                <div className="row">
                                  <div className="col-sm-6">
                                    <h5>Name</h5>
                                    <h6>Akinyemi Akinwale Idowu</h6>
                                  </div>
                                  <div className="col-sm-6 text-end">
                                    <button className="btn-save">Verify</button>
                                  </div>
                                </div>
                                <div className="row height d-flex justify-content-center align-items-center mt-4">
                                  <div className="search-">
                                    <input
                                      type="text"
                                      className="form-control"
                                      placeholder="Add Note"
                                    />
                                    <button className="btn btn-primary">
                                      Add
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="details-card pb-0">
                              <div className="bg-white p-4">
                                <div className="row">
                                  <div className="col-sm-6">
                                    <h5>Place of Birth</h5>
                                    <h6>Lagos</h6>
                                  </div>
                                  <div className="col-sm-6 text-end">
                                    <button className="btn-save">Verify</button>
                                  </div>
                                </div>
                                <div className="row height d-flex justify-content-center align-items-center mt-4">
                                  <div className="search-">
                                    <input
                                      type="text"
                                      className="form-control"
                                      placeholder="Add Note"
                                    />
                                    <button className="btn btn-primary">
                                      Add
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="details-card pb-0">
                              <div className="bg-white p-4">
                                <div className="row">
                                  <div className="col-sm-6">
                                    <h5>Date of Birth</h5>
                                    <h6>18/04/2023</h6>
                                  </div>
                                  <div className="col-sm-6 text-end">
                                    <button className="btn-save">Verify</button>
                                  </div>
                                </div>
                                <div className="row height d-flex justify-content-center align-items-center mt-4">
                                  <div className="search-">
                                    <input
                                      type="text"
                                      className="form-control"
                                      placeholder="Add Note"
                                    />
                                    <button className="btn btn-primary">
                                      Add
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="details-card pb-0">
                              <div className="bg-white p-4">
                                <div className="row">
                                  <div className="col-sm-6">
                                    <h5>Gender</h5>
                                    <h6>Male</h6>
                                  </div>
                                  <div className="col-sm-6 text-end">
                                    <button className="btn-save">Verify</button>
                                  </div>
                                </div>
                                <div className="row height d-flex justify-content-center align-items-center mt-4">
                                  <div className="search-">
                                    <input
                                      type="text"
                                      className="form-control"
                                      placeholder="Add Note"
                                    />
                                    <button className="btn btn-primary">
                                      Add
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="details-card pb-0">
                              <div className="bg-white p-4">
                                <div className="row">
                                  <div className="col-sm-6">
                                    <h5>Address</h5>
                                    <h6>1 Agbaje stree, off Akinyemi, Ikeja, Lagos State</h6>
                                  </div>
                                  <div className="col-sm-6 text-end">
                                    <button className="btn-save">Verify</button>
                                  </div>
                                </div>
                                <div className="row height d-flex justify-content-center align-items-center mt-4">
                                  <div className="search-">
                                    <input
                                      type="text"
                                      className="form-control"
                                      placeholder="Add Note"
                                    />
                                    <button className="btn btn-primary">
                                      Add
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="details-card pb-0">
                              <div className="bg-white p-4">
                                <div className="row">
                                  <div className="col-sm-6">
                                    <h5>Phone Number</h5>
                                    <h6>08012345678</h6>
                                  </div>
                                  <div className="col-sm-6 text-end">
                                    <button className="btn-save">Verify</button>
                                  </div>
                                </div>
                                <div className="row height d-flex justify-content-center align-items-center mt-4">
                                  <div className="search-">
                                    <input
                                      type="text"
                                      className="form-control"
                                      placeholder="Add Note"
                                    />
                                    <button className="btn btn-primary">
                                      Add
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="details-card">
                              <div className="bg-white p-4">
                                <div className="row">
                                  <div className="col-sm-6">
                                    <h5>NIN </h5>
                                    <h6>123456789</h6>
                                  </div>
                                  <div className="col-sm-6 text-end">
                                    <button className="btn-save">Verify</button>
                                  </div>
                                </div>
                                <div className="row height d-flex justify-content-center align-items-center mt-4">
                                  <div className="search-">
                                    <input
                                      type="text"
                                      className="form-control"
                                      placeholder="Add Note"
                                    />
                                    <button className="btn btn-primary">
                                      Add
                                    </button>
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
                    <div className="overview">
                      <div className="row justify-content-center">
                        <div className="col-sm-5">
                          <div className="text-center step-">
                            <img
                              src={tier}
                              alt="max"
                              className="img-fluid mb-3"
                            />
                            <p>
                              (6/6{" "}
                              <span style={{ color: "#228B22" }}>
                                Completed)
                              </span>
                            </p>
                          </div>
                          <div style={{height: "700px", overflow: "hidden auto"}}>
                            <div className="details-card pb-0">
                              <div className="bg-white p-4">
                                <div className="row justify-content-between">
                                  <div className="col-sm-6">
                                    <h5>Voter's Card</h5>
                                    <img src={vc} alt="vc" className="img-fluid w-100" />
                                  </div>
                                  <div className="col-sm-3 mt-4">
                                    <Form className="modal-m">
                                      <Form.Group>
                                        <Form.Select aria-label="Default select example">
                                          <option>Select Status</option>
                                          <option value="1">Active</option>
                                          <option value="2">Inactive</option>
                                        </Form.Select>
                                      </Form.Group>
                                    </Form>
                                  </div>
                                </div>
                                <div className="row height d-flex justify-content-center align-items-center mt-4">
                                  <div className="search-">
                                    <input
                                      type="text"
                                      className="form-control"
                                      placeholder="Add Note"
                                    />
                                    <button className="btn btn-primary">
                                      Add
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="details-card pb-0">
                              <div className="bg-white p-4">
                                <div className="row justify-content-between">
                                  <div className="col-sm-6">
                                    <h5>International Passport</h5>
                                    <img src={vc} alt="vc" className="img-fluid w-100" />
                                  </div>
                                  <div className="col-sm-3 mt-4">
                                    <Form className="modal-m">
                                      <Form.Group>
                                        <Form.Select aria-label="Default select example">
                                          <option>Select Status</option>
                                          <option value="1">Active</option>
                                          <option value="2">Inactive</option>
                                        </Form.Select>
                                      </Form.Group>
                                    </Form>
                                  </div>
                                </div>
                                <div className="row height d-flex justify-content-center align-items-center mt-4">
                                  <div className="search-">
                                    <input
                                      type="text"
                                      className="form-control"
                                      placeholder="Add Note"
                                    />
                                    <button className="btn btn-primary">
                                      Add
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="details-card">
                              <div className="bg-white p-4">
                                <div className="row justify-content-between">
                                  <div className="col-sm-6">
                                    <h5>Driver’s License</h5>
                                    <img src={vc} alt="vc" className="img-fluid w-100" />
                                  </div>
                                  <div className="col-sm-3 mt-4">
                                    <Form className="modal-m">
                                      <Form.Group>
                                        <Form.Select aria-label="Default select example">
                                          <option>Select Status</option>
                                          <option value="1">Active</option>
                                          <option value="2">Inactive</option>
                                        </Form.Select>
                                      </Form.Group>
                                    </Form>
                                  </div>
                                </div>
                                <div className="row height d-flex justify-content-center align-items-center mt-4">
                                  <div className="search-">
                                    <input
                                      type="text"
                                      className="form-control"
                                      placeholder="Add Note"
                                    />
                                    <button className="btn btn-primary">
                                      Add
                                    </button>
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
                     <div className="overview">
                      <div className="row justify-content-center">
                        <div className="col-sm-5">
                          <div className="text-center step-">
                            <img
                              src={three}
                              alt="max"
                              className="img-fluid mb-3"
                            />
                            <p>
                              (6/6{" "}
                              <span style={{ color: "#228B22" }}>
                                Completed)
                              </span>
                            </p>
                          </div>
                          <div style={{height: "700px", overflow: "hidden auto"}}>
                            <div className="details-card pb-0">
                              <div className="bg-white p-4">
                                <div className="row">
                                  <div className="col-sm-6">
                                    <h5>Address</h5>
                                    <h6>1 Agbaje stree, off Akinyemi, Ikeja, Lagos State</h6>
                                  </div>
                                  <div className="col-sm-6 text-end">
                                    <button className="btn-save">Verify</button>
                                  </div>
                                </div>
                                <div className="row height d-flex justify-content-center align-items-center mt-4">
                                  <div className="search-">
                                    <input
                                      type="text"
                                      className="form-control"
                                      placeholder="Add Note"
                                    />
                                    <button className="btn btn-primary">
                                      Add
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="details-card pb-0">
                              <div className="bg-white p-4">
                                <div className="row">
                                  <div className="col-sm-6">
                                    <h5>State</h5>
                                    <h6>Lagos</h6>
                                  </div>
                                  <div className="col-sm-6 text-end">
                                    <button className="btn-save">Verify</button>
                                  </div>
                                </div>
                                <div className="row height d-flex justify-content-center align-items-center mt-4">
                                  <div className="search-">
                                    <input
                                      type="text"
                                      className="form-control"
                                      placeholder="Add Note"
                                    />
                                    <button className="btn btn-primary">
                                      Add
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="details-card pb-0">
                              <div className="bg-white p-4">
                                <div className="row">
                                  <div className="col-sm-6">
                                    <h5>LGA</h5>
                                    <h6>Lagos Island</h6>
                                  </div>
                                  <div className="col-sm-6 text-end">
                                    <button className="btn-save">Verify</button>
                                  </div>
                                </div>
                                <div className="row height d-flex justify-content-center align-items-center mt-4">
                                  <div className="search-">
                                    <input
                                      type="text"
                                      className="form-control"
                                      placeholder="Add Note"
                                    />
                                    <button className="btn btn-primary">
                                      Add
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="details-card">
                              <div className="bg-white p-4">
                                <div className="row justify-content-between">
                                  <div className="col-sm-6">
                                    <h5>Electricity Bill</h5>
                                    <img src={vc} alt="vc" className="img-fluid w-100" />
                                  </div>
                                  <div className="col-sm-3 mt-4">
                                    <Form className="modal-m">
                                      <Form.Group>
                                        <Form.Select aria-label="Default select example">
                                          <option>Select Status</option>
                                          <option value="1">Active</option>
                                          <option value="2">Inactive</option>
                                        </Form.Select>
                                      </Form.Group>
                                    </Form>
                                  </div>
                                </div>
                                <div className="row height d-flex justify-content-center align-items-center mt-4">
                                  <div className="search-">
                                    <input
                                      type="text"
                                      className="form-control"
                                      placeholder="Add Note"
                                    />
                                    <button className="btn btn-primary">
                                      Add
                                    </button>
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
  );
}

export default DetailCompliance;

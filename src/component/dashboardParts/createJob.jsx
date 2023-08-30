import SearchNotification from "./searchNotification";
import { Form } from "react-bootstrap";



export default function CreateJob() {
  return (
    <div className="content home">
      <SearchNotification />
      <div className="mt-5 row mx-5">
        <div className="col-sm-12 px-0">
          <div className="pending-loan">
            <div className="d-flex flex-row">
              <h5 className="me-3">Add New Jobs </h5>
            </div>
            <div className="d-flex flex-row justify-content-end">
              <button
                className="btn-save"
                style={{ marginTop: "-38px" }}
              >
                Post Job
              </button>
              <button
                className="btn-white ms-2"
                style={{ marginTop: "-38px" }}
              >
                Save As Draft
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-2 row mx-5">
        <div className="col-sm-12 px-0">
          <div className="bg-white p-4 view-loans">
          <div className="overview">
              <div className="row justify-content-center">
                <div className="col-sm-8">
                  <div className="details-card mt-3">
                    <div className="bg-white p-4">
                      <div className="row justify-content-start">
                        <div className="col-sm-12 loany">
                          <ul
                            className="nav nav-pills nav-fill"
                            id="pills-tab"
                            role="tablist"
                          >
                            <li
                              className="nav-item"
                              role="presentation"
                            >
                              <button
                                className="nav-link active"
                                id="pills-jt-tab"
                                data-bs-toggle="pill"
                                data-bs-target="#pills-jt"
                                type="button"
                                role="tab"
                                aria-controls="pills-jt"
                                aria-selected="true"
                              >
                                Job Title
                              </button>
                            </li>
                            <li
                              className="nav-item"
                              role="presentation"
                            >
                              <button
                                className="nav-link"
                                id="pills-desc-tab"
                                data-bs-toggle="pill"
                                data-bs-target="#pills-desc"
                                type="button"
                                role="tab"
                                aria-controls="pills-desc"
                                aria-selected="false"
                              >
                                Description
                              </button>
                            </li>
                            <li
                              className="nav-item"
                              role="presentation"
                            >
                              <button
                                className="nav-link"
                                id="pills-resp-tab"
                                data-bs-toggle="pill"
                                data-bs-target="#pills-resp"
                                type="button"
                                role="tab"
                                aria-controls="pills-resp"
                                aria-selected="false"
                              >
                                Responsibilities
                              </button>
                            </li>
                            <li
                              className="nav-item"
                              role="presentation"
                            >
                              <button
                                className="nav-link"
                                id="pills-skill-tab"
                                data-bs-toggle="pill"
                                data-bs-target="#pills-skill"
                                type="button"
                                role="tab"
                                aria-controls="pills-skill"
                                aria-selected="false"
                              >
                                Requirements and Skills
                              </button>
                            </li>
                            <li
                              className="nav-item"
                              role="presentation"
                            >
                              <button
                                className="nav-link"
                                id="pills-place-tab"
                                data-bs-toggle="pill"
                                data-bs-target="#pills-place"
                                type="button"
                                role="tab"
                                aria-controls="pills-place"
                                aria-selected="false"
                              >
                                Job Type/Work Place Type
                              </button>
                            </li>
                            <li
                              className="nav-item"
                              role="presentation"
                            >
                              <button
                                className="nav-link"
                                id="pills-question-tab"
                                data-bs-toggle="pill"
                                data-bs-target="#pills-question"
                                type="button"
                                role="tab"
                                aria-controls="pills-question"
                                aria-selected="false"
                              >
                                Application Questions
                              </button>
                            </li>
                            <li
                              className="nav-item"
                              role="presentation"
                            >
                              <button
                                className="nav-link"
                                id="pills-uploads-tab"
                                data-bs-toggle="pill"
                                data-bs-target="#pills-uploads"
                                type="button"
                                role="tab"
                                aria-controls="pills-uploads"
                                aria-selected="false"
                              >
                                Uploads
                              </button>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="row mt-5">
                        <div className="col-sm-12">
                          <div
                            class="tab-content"
                            id="pills-tabContent"
                          >
                            <div
                              class="tab-pane fade show active"
                              id="pills-jt"
                              role="tabpanel"
                              aria-labelledby="pills-jt-tab"
                              tabindex="0"
                            >
                              <div className="acc-details">
                                <div className="row">
                                  <div className="col">
                                    <div className="job-tab">
                                      <Form.Select aria-label="Default select example">
                                        <option>Choose Job Title</option>
                                        <option value="1">CEO</option>
                                        <option value="2">Web Developer</option>
                                        <option value="3">UI/UX</option>
                                      </Form.Select>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              class="tab-pane fade"
                              id="pills-desc"
                              role="tabpanel"
                              aria-labelledby="pills-desc-tab"
                              tabindex="0"
                            >
                              <div className="acc-details">
                                <div className="row">
                                  <div className="col">
                                    <div className="job-tab">
                                      <Form>
                                        <Form.Group className="mb-3">
                                          <Form.Control as="textarea" rows={5} placeholder="Enter Description" />
                                        </Form.Group>
                                      </Form>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              class="tab-pane fade"
                              id="pills-resp"
                              role="tabpanel"
                              aria-labelledby="pills-resp-tab"
                              tabindex="0"
                            >
                              <div className="acc-details">
                                <div className="row">
                                  <div className="col">
                                    <div className="job-tab">
                                      <Form>
                                        <Form.Group className="mb-3">
                                          <Form.Control as="textarea" rows={5} placeholder="Enter Responsibilities" />
                                        </Form.Group>
                                      </Form>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              class="tab-pane fade"
                              id="pills-skill"
                              role="tabpanel"
                              aria-labelledby="pills-skill-tab"
                              tabindex="0"
                            >
                              <div className="acc-details">
                                <div className="row">
                                  <div className="col">
                                    <div className="job-tab">
                                      <Form>
                                        <Form.Group className="mb-3">
                                          <Form.Control as="textarea" rows={5} placeholder="Enter Requirements and Skills" />
                                        </Form.Group>
                                      </Form>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              class="tab-pane fade"
                              id="pills-place"
                              role="tabpanel"
                              aria-labelledby="pills-place-tab"
                              tabindex="0"
                            >
                              <div className="acc-details">
                                <div className="row">
                                  <div className="col">
                                    <div className="job-tab">
                                      <Form.Select className="mb-3">
                                        <option>Job Type</option>
                                        <option value="1">CEO</option>
                                        <option value="2">Web Developer</option>
                                        <option value="3">UI/UX</option>
                                      </Form.Select>
                                      <Form.Select>
                                        <option>Work Place Type</option>
                                        <option value="1">CEO</option>
                                        <option value="2">Web Developer</option>
                                        <option value="3">UI/UX</option>
                                      </Form.Select>
                                      
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              class="tab-pane fade"
                              id="pills-question"
                              role="tabpanel"
                              aria-labelledby="pills-question-tab"
                              tabindex="0"
                            >
                              <div className="acc-details">
                                <div className="row">
                                  <div className="col">
                                    <div className="job-tab">
                                      <Form.Select className="">
                                        <option>Choose Question</option>
                                        <option value="1">First Name</option>
                                        <option value="2">Last Name</option>
                                        <option value="3">Email</option>
                                        <option value="4">Phone Number</option>
                                      </Form.Select>
                                      <div className="mb-4 forgot-p">
                                        <div className="form-check">
                                          <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                          <label className="form-check-label" htmlFor="flexCheckDefault">
                                            Compulsory
                                          </label>
                                        </div>
                                      </div>
                                      <Form.Select className="">
                                        <option>Choose Question</option>
                                        <option value="1">First Name</option>
                                        <option value="2">Last Name</option>
                                        <option value="3">Email</option>
                                        <option value="4">Phone Number</option>
                                      </Form.Select>
                                      <div className="mb-4 forgot-p">
                                        <div className="form-check">
                                          <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                          <label className="form-check-label" htmlFor="flexCheckDefault">
                                            Compulsory
                                          </label>
                                        </div>
                                      </div>
                                      <Form.Select className="">
                                        <option>Choose Question</option>
                                        <option value="1">First Name</option>
                                        <option value="2">Last Name</option>
                                        <option value="3">Email</option>
                                        <option value="4">Phone Number</option>
                                      </Form.Select>
                                      <div className="mb-4 forgot-p">
                                        <div className="form-check">
                                          <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                          <label className="form-check-label" htmlFor="flexCheckDefault">
                                            Compulsory
                                          </label>
                                        </div>
                                      </div>
                                      <Form.Select className="">
                                        <option>Choose Question</option>
                                        <option value="1">First Name</option>
                                        <option value="2">Last Name</option>
                                        <option value="3">Email</option>
                                        <option value="4">Phone Number</option>
                                      </Form.Select>
                                      <div className="mb-4 forgot-p">
                                        <div className="form-check">
                                          <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                          <label className="form-check-label" htmlFor="flexCheckDefault">
                                            Compulsory
                                          </label>
                                        </div>
                                      </div>
                                      <Form.Select className="">
                                        <option>Choose Question</option>
                                        <option value="1">First Name</option>
                                        <option value="2">Last Name</option>
                                        <option value="3">Email</option>
                                        <option value="4">Phone Number</option>
                                      </Form.Select>
                                      <div className="mb-4 forgot-p">
                                        <div className="form-check">
                                          <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                          <label className="form-check-label" htmlFor="flexCheckDefault">
                                            Compulsory
                                          </label>
                                        </div>
                                      </div>
                                      <Form.Select className="">
                                        <option>Choose Question</option>
                                        <option value="1">First Name</option>
                                        <option value="2">Last Name</option>
                                        <option value="3">Email</option>
                                        <option value="4">Phone Number</option>
                                      </Form.Select>
                                      <div className="mb-4 forgot-p">
                                        <div className="form-check">
                                          <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                          <label className="form-check-label" htmlFor="flexCheckDefault">
                                            Compulsory
                                          </label>
                                        </div>
                                      </div>
                                      <Form.Select className="">
                                        <option>Choose Question</option>
                                        <option value="1">First Name</option>
                                        <option value="2">Last Name</option>
                                        <option value="3">Email</option>
                                        <option value="4">Phone Number</option>
                                      </Form.Select>
                                      <div className="mb-4 forgot-p">
                                        <div className="form-check">
                                          <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                          <label className="form-check-label" htmlFor="flexCheckDefault">
                                            Compulsory
                                          </label>
                                        </div>
                                      </div>
                                      <Form.Select className="">
                                        <option>Choose Question</option>
                                        <option value="1">First Name</option>
                                        <option value="2">Last Name</option>
                                        <option value="3">Email</option>
                                        <option value="4">Phone Number</option>
                                      </Form.Select>
                                      <div className="mb-4 forgot-p">
                                        <div className="form-check">
                                          <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                          <label className="form-check-label" htmlFor="flexCheckDefault">
                                            Compulsory
                                          </label>
                                        </div>
                                      </div>
                                      
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              class="tab-pane fade"
                              id="pills-uploads"
                              role="tabpanel"
                              aria-labelledby="pills-uploads-tab"
                              tabindex="0"
                            >
                              <div className="acc-details">
                                <div className="row">
                                  <div className="col">
                                    <div className="job-tab">
                                      <Form.Select className="">
                                        <option>Choose Document</option>
                                        <option value="1">CEO</option>
                                        <option value="2">Web Developer</option>
                                        <option value="3">UI/UX</option>
                                      </Form.Select>
                                      <div className="mb-4 forgot-p">
                                        <div className="form-check">
                                          <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                          <label className="form-check-label" htmlFor="flexCheckDefault">
                                            Compulsory
                                          </label>
                                        </div>
                                      </div>
                                      <Form.Select>
                                        <option>Choose Document</option>
                                        <option value="1">CEO</option>
                                        <option value="2">Web Developer</option>
                                        <option value="3">UI/UX</option>
                                      </Form.Select>
                                      <div className="mb-4 forgot-p">
                                        <div className="form-check">
                                          <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                          <label className="form-check-label" htmlFor="flexCheckDefault">
                                            Compulsory
                                          </label>
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
      </div>
    </div>
  );
}

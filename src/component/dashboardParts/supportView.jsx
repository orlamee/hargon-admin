import SearchNotification from "./searchNotification";


export default function SupportView() {
  return (
    <div className="content home">
      <SearchNotification />
      <div className="mt-5 row mx-5">
        <div className="col-sm-12 px-0">
          <div className="pending-loan">
            <div className="d-flex flex-row">
              <h5 className="me-3">Support</h5>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-2 row mx-5">
        <div className="col-sm-12 px-0">
          <div className="bg-white p-4 view-loans">
            <div className="row justify-content-center mt-5">
              <div className="col-sm-2">
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
                        Pending
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
                        Resolved
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
                        <div className="col-sm-9">
                          <div className="details-card members">
                            <div className="bg-white p-4">
                              <table
                                className="table table-responsive"
                                style={{ width: "100%" }}
                                id="exa"
                              >
                                <thead className="bg-white rounded-pill">
                                  <tr>
                                    <th>Users</th>
                                    <th>Email</th>
                                    <th>Subject complain</th>
                                    <th>Action</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td>Michael Opara</td>
                                    <td>john@gmail.com</td>
                                    <td>Lorem ipsum dolor sit amet consectetur adipisicing elit.</td>
                                    <td>
                                      <div className="dropdown">
                                        <i
                                          className="bi bi-three-dots"
                                          data-bs-toggle="dropdown"
                                          aria-expanded="false"
                                        ></i>
                                        <ul class="dropdown-menu details">
                                          <li>
                                            <a className="dropdown-item" href="/support/view-complain">
                                              View
                                            </a>
                                          </li>
                                          <li>
                                            <a className="dropdown-item" href="/">
                                              Resolve
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>Michael Opara</td>
                                    <td>john@gmail.com</td>
                                    <td>Lorem ipsum dolor sit amet consectetur adipisicing elit.</td>
                                    <td>
                                      <div className="dropdown">
                                        <i
                                          className="bi bi-three-dots"
                                          data-bs-toggle="dropdown"
                                          aria-expanded="false"
                                        ></i>
                                        <ul class="dropdown-menu details">
                                          <li>
                                            <a className="dropdown-item" href="/support/view-complain">
                                              View
                                            </a>
                                          </li>
                                          <li>
                                            <a className="dropdown-item" href="/">
                                              Resolve
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>Michael Opara</td>
                                    <td>john@gmail.com</td>
                                    <td>Lorem ipsum dolor sit amet consectetur adipisicing elit.</td>
                                    <td>
                                      <div className="dropdown">
                                        <i
                                          className="bi bi-three-dots"
                                          data-bs-toggle="dropdown"
                                          aria-expanded="false"
                                        ></i>
                                        <ul class="dropdown-menu details">
                                          <li>
                                            <a className="dropdown-item" href="/support/view-complain">
                                              View 
                                            </a>
                                          </li>
                                          <li>
                                            <a className="dropdown-item" href="/">
                                              Resolve
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
                                id="exa"
                              >
                                <thead className="bg-white rounded-pill">
                                  <tr>
                                    <th>Users</th>
                                    <th>Email</th>
                                    <th>Subject complain</th>
                                    <th>Action</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td>Michael Opara</td>
                                    <td>john@gmail.com</td>
                                    <td>Lorem ipsum dolor sit amet consectetur adipisicing elit.</td>
                                    <td>
                                      <div className="dropdown">
                                        <i
                                          className="bi bi-three-dots"
                                          data-bs-toggle="dropdown"
                                          aria-expanded="false"
                                        ></i>
                                        <ul class="dropdown-menu details">
                                          <li>
                                            <a className="dropdown-item" href="/">
                                              View 
                                            </a>
                                          </li>
                                          <li>
                                            <a className="dropdown-item" href="/">
                                              Resolve
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


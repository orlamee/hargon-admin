import SearchNotification from "./searchNotification";
import avi from "../../assets/acc-user.svg";

function Account() {
  return (
    <div className="content home">
      <SearchNotification />
      <div className="mt-5 row mx-5">
        <div className="col-sm-12 px-0">
          <div className="pending-loan">
            <div className="d-flex flex-row">
              <h5 className="me-3">Account</h5>
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
                                <img src={avi} alt="user" className="img-fluid" style={{marginTop: "-27px"}}/>
                                <h6 className="my-3">Adebowale Franca</h6>
                                <span className="admin-badge">Admin</span>
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
                                    <th>User Role</th>
                                    <td>Master</td>
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
                                    <td style={{color: "#2563EB"}}>986.67.98.00</td>
                                    <td>Attended to a ticket opened by a customer</td>
                                  </tr>
                                  <tr>
                                    <td>15/06/2023</td>
                                    <td style={{color: "#2563EB"}}>986.67.98.00</td>
                                    <td>Attended to a ticket opened by a customer</td>
                                  </tr>
                                  <tr>
                                    <td>15/06/2021</td>
                                    <td style={{color: "#2563EB"}}>986.67.98.00</td>
                                    <td>Attended to a ticket opened by a customer</td>
                                  </tr>
                                  <tr>
                                    <td>15/06/2021</td>
                                    <td style={{color: "#2563EB"}}>986.67.98.00</td>
                                    <td>Attended to a ticket opened by a customer</td>
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

export default Account;

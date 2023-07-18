import SearchNotification from "./searchNotification";
import valid from "../../assets/validid.svg";
import back from "../../assets/back.svg";

function ViewDetails() {
  return (
    <div className="content home">
      <SearchNotification />
      <div className="mt-5 row mx-5">
        <div className="col-sm-12 px-0">
          <div className="bg-white p-4 view-loans">
            <a href="/all-loans">
              <i className="bi bi-chevron-left me-2"></i>Back
            </a>
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
                        Account details
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
                        Loan repayment schedule
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
                        Files
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
                        Collateral
                      </button>
                    </li>
                    <li class="nav-item" role="presentation">
                      <button
                        class="nav-link"
                        id="pills-j-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-j"
                        type="button"
                        role="tab"
                        aria-controls="pills-j"
                        aria-selected="false"
                      >
                        Guarantors
                      </button>
                    </li>
                    <li class="nav-item" role="presentation">
                      <button
                        class="nav-link"
                        id="pills-k-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-k"
                        type="button"
                        role="tab"
                        aria-controls="pills-k"
                        aria-selected="false"
                      >
                        Notes
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
                        <div className="col-sm-7">
                          <div className="details-card pb-0">
                            <div className="bg-white p-4">
                              <h3>Summary</h3>
                              <hr />
                              <div className="row">
                                <div className="col-sm-3 mb-3">
                                  <h5>Total balance</h5>
                                  <h6>₦10,000</h6>
                                </div>
                                <div className="col-sm-3 mb-3">
                                  <h5>Amount paid in</h5>
                                  <h6>₦10,000</h6>
                                </div>
                                <div className="col-sm-3 mb-3">
                                  <h5>Days in arrears</h5>
                                  <h6>0</h6>
                                </div>
                                <div className="col-sm-3 mb-3">
                                  <h5>Approval credit score</h5>
                                  <h6>100%</h6>
                                </div>
                              </div>
                              <div className="row mt-3">
                                <div className="col-sm-3 mb-3">
                                  <h5>Timely repayments rate</h5>
                                  <h6>90%</h6>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="details-card pb-0">
                            <div className="bg-white p-4">
                              <h3>Information</h3>
                              <hr />
                              <div className="row">
                                <div className="col-sm-3 mb-3">
                                  <h5>Status</h5>
                                  <h6><span className="approved">Approved</span></h6>
                                </div>
                                <div className="col-sm-3 mb-3">
                                  <h5>0909999</h5>
                                  <h6>09094003</h6>
                                </div>
                                <div className="col-sm-3 mb-3">
                                  <h5>Loan officer</h5>
                                  <h6 style={{color: "#FF823B"}}>Super Admin</h6>
                                </div>
                                <div className="col-sm-3 mb-3">
                                  <h5>Loan product</h5>
                                  <h6>Auto Loan</h6>
                                </div>
                              </div>
                              <div className="row mt-3">
                                <div className="col-sm-3 mb-3">
                                  <h5>Disbursed amount</h5>
                                  <h6>₦10,000</h6>
                                </div>
                                <div className="col-sm-3 mb-3">
                                  <h5>Loan term</h5>
                                  <h6>400 days</h6>
                                </div>
                                <div className="col-sm-3 mb-3">
                                  <h5>Repayments</h5>
                                  <h6 style={{color: "#228B22"}}>Every 30days</h6>
                                </div>
                                <div className="col-sm-3 mb-3">
                                  <h5>Interest</h5>
                                  <h6>20% p.m</h6>
                                </div>
                              </div>
                              <div className="row mt-3">
                                <div className="col-sm-3 mb-3">
                                  <h5>Date submitted</h5>
                                  <h6>18/04/2023</h6>
                                </div>
                                <div className="col-sm-3 mb-3">
                                  <h5>Approved date</h5>
                                  <h6>18/04/2023</h6>
                                </div>
                                <div className="col-sm-3 mb-3">
                                  <h5>Disbursed date</h5>
                                  <h6>18/04/2023</h6>
                                </div>
                                <div className="col-sm-3 mb-3">
                                  <h5>Maturity date</h5>
                                  <h6>18/04/2023</h6>
                                </div>
                              </div>
                              <div className="row mt-3">
                                <div className="col-sm-3 mb-3">
                                  <h5>Fund</h5>
                                  <h6>Stackivy Bank</h6>
                                </div>
                                <div className="col-sm-3 mb-3">
                                  <h5>Applied amount</h5>
                                  <h6>₦10,000</h6>
                                </div>
                                <div className="col-sm-3 mb-3">
                                  <h5>Topup amount</h5>
                                  <h6>₦10,000</h6>
                                </div>
                                <div className="col-sm-3 mb-3">
                                  <h5>Approved amount</h5>
                                  <h6>80%</h6>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="details-card">
                            <div className="bg-white p-4">
                              <h3>Performance History</h3>
                              <hr />
                              <div className="row">
                                <div className="col-sm-3 mb-3">
                                  <h5>Repayments</h5>
                                  <h6>30 of 30</h6>
                                </div>
                                <div className="col-sm-3 mb-3">
                                  <h5>Loan standing</h5>
                                  <h6>In good standing</h6>
                                </div>
                                <div className="col-sm-3 mb-3">
                                  <h5>Days in arrears</h5>
                                  <h6>0</h6>
                                </div>
                                <div className="col-sm-3 mb-3">
                                  <h5>Approval credit score</h5>
                                  <h6>100%</h6>
                                </div>
                              </div>
                              <div className="row mt-3">
                                <div className="col-sm-3 mb-3">
                                  <h5>Timely repayments rate</h5>
                                  <h6>90%</h6>
                                </div>
                                <div className="col-sm-3 mb-3">
                                  <h5>Rate</h5>
                                  <h6>90%</h6>
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
                    <div className="loan-repay">
                    <div
                        className="row members bg-white"
                        style={{ borderRadius: "0 0 20px 20px" }}
                      >
                        <div className="col">
                          <table
                            className="table table-responsive"
                            style={{ width: "100%" }}
                            id="example"
                          >
                            <thead className="bg-white rounded-pill">
                              <tr>
                                <th>Date</th>
                                <th>Days</th>
                                <th>Paid by</th>
                                <th>Disbursement</th>
                                <th>Principal due</th>
                                <th>Principal balance</th>
                                <th>Interest due</th>
                                <th>Fees</th>
                                <th>Penalties</th>
                                <th>Total due</th>
                                <th>Total paid</th>
                                <th>Total outstanding</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>15/06/2023</td>
                                <td>30</td>
                                <td>Ade Ola</td>
                                <td>Level 1</td>
                                <td>₦10,000</td>
                                <td>₦10,000</td>
                                <td>₦10,000</td>
                                <td>₦10,000</td>
                                <td>5%</td>
                                <td>₦10,000</td>
                                <td>₦10,000,000</td>
                                <td>₦10,000</td>
                              </tr>
                              <tr>
                                <td>15/06/2023</td>
                                <td>30</td>
                                <td>Ade Ola</td>
                                <td>Level 1</td>
                                <td>₦10,000</td>
                                <td>₦10,000</td>
                                <td>₦10,000</td>
                                <td>₦10,000</td>
                                <td>5%</td>
                                <td>₦10,000</td>
                                <td>₦10,000,000</td>
                                <td>₦10,000</td>
                              </tr>
                              <tr>
                                <td>15/06/2023</td>
                                <td>30</td>
                                <td>Ade Ola</td>
                                <td>Level 1</td>
                                <td>₦10,000</td>
                                <td>₦10,000</td>
                                <td>₦10,000</td>
                                <td>₦10,000</td>
                                <td>5%</td>
                                <td>₦10,000</td>
                                <td>₦10,000,000</td>
                                <td>₦10,000</td>
                              </tr>
                              <tr>
                                <td>15/06/2023</td>
                                <td>30</td>
                                <td>Ade Ola</td>
                                <td>Level 1</td>
                                <td>₦10,000</td>
                                <td>₦10,000</td>
                                <td>₦10,000</td>
                                <td>₦10,000</td>
                                <td>5%</td>
                                <td>₦10,000</td>
                                <td>₦10,000,000</td>
                                <td>₦10,000</td>
                              </tr>
                              <tr>
                                <td>15/06/2023</td>
                                <td>30</td>
                                <td>Ade Kola</td>
                                <td>Level 1</td>
                                <td>₦10,000</td>
                                <td>₦10,000</td>
                                <td>₦10,000</td>
                                <td>₦10,000</td>
                                <td>5%</td>
                                <td>₦10,000</td>
                                <td>₦10,000,000</td>
                                <td>₦10,000</td>
                              </tr>
                              <tr>
                                <td>15/06/2023</td>
                                <td>30</td>
                                <td>Shabi</td>
                                <td>Level 1</td>
                                <td>₦10,000</td>
                                <td>₦100,000</td>
                                <td>₦10,000</td>
                                <td>₦10,000</td>
                                <td>50%</td>
                                <td>₦10,000</td>
                                <td>₦10,000,000</td>
                                <td>₦10,000</td>
                              </tr>
                            </tbody>
                          </table>
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
                    <div className="collateral">
                      <div className="row justify-content-center">
                        <div className="col-sm-7">
                          <div className="details-card">
                            <div className="bg-white p-4">
                              <h3>Collateral Details</h3>
                              <hr />
                              <div className="row">
                                <div className="col-sm-3 mb-3">
                                  <h5>Name</h5>
                                  <h6>Collateral</h6>
                                </div>
                                <div className="col-sm-3 mb-3">
                                  <h5>Type</h5>
                                  <h6>Collateral</h6>
                                </div>
                                <div className="col-sm-3 mb-3">
                                  <h5>Collateral Possessed</h5>
                                  <h6>NO</h6>
                                </div>
                                <div className="col-sm-3 mb-3">
                                  <h5>Approval credit score</h5>
                                  <h6>100%</h6>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-sm-3 mb-3">
                                  <h5>Timely repayments rate</h5>
                                  <h6>100%</h6>
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
                    <div className="files">
                      <div className="row justify-content-center">
                        <div className="col-sm-5">
                          <div className="details-card">
                            <div className="bg-white px-5 py-4">
                              <div>
                                <h3>Valid ID</h3>
                                <img src={valid} alt="id" className="img-fluid w-100" />
                              </div>
                              <div className="mt-4">
                                <h3>Valid ID</h3>
                                <img src={back} alt="id" className="img-fluid w-100" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="pills-j"
                    role="tabpanel"
                    aria-labelledby="pills-j-tab"
                    tabIndex="0"
                  >
                    <div className="guarantor">
                      <div className="row justify-content-center">
                        <div className="col-sm-7">
                          <div className="details-card pb-0">
                            <div className="bg-white p-4">
                              <h3>Guarantor Details</h3>
                              <hr />
                              <div className="row">
                                <div className="col-sm-4 mb-3">
                                  <h5>Name</h5>
                                  <h6>Victoria Beckham</h6>
                                </div>
                                <div className="col-sm-4 mb-3">
                                  <h5>Relationship</h5>
                                  <h6>Wife</h6>
                                </div>
                                <div className="col-sm-4 mb-3">
                                  <h5>Phone number</h5>
                                  <h6>+234 867 876 7593</h6>
                                </div>
                              </div>
                              <div className="row mt-3">
                                <div className="col-sm-4 mb-3">
                                  <h5>Address</h5>
                                  <h6>2, Adebowale street, Ikeja, Lagos state. Nigeria</h6>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="details-card">
                            <div className="bg-white p-4">
                              <h3>Information</h3>
                              <hr />
                              <div className="row">
                                <div className="col-sm-4 mb-3">
                                  <h5>Name</h5>
                                  <h6>Victoria Beckham</h6>
                                </div>
                                <div className="col-sm-4 mb-3">
                                  <h5>Relationship</h5>
                                  <h6>Wife</h6>
                                </div>
                                <div className="col-sm-4 mb-3">
                                  <h5>Pnone number</h5>
                                  <h6>+234 867 876 7593</h6>
                                </div>
                              </div>
                              <div className="row mt-3">
                                <div className="col-sm-4 mb-3">
                                  <h5>Address</h5>
                                  <h6>2, Adebowale street, Ikeja, Lagos state. Nigeria</h6>
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
                    id="pills-k"
                    role="tabpanel"
                    aria-labelledby="pills-k-tab"
                    tabIndex="0"
                  >
                    <div className="notes">
                      <div className="row justify-content-center">
                        <div className="col-sm-7">
                          <div className="details-card">
                            <div className="bg-white p-4">
                              <h3>Notes</h3>
                              <hr />
                              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam aliquid error veniam optio porro voluptate! Provident excepturi beatae ad error quis nisi sapiente, numquam necessitatibus natus optio, aperiam id. Nostrum?</p>
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

export default ViewDetails;

import SearchNotification from "./searchNotification";
import pie from "../../assets/pie.svg"
import cs from "../../assets/cd.svg"
import ls from "../../assets/ls.svg"
import bs from "../../assets/bs.svg"
import slip from "../../assets/slip.svg"


function DecisionView() {
  return (
    <div className="content home">
      <SearchNotification />
      <div className="mt-5 row mx-5">
        <div className="col-sm-12 px-0">
          <div className="pending-loan">
            <div className="d-flex flex-row">
              <h5 className="me-3"><a href="/decision-sharing"><i className="bi bi-chevron-left me-2" style={{color: "#228B22"}}></i></a>Scoring</h5>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-2 row mx-5">
        <div className="col-sm-12 px-0">
          <div className="bg-white p-4 view-loans">
            <div className="row justify-content-center mt-5">
              <div className="col-sm-6">
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
                        Credit Score
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
                        Level Scores
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
                        Bank Statement
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
                        Total Score
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
                        <div className="col-sm-6">
                          <div className="details-card">
                            <div className="bg-white p-4 text-center">
                              <img src={pie} alt="pie" className="img-fluid mb-4" />
                              <h6>Credit score is <span className="approved ms-2">Excellent</span></h6>
                              <h5 className="mt-4 mb-5">Last check on April 21, 2023</h5>
                              <span className="bg-ref">Refresh Score <i className="bi bi-arrow-clockwise ms-2"></i></span>
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
                    <div className="row justify-content-center">
                      <div className="col-sm-4 loany">
                        <ul className="nav nav-pills  nav-justified" id="pills-tab" role="tablist">
                          <li className="nav-item" role="presentation">
                            <button className="nav-link active" id="pills-loan-tab" data-bs-toggle="pill" data-bs-target="#pills-loan" type="button" role="tab" aria-controls="pills-loan" aria-selected="true">Level Score 1</button>
                          </li>
                          <li className="nav-item" role="presentation">
                            <button className="nav-link" id="pills-savings-tab" data-bs-toggle="pill" data-bs-target="#pills-savings" type="button" role="tab" aria-controls="pills-saving" aria-selected="false">Level Score 2</button>
                          </li>
                          <li className="nav-item" role="presentation">
                            <button className="nav-link" id="pills-q-tab" data-bs-toggle="pill" data-bs-target="#pills-q" type="button" role="tab" aria-controls="pills-q" aria-selected="false">Level Score 3</button>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="row mt-3">
                      <div className="col-sm-12">
                        <div class="tab-content" id="pills-tabContent">
                          <div class="tab-pane fade show active" id="pills-loan" role="tabpanel" aria-labelledby="pills-loan-tab" tabindex="0">
                            <div className="overview">
                              <div className="row justify-content-center">
                                <div className="col-sm-5">
                                  <div className="details-card">
                                    <div className="bg-white p-4">
                                      <div className="score-head">
                                        <h4>Title</h4>
                                        <h4 className="text-end" style={{marginTop: "-23px"}}>Score</h4>
                                      </div>
                                      <table className="table overview-table mt-3">
                                        <tbody>
                                          <tr>
                                            <th>Age</th>
                                            <td>10</td>
                                          </tr>
                                          <tr>
                                            <th>Gender</th>
                                            <td>0</td>
                                          </tr>
                                          <tr>
                                            <th>Location</th>
                                            <td>0</td>
                                          </tr>
                                          <tr>
                                            <th>Tier</th>
                                            <td>0</td>
                                          </tr>
                                          <tr>
                                            <th>Marital status</th>
                                            <td>0</td>
                                          </tr>
                                          <tr>
                                            <th>Employer category</th>
                                            <td>0</td>
                                          </tr>
                                          <tr>
                                            <th>Employment status</th>
                                            <td>0</td>
                                          </tr>
                                          <tr>
                                            <th>Residence type</th>
                                            <td>0</td>
                                          </tr>
                                          <tr>
                                            <th>Monthly net income</th>
                                            <td>0</td>
                                          </tr>
                                          <tr>
                                            <th>Number of dependant</th>
                                            <td>0</td>
                                          </tr>
                                          <tr>
                                            <th>Time with current employer</th>
                                            <td>0</td>
                                          </tr>
                                          <tr>
                                            <th>Educational attainment</th>
                                            <td>0</td>
                                          </tr>
                                          <tr>
                                            <th className="text-black fs-6">Total Score</th>
                                            <td className="fs-4">100</td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="tab-pane fade" id="pills-savings" role="tabpanel" aria-labelledby="pills-savings-tab" tabindex="0">
                            <div className="overview">
                              <div className="row justify-content-center">
                                <div className="col-sm-5">
                                  <div className="details-card">
                                    <div className="bg-white p-4">
                                      <div className="score-head">
                                        <h4>Title</h4>
                                        <h4 className="text-end" style={{marginTop: "-23px"}}>Score</h4>
                                      </div>
                                      <table className="table overview-table mt-3">
                                        <tbody>
                                          <tr>
                                            <th>Age</th>
                                            <td>10</td>
                                          </tr>
                                          <tr>
                                            <th>Gender</th>
                                            <td>0</td>
                                          </tr>
                                          <tr>
                                            <th>Location</th>
                                            <td>0</td>
                                          </tr>
                                          <tr>
                                            <th>Tier</th>
                                            <td>0</td>
                                          </tr>
                                          <tr>
                                            <th>Marital status</th>
                                            <td>0</td>
                                          </tr>
                                          <tr>
                                            <th>Employer category</th>
                                            <td>0</td>
                                          </tr>
                                          <tr>
                                            <th>Employment status</th>
                                            <td>0</td>
                                          </tr>
                                          <tr>
                                            <th>Residence type</th>
                                            <td>0</td>
                                          </tr>
                                          <tr>
                                            <th>Monthly net income</th>
                                            <td>0</td>
                                          </tr>
                                          <tr>
                                            <th>Number of dependant</th>
                                            <td>0</td>
                                          </tr>
                                          <tr>
                                            <th>Time with current employer</th>
                                            <td>0</td>
                                          </tr>
                                          <tr>
                                            <th>Educational attainment</th>
                                            <td>0</td>
                                          </tr>
                                          <tr>
                                            <th className="text-black fs-6">Total Score</th>
                                            <td className="fs-4">100</td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="tab-pane fade" id="pills-q" role="tabpanel" aria-labelledby="pills-q-tab" tabindex="0">
                            <div className="overview">
                              <div className="row justify-content-center">
                                <div className="col-sm-5">
                                  <div className="details-card">
                                    <div className="bg-white p-4">
                                    <div className="score-head">
                                        <h4>Title</h4>
                                        <h4 className="text-end" style={{marginTop: "-23px"}}>Score</h4>
                                      </div>
                                      <table className="table overview-table mt-3">
                                        <tbody>
                                          <tr>
                                            <th>Age</th>
                                            <td>10</td>
                                          </tr>
                                          <tr>
                                            <th>Gender</th>
                                            <td>0</td>
                                          </tr>
                                          <tr>
                                            <th>Location</th>
                                            <td>0</td>
                                          </tr>
                                          <tr>
                                            <th>Tier</th>
                                            <td>0</td>
                                          </tr>
                                          <tr>
                                            <th>Marital status</th>
                                            <td>0</td>
                                          </tr>
                                          <tr>
                                            <th>Employer category</th>
                                            <td>0</td>
                                          </tr>
                                          <tr>
                                            <th>Employment status</th>
                                            <td>0</td>
                                          </tr>
                                          <tr>
                                            <th>Residence type</th>
                                            <td>0</td>
                                          </tr>
                                          <tr>
                                            <th>Monthly net income</th>
                                            <td>0</td>
                                          </tr>
                                          <tr>
                                            <th>Number of dependant</th>
                                            <td>0</td>
                                          </tr>
                                          <tr>
                                            <th>Time with current employer</th>
                                            <td>0</td>
                                          </tr>
                                          <tr>
                                            <th>Educational attainment</th>
                                            <td>0</td>
                                          </tr>
                                          <tr>
                                            <th className="text-black fs-6">Total Score</th>
                                            <td className="fs-4">100</td>
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
                  <div
                    className="tab-pane fade"
                    id="pills-h"
                    role="tabpanel"
                    aria-labelledby="pills-h-tab"
                    tabIndex="0"
                  >
                    <div className="overview">
                      <div className="row justify-content-center">
                        <div className="col-sm-6">
                          <div className="details-card">
                            <div className="bg-white p-4">
                              <div className="slips text-center">
                                <img src={slip} alt="slip" className="img-fluid" />
                                <h5 className="my-4">Download bank statement</h5>
                                <p>Download the bank statement of this customer with the<br/>download button below to calculate their credit score</p>
                                <button className="btn-save mt-3 mb-4">Download Bank Statement</button>
                              </div>
                              <hr />
                              <div className="text-center c-s">
                                <h4>Credit Score</h4>
                                <h1>100</h1>
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
                    <div className="overview">
                      <div className="row justify-content-center">
                        <div className="col-sm-5">
                          <div className="details-card pb-0">
                            <div className="bg-white p-4">
                              <table className="table overview-table">
                                <tbody>
                                  <tr>
                                    <th><span className="text-dark"><img src={cs} alt="cs" className="img-fluid me-2"/> Credit Score</span></th>
                                    <td>700</td>
                                  </tr>
                                  <tr>
                                    <th><span className="text-dark"><img src={ls} alt="ls" className="img-fluid me-2"/> Level Scores</span></th>
                                    <td>700</td>
                                  </tr>
                                  <tr>
                                    <th><span className="text-dark"><img src={bs} alt="bs" className="img-fluid me-2"/> Bank Statement</span></th>
                                    <td>300</td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                          <div className="details-card">
                            <div className="bg-white p-4">
                              <table className="table overview-table">
                                <tbody>
                                  <tr>
                                    <th><span className="text-dark fs-6">Total Scores</span></th>
                                    <td><span className="fs-4" style={{color: "#FF823B"}}>700</span></td>
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

export default DecisionView;

import { Link } from "react-router-dom";
import SearchNotification from "./searchNotification";


function ComplianceTable() {
  return (
    <div className="content home">
      <SearchNotification />
      <div className="mt-5 row mx-5">
        <div className="col-sm-12 px-0">
          <div className="pending-loan">
            <div className="d-flex flex-row">
              <h5 className="me-3">Check and Compliance</h5>
            </div>
          </div>
        </div>
      </div>
      <div
        className="row mt-2 mx-5 members bg-white py-5 px-2"
        style={{ borderRadius: "0 0 20px 20px" }}
      >
        <div className="col">
          <table
            className="table table-responsive"
            style={{ width: "100%" }}
            id="application"
          >
            <thead className="bg-white rounded-pill">
              <tr>
                <th>Customer ID</th>
                <th>Customer Type</th>
                <th>Loan officer</th>
                <th>Requested</th>
                <th>Progress</th>
                <th>Status</th>
                <th>Products</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>#11-22</td>
                <td>Merchant</td>
                <td>Kola Daisi</td>
                <td>₦10,000</td>
                <td><Link data-bs-toggle="modal" data-bs-target="#view-progress"><span style={{color: "#228B22"}}>View Progress</span></Link></td>
                <td>
                  <span className="approved">Approved</span>
                </td>
                <td>Auto loan</td>
                <td>
                  <div className="dropdown">
                    <i
                      className="bi bi-three-dots"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    ></i>
                    <ul class="dropdown-menu details">
                      <li>
                        <a className="dropdown-item" href="/compliance/details">
                          View details
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/">
                          Send to Finance
                        </a>
                      </li>
                    </ul>
                  </div>
                </td>
              </tr>
              <tr>
                <td>#11-22</td>
                <td>Agent</td>
                <td>John Doe</td>
                <td>₦10,000</td>
                <td><Link data-bs-toggle="modal" data-bs-target="#view-progress"><span style={{color: "#228B22"}}>View Progress</span></Link></td>
                <td>
                  <span className="approved">Successful</span>
                </td>
                <td>Auto loan</td>
                <td>
                  <div className="dropdown">
                    <i
                      className="bi bi-three-dots"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    ></i>
                    <ul class="dropdown-menu details">
                      <li>
                        <a className="dropdown-item" href="/compliance/details">
                          View details
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/">
                          Send to Finance
                        </a>
                      </li>
                    </ul>
                  </div>
                </td>
              </tr>
              <tr>
                <td>#11-20</td>
                <td>Agent</td>
                <td>Jane Doe</td>
                <td>₦10,000</td>
                <td><Link data-bs-toggle="modal" data-bs-target="#view-progress"><span style={{color: "#228B22"}}>View Progress</span></Link></td>
                <td>
                  <span className="awaiting">Pending</span>
                </td>
                <td>Auto loan</td>
                <td>
                  <div className="dropdown">
                    <i
                      className="bi bi-three-dots"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    ></i>
                    <ul class="dropdown-menu details">
                      <li>
                        <a className="dropdown-item" href="/compliance/details">
                          View details
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/">
                          Send to Finance
                        </a>
                      </li>
                    </ul>
                  </div>
                </td>
              </tr>
              <tr>
                <td>#11-22</td>
                <td>Agent</td>
                <td>Jane Doe</td>
                <td>₦10,000,000</td>
                <td><Link data-bs-toggle="modal" data-bs-target="#view-progress"><span style={{color: "#228B22"}}>View Progress</span></Link></td>
                <td>
                  <span className="withdrawn">Expired</span>
                </td>
                <td>Auto loan</td>
                <td>
                  <div className="dropdown">
                    <i
                      className="bi bi-three-dots"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    ></i>
                    <ul className="dropdown-menu details">
                      <li>
                        <a className="dropdown-item" href="/compliance/details">
                          View details
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/">
                          Send to Finance
                        </a>
                      </li>
                    </ul>
                  </div>
                </td>
              </tr>
              <tr>
                <td>#11-22</td>
                <td>Agent</td>
                <td>Jane Doe</td>
                <td>₦10,000,000</td>
                <td><span style={{color: "#228B22"}}>View Progress</span></td>
                <td>
                  <span className="withdrawn">Expired</span>
                </td>
                <td>Auto loan</td>
                <td>
                  <div className="dropdown">
                    <i
                      className="bi bi-three-dots"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    ></i>
                    <ul className="dropdown-menu details">
                      <li>
                        <a className="dropdown-item" href="/compliance/details">
                          View details
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/">
                          Send to Finance
                        </a>
                      </li>
                    </ul>
                  </div>
                </td>
              </tr>
              <tr>
                <td>#11-22</td>
                <td>Company</td>
                <td>Bola Doe</td>
                <td>₦10,000,000</td>
                <td><span style={{color: "#228B22"}}>View Progress</span></td>
                <td>
                  <span className="approved">Approved</span>
                </td>
                <td>Auto loan</td>
                <td>
                  <div className="dropdown">
                    <i
                      className="bi bi-three-dots"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    ></i>
                    <ul class="dropdown-menu details">
                      <li>
                        <a className="dropdown-item" href="/compliance/details">
                          View details
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/">
                          Send to Finance
                        </a>
                      </li>
                    </ul>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* View Progress */}
        <div className="modal fade vprogress" id="view-progress" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <div className="row mb-3">
                  <div className="col-sm-6 mb-2">
                    <h6>Total documents rejected</h6>
                    <h1 style={{color: "#FF0606"}}>50</h1>
                  </div>
                  <div className="col-sm-6 mb-2">
                    <h6>Total documents verified</h6>
                    <h1 style={{color: "#FACC15"}}>50</h1>
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-sm-6 mb-2">
                    <h6>Total documents approved</h6>
                    <h1 style={{color: "#228B22"}}>50</h1>
                  </div>
                  <div className="col-sm-6 mb-2">
                    <h6>Total documents pending</h6>
                    <h1 style={{color: "#FF823B"}}>50</h1>
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

export default ComplianceTable;

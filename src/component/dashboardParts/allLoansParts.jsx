import SearchNotification from "./searchNotification";

function AllLoansParts() {
  return (
    <div className="content home">
      <SearchNotification />
      <div className="mt-5 row mx-5">
        <div className="col-sm-12 px-0">
          <div className="pending-loan">
            <div className="d-flex flex-row">
              <h5 className="me-3">You have loans to approve</h5>
              <span className="xxx">View pending loans</span>
            </div>
          </div>
        </div>
      </div>
      <div
        className="row mt-5 mx-5 members bg-white py-5 px-2"
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
                <th>Action</th>
                <th>ID</th>
                <th>Loan officer</th>
                <th>Client type</th>
                <th>Principal</th>
                <th>Balance</th>
                <th>Disbursed date</th>
                <th>Product</th>
                <th>Interest rate</th>
                <th>Current amount date</th>
                <th>Total amount paid</th>
                <th>Last repayment date</th>
                <th>Status</th>
                <th>Maturity date</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div className="dropdown">
                    <i
                      className="bi bi-three-dots"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    ></i>
                    <ul class="dropdown-menu details">
                      <li>
                        <a className="dropdown-item" href="/all-loans/details">
                          View Details
                        </a>
                      </li>
                    </ul>
                  </div>
                </td>
                <td>#11-22</td>
                <td>Ade Ola</td>
                <td>Level 1</td>
                <td>₦10,000</td>
                <td>₦10,000,</td>
                <td>15/06/2023</td>
                <td>Auto loan</td>
                <td>5%</td>
                <td>15/06/2023</td>
                <td>₦10,000,000</td>
                <td>15/06/2023</td>
                <td>
                  <span className="approved">Approved</span>
                </td>
                <td>15/06/2023</td>
              </tr>
              <tr>
                <td>
                  <div className="dropdown">
                    <i
                      className="bi bi-three-dots"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    ></i>
                    <ul class="dropdown-menu details">
                      <li>
                        <a className="dropdown-item" href="/all-loans/details">
                          View Details
                        </a>
                      </li>
                    </ul>
                  </div>
                </td>
                <td>#11-22</td>
                <td>Obasanjo Atiku</td>
                <td>Level 1</td>
                <td>₦10,000</td>
                <td>₦10,000,</td>
                <td>15/06/2023</td>
                <td>Auto loan</td>
                <td>5%</td>
                <td>15/06/2023</td>
                <td>₦10,000,000</td>
                <td>15/06/2023</td>
                <td>
                  <span className="disbursed">Disbursed</span>
                </td>
                <td>15/06/2023</td>
              </tr>
              <tr>
                <td>
                  <div className="dropdown">
                    <i
                      className="bi bi-three-dots"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    ></i>
                    <ul class="dropdown-menu details">
                      <li>
                        <a className="dropdown-item" href="/all-loans/details">
                          View Details
                        </a>
                      </li>
                    </ul>
                  </div>
                </td>
                <td>#11-22</td>
                <td>Ugbor Faith</td>
                <td>Level 1</td>
                <td>₦10,000</td>
                <td>₦10,000,</td>
                <td>15/06/2023</td>
                <td>Auto loan</td>
                <td>5%</td>
                <td>15/06/2023</td>
                <td>₦10,000,000</td>
                <td>15/06/2023</td>
                <td>
                  <span className="withdrawn">Withdrawn</span>
                </td>
                <td>15/06/2023</td>
              </tr>
              <tr>
                <td>
                  <div className="dropdown">
                    <i
                      className="bi bi-three-dots"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    ></i>
                    <ul class="dropdown-menu details">
                      <li>
                        <a className="dropdown-item" href="/all-loans/details">
                          View Details
                        </a>
                      </li>
                    </ul>
                  </div>
                </td>
                <td>#11-22</td>
                <td>Elon Musk</td>
                <td>Level 1</td>
                <td>₦10,000</td>
                <td>₦10,000,</td>
                <td>15/06/2023</td>
                <td>Auto loan</td>
                <td>5%</td>
                <td>15/06/2023</td>
                <td>₦10,000,000</td>
                <td>15/06/2023</td>
                <td>
                  <span className="awaiting">Awaiting</span>
                </td>
                <td>15/06/2023</td>
              </tr>
              <tr>
                <td>
                  <div className="dropdown">
                    <i
                      className="bi bi-three-dots"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    ></i>
                    <ul class="dropdown-menu details">
                      <li>
                        <a className="dropdown-item" href="/all-loans/details">
                          View Details
                        </a>
                      </li>
                    </ul>
                  </div>
                </td>
                <td>#11-22</td>
                <td>John Doe</td>
                <td>Level 7</td>
                <td>₦10,000</td>
                <td>₦10,000,</td>
                <td>15/06/2023</td>
                <td>Auto loan</td>
                <td>5%</td>
                <td>15/06/2023</td>
                <td>₦10,000,000</td>
                <td>15/06/2023</td>
                <td>
                  <span className="approved">In good standing</span>
                </td>
                <td>15/06/2023</td>
              </tr>
              <tr>
                <td>
                  <div className="dropdown">
                    <i
                      className="bi bi-three-dots"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    ></i>
                    <ul class="dropdown-menu details">
                      <li>
                        <a className="dropdown-item" href="/all-loans/details">
                          View Details
                        </a>
                      </li>
                    </ul>
                  </div>
                </td>
                <td>#11-22</td>
                <td>John Doe</td>
                <td>Level 7</td>
                <td>₦10,000</td>
                <td>₦10,000,</td>
                <td>15/06/2023</td>
                <td>Auto loan</td>
                <td>5%</td>
                <td>15/06/2023</td>
                <td>₦10,000,000</td>
                <td>15/06/2023</td>
                <td>
                  <span className="withdrawn">Closed</span>
                </td>
                <td>15/06/2023</td>
              </tr>
              <tr>
                <td>
                  <div className="dropdown">
                    <i
                      className="bi bi-three-dots"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    ></i>
                    <ul class="dropdown-menu details">
                      <li>
                        <a className="dropdown-item" href="/all-loans/details">
                          View Details
                        </a>
                      </li>
                    </ul>
                  </div>
                </td>
                <td>#11-22</td>
                <td>John Doe</td>
                <td>Level 7</td>
                <td>₦10,000</td>
                <td>₦10,000,</td>
                <td>15/06/2023</td>
                <td>Auto loan</td>
                <td>5%</td>
                <td>15/06/2023</td>
                <td>₦10,000,000</td>
                <td>15/06/2023</td>
                <td>
                  <span className="activ">Active</span>
                </td>
                <td>15/06/2023</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default AllLoansParts;

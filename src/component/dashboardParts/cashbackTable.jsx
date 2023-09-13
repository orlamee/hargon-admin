import SearchNotification from "./searchNotification";
import { Link } from "react-router-dom";

function CashBackTable() {
  return (
    <div className="content home">
      <SearchNotification />
      <div className="mt-5 row mx-5">
        <div className="col-sm-12 px-0">
          <div className="pending-loan">
            <div className="d-flex flex-row">
              <h5 className="me-3">Cashback</h5>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-5 mx-5">
        <div className="col-sm-4 mb-3">
          <div className="report-card">
            <h3>Total cashback given</h3>
            <h6 className="mt-3 text-black">0</h6>
          </div>
        </div>
        <div className="col-sm-4 mb-3">
          <div className="report-card">
            <h3>Claimed cashbacks</h3>
            <h6 className="mt-3 text-black">0</h6>
          </div>
        </div>
        <div className="col-sm-4 mb-3">
          <div className="report-card">
            <h3>Unclaimed cashbacks</h3>
            <h6 className="mt-3 text-black">0</h6>
          </div>
        </div>
      </div>
      <div className="mt-5 row mx-5">
        <div className="col-sm-12 px-0">
          <div className="pending-loan">
            <div className="d-flex flex-row">
              <h5 className="me-3">All Transactions </h5>
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
            id="example"
          >
            <thead className="bg-white rounded-pill">
              <tr>
                <th>KodHex</th>
                <th>Transaction ID</th>
                <th>Transaction Amount</th>
                <th>Cashback Amount</th>
                <th>Cashback Amount</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  {"<"}Bola{"/>"}
                </td>
                <td>221345685647477686</td>
                <td>10,000</td>
                <td>10,000</td>
                <td>Electricity</td>
                <td>
                  <span className="approved">Claimed</span>
                </td>
                <td>
                  <Link className="claimed">Claim</Link>
                </td>
              </tr>
              <tr>
                <td>
                  {"<"}Bola{"/>"}
                </td>
                <td>221345685647477686</td>
                <td>10,000</td>
                <td>10,000</td>
                <td>Electricity</td>
                <td>
                  <span className="not-claim">Not Claimed</span>
                </td>
                <td>
                  <Link
                    className="claim"
                    data-bs-toggle="modal"
                    data-bs-target="#claim"
                  >
                    Claim
                  </Link>
                </td>
              </tr>
              <tr>
                <td>
                  {"<"}Bola{"/>"}
                </td>
                <td>221345685647477686</td>
                <td>10,000</td>
                <td>10,000</td>
                <td>Electricity</td>
                <td>
                  <span className="not-claim">Not Claimed</span>
                </td>
                <td>
                  <Link
                    className="claim"
                    data-bs-toggle="modal"
                    data-bs-target="#claim"
                  >
                    Claim
                  </Link>
                </td>
              </tr>
              <tr>
                <td>
                  {"<"}Bola{"/>"}
                </td>
                <td>221345685647477686</td>
                <td>10,000</td>
                <td>10,000</td>
                <td>Electricity</td>
                <td>
                  <span className="not-claim">Not Claimed</span>
                </td>
                <td>
                  <Link
                    className="claim"
                    data-bs-toggle="modal"
                    data-bs-target="#claim"
                  >
                    Claim
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      {/* Claim */}
      <div
        className="modal fade vprogress"
        id="claim"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="row justify-content-start not-alert mb-4">
                <div className="col">
                  <h3 className="mb-3 fs-4">Claim reward</h3>
                  <p>
                    You are about to claim a reward of{" "}
                    <span className="text-black">N500</span> to this user
                  </p>
                  <div className="d-flex flex-row mt-4 justify-content-center">
                    <button className="me-3 btn-save">Yes, Claim</button>
                    <button className="me-3 btn-white">Cancel</button>
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

export default CashBackTable;

import SearchNotification from "./searchNotification";
import ratings from "../../assets/ratings.svg"

function AdminOfficer() {
  return (
    <div className="content home">
      <SearchNotification />
      <div className="mt-5 row mx-5">
        <div className="col-sm-12 px-0">
          <div className="pending-loan">
            <div className="d-flex flex-row">
              <h5 className="me-3">Account Officers</h5>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-5 mx-5">
        <div className="col-sm-4 mb-3">
          <div className="report-card">
            <h3>Total account officers</h3>
            <h6 className="mt-3 text-black">0</h6>
          </div>
        </div>
        <div className="col-sm-4 mb-3">
          <div className="report-card">
            <h3>Total assigned account officers</h3>
            <h6 className="mt-3 text-black">0</h6>
          </div>
        </div>
        <div className="col-sm-4 mb-3">
          <div className="report-card">
            <h3>Total unassigned account officers</h3>
            <h6 className="mt-3 text-black">0</h6>
          </div>
        </div>
      </div>
      <div className="mt-5 row mx-5">
        <div className="col-sm-12 px-0">
          <div className="pending-loan">
            <div className="d-flex flex-row">
              <h5 className="me-3">Total assigned account officers <span style={{color: "#FF823B"}}>(0)</span> </h5>
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
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Phone Number</th>
                <th>Date Joined</th>
                <th>Ratings</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  Olabode
                </td>
                <td>Akindele</td>
                <td>lala@gmail.com</td>
                <td>08164356789</td>
                <td>10/02/2023</td>
                <td>
                  <img src={ratings} alt="ratings" className="img-fluid" />
                </td>
                <td>
                  <a className="claim" href="/admin/account-officer/view">View</a>
                </td>
              </tr>
              <tr>
                <td>
                  Olabode
                </td>
                <td>Akindele</td>
                <td>lala@gmail.com</td>
                <td>08164356789</td>
                <td>10/02/2023</td>
                <td>
                  <img src={ratings} alt="ratings" className="img-fluid" />
                </td>
                <td>
                  <a className="claim" href="/admin/account-officer/view">View</a>
                </td>
              </tr>
              <tr>
                <td>
                  Olabode
                </td>
                <td>Akindele</td>
                <td>lala@gmail.com</td>
                <td>08164356789</td>
                <td>10/02/2023</td>
                <td>
                  <img src={ratings} alt="ratings" className="img-fluid" />
                </td>
                <td>
                  <a className="claim" href="/admin/account-officer/view">View</a>
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

export default AdminOfficer;

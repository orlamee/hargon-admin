import SearchNotification from "./searchNotification";


function LegalTable() {
  return (
    <div className="content home">
      <SearchNotification />
      <div className="mt-5 row mx-5">
        <div className="col-sm-12 px-0">
          <div className="pending-loan">
            <div className="d-flex flex-row">
              <h5 className="me-3">Legal</h5>
            </div>
          </div>
        </div>
      </div>
      <div
        className="mt-2 mx-5 members bg-white py-5 px-2 view-loans"
        style={{ borderRadius: "0 0 20px 20px" }}
      >
        <div className="row justify-content-center">
          <div className="col-sm-7">
            <div className="overview">
              <div className="row justify-content-center">
                <div className="col-sm-10">
                  <div className="details-card">
                    <div className="bg-white p-4 ">
                      <table className="table table-responsive"
                        style={{ width: "100%" }}
                        id="example">
                        <thead>
                          <tr>
                            <th>Email</th>
                            <th>Status</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>xyz@gmail.com</td>
                            <td><span className="approved">Signed</span> <span className="awaiting ms-2">Pending</span></td>
                            <td><i className="bi bi-archive"></i></td>
                          </tr>
                          <tr>
                            <td>davidoshodi656@gmail.com</td>
                            <td><span className="approved">Signed</span> <span className="awaiting ms-2">Pending</span></td>
                            <td><i className="bi bi-archive"></i></td>
                          </tr>
                          <tr>
                            <td>bola@gmail.com</td>
                            <td><span className="approved">Signed</span> <span className="awaiting ms-2">Pending</span></td>
                            <td><i className="bi bi-archive"></i></td>
                          </tr>
                          <tr>
                            <td>davidoshodi656@gmail.com</td>
                            <td><span className="approved">Signed</span> <span className="awaiting ms-2">Pending</span></td>
                            <td><i className="bi bi-archive"></i></td>
                          </tr>
                          <tr>
                            <td>shallipopi@gmail.com</td>
                            <td><span className="approved">Signed</span> <span className="awaiting ms-2">Pending</span></td>
                            <td><i className="bi bi-archive"></i></td>
                          </tr>
                          <tr>
                            <td>davidoshodi656@gmail.com</td>
                            <td><span className="approved">Signed</span> <span className="withdrawn ms-2">Pending</span></td>
                            <td><i className="bi bi-archive"></i></td>
                          </tr>
                          <tr>
                            <td>davidoshodi656@gmail.com</td>
                            <td><span className="approved">Signed</span> <span className="awaiting ms-2">Pending</span></td>
                            <td><i className="bi bi-archive"></i></td>
                          </tr>
                          <tr>
                            <td>davidoshodi656@gmail.com</td>
                            <td><span className="approved">Signed</span> <span className="awaiting ms-2">Pending</span></td>
                            <td><i className="bi bi-archive"></i></td>
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
  );
}

export default LegalTable;

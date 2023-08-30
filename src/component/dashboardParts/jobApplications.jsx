import SearchNotification from "./searchNotification";

function JobApplications() {
  return (
    <div className="content home">
      <SearchNotification />
      <div className="mt-5 row mx-5">
        <div className="col-sm-12 px-0">
          <div className="pending-loan">
            <div className="d-flex flex-row">
              <h5 className="me-3">Career - <span style={{color: "#FF823B", fontSize: "10px"}}>Application</span></h5>
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
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Job Post</th>
                <th>Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>John</td>
                <td>Doe</td>
                <td>johndoe@gmail.com</td>
                <td>Web Developer</td>
                <td>15/08/2023</td>
                <td>
                  <div className="dropdown">
                    <i
                      className="bi bi-three-dots"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    ></i>
                    <ul class="dropdown-menu details">
                      <li>
                        <a className="dropdown-item" href="/career/details">
                          <i className="bi bi-eye me-2"></i>View Details
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#!">
                        <i className="bi bi-trash3 me-2 text-danger"></i>Delete Applicant
                        </a>
                      </li>
                    </ul>
                  </div>
                </td>
              </tr>
              <tr>
                <td>Elon</td>
                <td>Musk</td>
                <td>johndoe@gmail.com</td>
                <td>Product Designer</td>
                <td>15/08/2023</td>
                <td>
                  <div className="dropdown">
                    <i
                      className="bi bi-three-dots"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    ></i>
                    <ul class="dropdown-menu details">
                      <li>
                        <a className="dropdown-item" href="/career/details">
                          <i className="bi bi-eye me-2"></i>View Details
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#!">
                        <i className="bi bi-trash3 me-2 text-danger"></i>Delete Applicant
                        </a>
                      </li>
                    </ul>
                  </div>
                </td>
              </tr>
              <tr>
                <td>Elon</td>
                <td>Musk</td>
                <td>johndoe@gmail.com</td>
                <td>Product Designer</td>
                <td>15/08/2023</td>
                <td>
                  <div className="dropdown">
                    <i
                      className="bi bi-three-dots"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    ></i>
                    <ul class="dropdown-menu details">
                      <li>
                        <a className="dropdown-item" href="/career/details">
                          <i className="bi bi-eye me-2"></i>View Details
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#!">
                        <i className="bi bi-trash3 me-2 text-danger"></i>Delete Applicant
                        </a>
                      </li>
                    </ul>
                  </div>
                </td>
              </tr>
              <tr>
                <td>Elon</td>
                <td>Musk</td>
                <td>johndoe@gmail.com</td>
                <td>Product Designer</td>
                <td>15/08/2023</td>
                <td>
                  <div className="dropdown">
                    <i
                      className="bi bi-three-dots"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    ></i>
                    <ul class="dropdown-menu details">
                      <li>
                        <a className="dropdown-item" href="/career/details">
                          <i className="bi bi-eye me-2"></i>View Details
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#!">
                        <i className="bi bi-trash3 me-2 text-danger"></i>Delete Applicant
                        </a>
                      </li>
                    </ul>
                  </div>
                </td>
              </tr>
              <tr>
                <td>Elon</td>
                <td>Musk</td>
                <td>johndoe@gmail.com</td>
                <td>Product Designer</td>
                <td>15/08/2023</td>
                <td>
                  <div className="dropdown">
                    <i
                      className="bi bi-three-dots"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    ></i>
                    <ul class="dropdown-menu details">
                      <li>
                        <a className="dropdown-item" href="/career/details">
                          <i className="bi bi-eye me-2"></i>View Details
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#!">
                        <i className="bi bi-trash3 me-2 text-danger"></i>Delete Applicant
                        </a>
                      </li>
                    </ul>
                  </div>
                </td>
              </tr>
              <tr>
                <td>Elon</td>
                <td>Musk</td>
                <td>johndoe@gmail.com</td>
                <td>Product Designer</td>
                <td>15/08/2023</td>
                <td>
                  <div className="dropdown">
                    <i
                      className="bi bi-three-dots"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    ></i>
                    <ul class="dropdown-menu details">
                      <li>
                        <a className="dropdown-item" href="/career/details">
                          <i className="bi bi-eye me-2"></i>View Details
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#!">
                        <i className="bi bi-trash3 me-2 text-danger"></i>Delete Applicant
                        </a>
                      </li>
                    </ul>
                  </div>
                </td>
              </tr>
              <tr>
                <td>Mark</td>
                <td>Zuckerberg</td>
                <td>johndoe@gmail.com</td>
                <td>Software Engineer</td>
                <td>15/08/2023</td>
                <td>
                  <div className="dropdown">
                    <i
                      className="bi bi-three-dots"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    ></i>
                    <ul class="dropdown-menu details">
                      <li>
                        <a className="dropdown-item" href="/career/details">
                          <i className="bi bi-eye me-2"></i>View Details
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#!">
                        <i className="bi bi-trash3 me-2 text-danger"></i>Delete Applicant
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
  );
}

export default JobApplications;

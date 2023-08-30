import SearchNotification from "./searchNotification";
import avatar from "../../assets/avatar.svg";


function JobDesc() {
  return (
    <div className="content home">
      <SearchNotification />
      <div className="mt-5 row mx-5">
        <div className="col-sm-12 px-0">
          <div className="pending-loan">
            <div className="d-flex flex-row">
              <h5 className="me-3">
                <a href="/career">
                  <i
                    className="bi bi-chevron-left me-2"
                    style={{ color: "#228B22" }}
                  ></i>
                </a>
                Details
              </h5>
            </div>
          </div>
        </div>
      </div>
      <div
        className="mt-2 mx-5 members bg-white py-5 px-2 view-loans"
        style={{ borderRadius: "0 0 20px 20px" }}
      >
        <div className="row justify-content-center">
          <div className="col-sm-10">
            <div className="overview">
              <div className="row justify-content-center">
                <div className="details-card">
                  <div className="row">
                    <div className="col-sm-4 mb-3">
                      <div className="bg-white p-4 job-desc">
                        <div className="d-flex flex-row">
                          <div>
                            <img src={avatar} alt="avatar" className="img-fluid" />
                          </div>
                          <div className="ms-3">
                            <h3>First Name</h3>
                            <h4>John</h4>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-4 mb-3">
                      <div className="bg-white p-4 job-desc">
                        <div className="d-flex flex-row">
                          <div>
                            <img src={avatar} alt="avatar" className="img-fluid" />
                          </div>
                          <div className="ms-3">
                            <h3>Last Name</h3>
                            <h4>Doe</h4>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-4 mb-3">
                      <div className="bg-white p-4 job-desc">
                        <div className="d-flex flex-row">
                          <div>
                            <img src={avatar} alt="avatar" className="img-fluid" />
                          </div>
                          <div className="ms-3">
                            <h3>Email</h3>
                            <h4><span style={{color: "#005FEE"}}>johndoe@gmail.com</span></h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-4 mb-3">
                      <div className="bg-white p-4 job-desc">
                        <div className="d-flex flex-row">
                          <div>
                            <img src={avatar} alt="avatar" className="img-fluid" />
                          </div>
                          <div className="ms-3">
                            <h3>Phone Number</h3>
                            <h4>08165347802</h4>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-4 mb-3">
                      <div className="bg-white p-4 job-desc">
                        <div className="d-flex flex-row">
                          <div>
                            <img src={avatar} alt="avatar" className="img-fluid" />
                          </div>
                          <div className="ms-3">
                            <h3>Website/Portfolio Link</h3>
                            <h4><span style={{color: "#005FEE"}}>https://www.linkedin.com/in/Ola</span></h4>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-4 mb-3">
                      <div className="bg-white p-4 job-desc">
                        <div className="d-flex flex-row">
                          <div>
                            <img src={avatar} alt="avatar" className="img-fluid" />
                          </div>
                          <div className="ms-3">
                            <h3>Linkedin Profile Link</h3>
                            <h4><span style={{color: "#005FEE"}}>https://www.linkedin.com/in/Ola</span></h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-4 mb-3">
                      <div className="bg-white p-4 job-desc">
                        <div className="d-flex flex-row">
                          <div>
                            <img src={avatar} alt="avatar" className="img-fluid" />
                          </div>
                          <div className="ms-3">
                            <h3>Work Type</h3>
                            <h4>Remote</h4>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-4 mb-3">
                      <div className="bg-white p-4 job-desc">
                        <div className="d-flex flex-row">
                          <div>
                            <img src={avatar} alt="avatar" className="img-fluid" />
                          </div>
                          <div className="ms-3">
                            <h3>Job Type</h3>
                            <h4>Full Time</h4>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-4 mb-3">
                      <div className="bg-white p-4 job-desc">
                        <div className="d-flex flex-row">
                          <div>
                            <img src={avatar} alt="avatar" className="img-fluid" />
                          </div>
                          <div className="ms-3">
                            <h3>Able to start immediayely</h3>
                            <h4>Yes</h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-4">
                      <div className="bg-white p-4 job-desc">
                        <div className="d-flex flex-row">
                          <div>
                            <img src={avatar} alt="avatar" className="img-fluid" />
                          </div>
                          <div className="ms-3">
                            <h3>CV</h3>
                            <h4>mycv.docx</h4>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="bg-white p-4 job-desc">
                        <div className="d-flex flex-row">
                          <div>
                            <img src={avatar} alt="avatar" className="img-fluid" />
                          </div>
                          <div className="ms-3">
                            <h3>Cover Letter</h3>
                            <h4>mycoverletter.docx</h4>
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

export default JobDesc;

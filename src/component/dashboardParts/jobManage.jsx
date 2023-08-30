import SearchNotification from "./searchNotification";
import avatar from "../../assets/avatar.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";

export default function JobManage() {
  return (
    <div className="content home">
      <SearchNotification />
      <div className="mt-5 row mx-5">
        <div className="col-sm-12 px-0">
          <div className="pending-loan">
            <div className="d-flex flex-row">
              <h5 className="me-3">
                Career -{" "}
                <span style={{ color: "#FF823B", fontSize: "10px" }}>
                  Manage Jobs
                </span>
              </h5>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-5 mx-5">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="report-card">
              <h3>Total posted jobs</h3>
              <h6 className="mt-3 text-black">0</h6>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="report-card">
              <h3>Total active jobs</h3>
              <h6 className="mt-3 text-black">0</h6>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="report-card">
              <h3>Total closed jobs</h3>
              <h6 className="mt-3 text-black">0</h6>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="mt-5 row mx-5">
        <div className="col-sm-12 px-0">
          <div className="pending-loan">
            <div className="d-flex flex-row">
              <h5 className="me-3">Manage Jobs </h5>
            </div>
            <a href="/career/add-job"
              className="btn-save float-end"
              style={{ marginTop: "-38px" }}
            >
              Add New Job Post <i className="bi bi-plus ms-2"></i>
            </a>
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
                        Active Jobs{" "}
                        <span style={{ color: "#94A3B8" }}>(10 Applied)</span>
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
                        Drafted Jobs
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link"
                        id="pills-jobs-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-jobs"
                        type="button"
                        role="tab"
                        aria-controls="pills-jobs"
                        aria-selected="false"
                      >
                        Closed Jobs{" "}
                        <span style={{ color: "#94A3B8" }}>
                          (10 may - 20 may)
                        </span>
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
                        <div className="col-sm-8">
                          <div className="details-card members">
                            <div className="bg-white p-4">
                              <div className="row justify-content-start">
                                <div className="col-sm-12 loany">
                                  <ul
                                    className="nav nav-pills nav-fill"
                                    id="pills-tab"
                                    role="tablist"
                                  >
                                    <li
                                      className="nav-item"
                                      role="presentation"
                                    >
                                      <button
                                        className="nav-link active"
                                        id="pills-jt-tab"
                                        data-bs-toggle="pill"
                                        data-bs-target="#pills-jt"
                                        type="button"
                                        role="tab"
                                        aria-controls="pills-jt"
                                        aria-selected="true"
                                      >
                                        Job Title
                                      </button>
                                    </li>
                                    <li
                                      className="nav-item"
                                      role="presentation"
                                    >
                                      <button
                                        className="nav-link"
                                        id="pills-desc-tab"
                                        data-bs-toggle="pill"
                                        data-bs-target="#pills-desc"
                                        type="button"
                                        role="tab"
                                        aria-controls="pills-desc"
                                        aria-selected="false"
                                      >
                                        Description
                                      </button>
                                    </li>
                                    <li
                                      className="nav-item"
                                      role="presentation"
                                    >
                                      <button
                                        className="nav-link"
                                        id="pills-resp-tab"
                                        data-bs-toggle="pill"
                                        data-bs-target="#pills-resp"
                                        type="button"
                                        role="tab"
                                        aria-controls="pills-resp"
                                        aria-selected="false"
                                      >
                                        Responsibilities
                                      </button>
                                    </li>
                                    <li
                                      className="nav-item"
                                      role="presentation"
                                    >
                                      <button
                                        className="nav-link"
                                        id="pills-skill-tab"
                                        data-bs-toggle="pill"
                                        data-bs-target="#pills-skill"
                                        type="button"
                                        role="tab"
                                        aria-controls="pills-skill"
                                        aria-selected="false"
                                      >
                                        Requirements and Skills
                                      </button>
                                    </li>
                                    <li
                                      className="nav-item"
                                      role="presentation"
                                    >
                                      <button
                                        className="nav-link"
                                        id="pills-place-tab"
                                        data-bs-toggle="pill"
                                        data-bs-target="#pills-place"
                                        type="button"
                                        role="tab"
                                        aria-controls="pills-place"
                                        aria-selected="false"
                                      >
                                        Job Type/Work Place Type
                                      </button>
                                    </li>
                                    <li
                                      className="nav-item"
                                      role="presentation"
                                    >
                                      <button
                                        className="nav-link"
                                        id="pills-question-tab"
                                        data-bs-toggle="pill"
                                        data-bs-target="#pills-question"
                                        type="button"
                                        role="tab"
                                        aria-controls="pills-question"
                                        aria-selected="false"
                                      >
                                        Application Questions
                                      </button>
                                    </li>
                                    <li
                                      className="nav-item"
                                      role="presentation"
                                    >
                                      <button
                                        className="nav-link"
                                        id="pills-uploads-tab"
                                        data-bs-toggle="pill"
                                        data-bs-target="#pills-uploads"
                                        type="button"
                                        role="tab"
                                        aria-controls="pills-uploads"
                                        aria-selected="false"
                                      >
                                        Uploads
                                      </button>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="row mt-5">
                                <div className="col-sm-12">
                                  <div
                                    class="tab-content"
                                    id="pills-tabContent"
                                  >
                                    <div
                                      class="tab-pane fade show active"
                                      id="pills-jt"
                                      role="tabpanel"
                                      aria-labelledby="pills-jt-tab"
                                      tabindex="0"
                                    >
                                      <div className="acc-details">
                                        <div className="row">
                                          <div className="col">
                                            <div className="job-tab">
                                              <p>Product Designer</p>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      class="tab-pane fade"
                                      id="pills-desc"
                                      role="tabpanel"
                                      aria-labelledby="pills-desc-tab"
                                      tabindex="0"
                                    >
                                      <div className="acc-details">
                                        <div className="row">
                                          <div className="col">
                                            <div className="job-tab">
                                              <p>
                                                We are looking for a PRODUCT
                                                DESIGNER to turn our software
                                                into easy-to-use products for
                                                our organization. PRODUCT
                                                DESIGNER responsibilities
                                                include gathering user
                                                requirements, designing graphic
                                                elements and building navigation
                                                components. To be successful in
                                                this role, you should have
                                                experience with design software
                                                and wireframe tools. If you also
                                                have a portfolio of professional
                                                design projects that includes
                                                work with web/mobile
                                                applications, we’d like to meet
                                                you. Ultimately, you’ll create
                                                both functional and appealing
                                                features that address our
                                                clients’ needs and help us grow
                                                our customer base.
                                              </p>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      class="tab-pane fade"
                                      id="pills-resp"
                                      role="tabpanel"
                                      aria-labelledby="pills-resp-tab"
                                      tabindex="0"
                                    >
                                      <div className="acc-details">
                                        <div className="row">
                                          <div className="col">
                                            <div className="job-tab">
                                              <ul>
                                                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                                                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                                                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                                                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                                                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                                                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                                                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                                              </ul>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      class="tab-pane fade"
                                      id="pills-skill"
                                      role="tabpanel"
                                      aria-labelledby="pills-skill-tab"
                                      tabindex="0"
                                    >
                                      <div className="acc-details">
                                        <div className="row">
                                          <div className="col">
                                            <div className="job-tab">
                                              <ul>
                                                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                                                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                                                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                                                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                                                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                                                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                                                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                                              </ul>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      class="tab-pane fade"
                                      id="pills-place"
                                      role="tabpanel"
                                      aria-labelledby="pills-place-tab"
                                      tabindex="0"
                                    >
                                      <div className="acc-details">
                                        <div className="row">
                                          <div className="details-card">
                                            <div className="row">
                                              <div className="col-sm-6">
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
                                              <div className="col-sm-6">
                                                <div className="bg-white p-4 job-desc">
                                                  <div className="d-flex flex-row">
                                                    <div>
                                                      <img src={avatar} alt="avatar" className="img-fluid" />
                                                    </div>
                                                    <div className="ms-3">
                                                      <h3>Work Place Type</h3>
                                                      <h4>Remote</h4>
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
                                      class="tab-pane fade"
                                      id="pills-question"
                                      role="tabpanel"
                                      aria-labelledby="pills-question-tab"
                                      tabindex="0"
                                    >
                                      <div className="acc-details">
                                        <div className="row">
                                          <div className="details-card">
                                            <div className="row mb-3">
                                              <div className="col-sm-6">
                                                <div className="bg-white p-4 job-desc">
                                                  <div className="d-flex flex-row">
                                                    <div>
                                                      <img src={avatar} alt="avatar" className="img-fluid" />
                                                    </div>
                                                    <div className="ms-3">
                                                      <h3 style={{color: "#228B22"}}>Q1</h3>
                                                      <h4>First Name <span style={{color: "#D1D5DB"}}>(Compulsory)</span></h4>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="col-sm-6">
                                                <div className="bg-white p-4 job-desc">
                                                  <div className="d-flex flex-row">
                                                    <div>
                                                      <img src={avatar} alt="avatar" className="img-fluid" />
                                                    </div>
                                                    <div className="ms-3">
                                                      <h3 style={{color: "#228B22"}}>Q2</h3>
                                                      <h4>Last Name <span style={{color: "#D1D5DB"}}>(Compulsory)</span></h4>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div className="row mb-3">
                                              <div className="col-sm-6">
                                                <div className="bg-white p-4 job-desc">
                                                  <div className="d-flex flex-row">
                                                    <div>
                                                      <img src={avatar} alt="avatar" className="img-fluid" />
                                                    </div>
                                                    <div className="ms-3">
                                                      <h3 style={{color: "#228B22"}}>Q3</h3>
                                                      <h4>Email <span style={{color: "#D1D5DB"}}>(Compulsory)</span></h4>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="col-sm-6">
                                                <div className="bg-white p-4 job-desc">
                                                  <div className="d-flex flex-row">
                                                    <div>
                                                      <img src={avatar} alt="avatar" className="img-fluid" />
                                                    </div>
                                                    <div className="ms-3">
                                                      <h3 style={{color: "#228B22"}}>Q4</h3>
                                                      <h4>Phone Number <span style={{color: "#D1D5DB"}}>(Compulsory)</span></h4>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div className="row mb-3">
                                              <div className="col-sm-6">
                                                <div className="bg-white p-4 job-desc">
                                                  <div className="d-flex flex-row">
                                                    <div>
                                                      <img src={avatar} alt="avatar" className="img-fluid" />
                                                    </div>
                                                    <div className="ms-3">
                                                      <h3 style={{color: "#228B22"}}>Q5</h3>
                                                      <h4>Website/Portfolio Link <span style={{color: "#D1D5DB"}}>(Compulsory)</span></h4>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="col-sm-6">
                                                <div className="bg-white p-4 job-desc">
                                                  <div className="d-flex flex-row">
                                                    <div>
                                                      <img src={avatar} alt="avatar" className="img-fluid" />
                                                    </div>
                                                    <div className="ms-3">
                                                      <h3 style={{color: "#228B22"}}>Q6</h3>
                                                      <h4>Linkedin Profile </h4>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div className="row">
                                              <div className="col-sm-6">
                                                <div className="bg-white p-4 job-desc">
                                                  <div className="d-flex flex-row">
                                                    <div>
                                                      <img src={avatar} alt="avatar" className="img-fluid" />
                                                    </div>
                                                    <div className="ms-3">
                                                      <h3 style={{color: "#228B22"}}>Q7</h3>
                                                      <h4>Work Type <span style={{color: "#D1D5DB"}}>(Compulsory)</span></h4>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="col-sm-6">
                                                <div className="bg-white p-4 job-desc">
                                                  <div className="d-flex flex-row">
                                                    <div>
                                                      <img src={avatar} alt="avatar" className="img-fluid" />
                                                    </div>
                                                    <div className="ms-3">
                                                      <h3 style={{color: "#228B22"}}>Q8</h3>
                                                      <h4>Able to start immediately </h4>
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
                                      class="tab-pane fade"
                                      id="pills-uploads"
                                      role="tabpanel"
                                      aria-labelledby="pills-uploads-tab"
                                      tabindex="0"
                                    >
                                      <div className="acc-details">
                                        <div className="row">
                                          <div className="details-card">
                                            <div className="row">
                                              <div className="col-sm-6">
                                                <div className="bg-white p-4 job-desc">
                                                  <div className="d-flex flex-row">
                                                    <div>
                                                      <img src={avatar} alt="avatar" className="img-fluid" />
                                                    </div>
                                                    <div className="ms-3">
                                                      <h3 style={{color: "#228B22"}}>Upload 1</h3>
                                                      <h4>CV <span style={{color: "#D1D5DB"}}>(Compulsory)</span></h4>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="col-sm-6">
                                                <div className="bg-white p-4 job-desc">
                                                  <div className="d-flex flex-row">
                                                    <div>
                                                      <img src={avatar} alt="avatar" className="img-fluid" />
                                                    </div>
                                                    <div className="ms-3">
                                                      <h3 style={{color: "#228B22"}}>Upload 2</h3>
                                                      <h4>Cover Letter <span style={{color: "#D1D5DB"}}>(Compulsory)</span></h4>
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
                        <div className="col-sm-8">
                          <div className="details-card members">
                            <div className="bg-white p-4">
                              <div className="row justify-content-start">
                                <div className="col-sm-12 loany">
                                  <ul
                                    className="nav nav-pills nav-fill"
                                    id="pills-tab"
                                    role="tablist"
                                  >
                                    <li
                                      className="nav-item"
                                      role="presentation"
                                    >
                                      <button
                                        className="nav-link active"
                                        id="pills-djt-tab"
                                        data-bs-toggle="pill"
                                        data-bs-target="#pills-djt"
                                        type="button"
                                        role="tab"
                                        aria-controls="pills-djt"
                                        aria-selected="true"
                                      >
                                        Job Title
                                      </button>
                                    </li>
                                    <li
                                      className="nav-item"
                                      role="presentation"
                                    >
                                      <button
                                        className="nav-link"
                                        id="pills-ddesc-tab"
                                        data-bs-toggle="pill"
                                        data-bs-target="#pills-ddesc"
                                        type="button"
                                        role="tab"
                                        aria-controls="pills-ddesc"
                                        aria-selected="false"
                                      >
                                        Description
                                      </button>
                                    </li>
                                    <li
                                      className="nav-item"
                                      role="presentation"
                                    >
                                      <button
                                        className="nav-link"
                                        id="pills-dresp-tab"
                                        data-bs-toggle="pill"
                                        data-bs-target="#pills-dresp"
                                        type="button"
                                        role="tab"
                                        aria-controls="pills-dresp"
                                        aria-selected="false"
                                      >
                                        Responsibilities
                                      </button>
                                    </li>
                                    <li
                                      className="nav-item"
                                      role="presentation"
                                    >
                                      <button
                                        className="nav-link"
                                        id="pills-dskill-tab"
                                        data-bs-toggle="pill"
                                        data-bs-target="#pills-dskill"
                                        type="button"
                                        role="tab"
                                        aria-controls="pills-dskill"
                                        aria-selected="false"
                                      >
                                        Requirements and Skills
                                      </button>
                                    </li>
                                    <li
                                      className="nav-item"
                                      role="presentation"
                                    >
                                      <button
                                        className="nav-link"
                                        id="pills-dplace-tab"
                                        data-bs-toggle="pill"
                                        data-bs-target="#pills-dplace"
                                        type="button"
                                        role="tab"
                                        aria-controls="pills-dplace"
                                        aria-selected="false"
                                      >
                                        Job Type/Work Place Type
                                      </button>
                                    </li>
                                    <li
                                      className="nav-item"
                                      role="presentation"
                                    >
                                      <button
                                        className="nav-link"
                                        id="pills-dquestion-tab"
                                        data-bs-toggle="pill"
                                        data-bs-target="#pills-dquestion"
                                        type="button"
                                        role="tab"
                                        aria-controls="pills-dquestion"
                                        aria-selected="false"
                                      >
                                        Application Questions
                                      </button>
                                    </li>
                                    <li
                                      className="nav-item"
                                      role="presentation"
                                    >
                                      <button
                                        className="nav-link"
                                        id="pills-duploads-tab"
                                        data-bs-toggle="pill"
                                        data-bs-target="#pills-duploads"
                                        type="button"
                                        role="tab"
                                        aria-controls="pills-duploads"
                                        aria-selected="false"
                                      >
                                        Uploads
                                      </button>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="row mt-5">
                                <div className="col-sm-12">
                                  <div
                                    class="tab-content"
                                    id="pills-tabContent"
                                  >
                                    <div
                                      class="tab-pane fade show active"
                                      id="pills-djt"
                                      role="tabpanel"
                                      aria-labelledby="pills-djt-tab"
                                      tabindex="0"
                                    >
                                      <div className="acc-details">
                                        <div className="row">
                                          <div className="col">
                                            <div className="job-tab">
                                              <p>Product Designer</p>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      class="tab-pane fade"
                                      id="pills-ddesc"
                                      role="tabpanel"
                                      aria-labelledby="pills-ddesc-tab"
                                      tabindex="0"
                                    >
                                      <div className="acc-details">
                                        <div className="row">
                                          <div className="col">
                                            <div className="job-tab">
                                              <p>
                                                We are looking for a PRODUCT
                                                DESIGNER to turn our software
                                                into easy-to-use products for
                                                our organization. PRODUCT
                                                DESIGNER responsibilities
                                                include gathering user
                                                requirements, designing graphic
                                                elements and building navigation
                                                components. To be successful in
                                                this role, you should have
                                                experience with design software
                                                and wireframe tools. If you also
                                                have a portfolio of professional
                                                design projects that includes
                                                work with web/mobile
                                                applications, we’d like to meet
                                                you. Ultimately, you’ll create
                                                both functional and appealing
                                                features that address our
                                                clients’ needs and help us grow
                                                our customer base.
                                              </p>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      class="tab-pane fade"
                                      id="pills-dresp"
                                      role="tabpanel"
                                      aria-labelledby="pills-dresp-tab"
                                      tabindex="0"
                                    >
                                      <div className="acc-details">
                                        <div className="row">
                                          <div className="col">
                                            <div className="job-tab">
                                              <ul>
                                                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                                                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                                                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                                                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                                                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                                                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                                                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                                              </ul>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      class="tab-pane fade"
                                      id="pills-dskill"
                                      role="tabpanel"
                                      aria-labelledby="pills-dskill-tab"
                                      tabindex="0"
                                    >
                                      <div className="acc-details">
                                        <div className="row">
                                          <div className="col">
                                            <div className="job-tab">
                                              <ul>
                                                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                                                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                                                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                                                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                                                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                                                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                                                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                                              </ul>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      class="tab-pane fade"
                                      id="pills-dplace"
                                      role="tabpanel"
                                      aria-labelledby="pills-dplace-tab"
                                      tabindex="0"
                                    >
                                      <div className="acc-details">
                                        <div className="row">
                                          <div className="details-card">
                                            <div className="row">
                                              <div className="col-sm-6">
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
                                              <div className="col-sm-6">
                                                <div className="bg-white p-4 job-desc">
                                                  <div className="d-flex flex-row">
                                                    <div>
                                                      <img src={avatar} alt="avatar" className="img-fluid" />
                                                    </div>
                                                    <div className="ms-3">
                                                      <h3>Work Place Type</h3>
                                                      <h4>Remote</h4>
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
                                      class="tab-pane fade"
                                      id="pills-dquestion"
                                      role="tabpanel"
                                      aria-labelledby="pills-dquestion-tab"
                                      tabindex="0"
                                    >
                                      <div className="acc-details">
                                        <div className="row">
                                          <div className="details-card">
                                            <div className="row mb-3">
                                              <div className="col-sm-6">
                                                <div className="bg-white p-4 job-desc">
                                                  <div className="d-flex flex-row">
                                                    <div>
                                                      <img src={avatar} alt="avatar" className="img-fluid" />
                                                    </div>
                                                    <div className="ms-3">
                                                      <h3 style={{color: "#228B22"}}>Q1</h3>
                                                      <h4>First Name <span style={{color: "#D1D5DB"}}>(Compulsory)</span></h4>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="col-sm-6">
                                                <div className="bg-white p-4 job-desc">
                                                  <div className="d-flex flex-row">
                                                    <div>
                                                      <img src={avatar} alt="avatar" className="img-fluid" />
                                                    </div>
                                                    <div className="ms-3">
                                                      <h3 style={{color: "#228B22"}}>Q2</h3>
                                                      <h4>Last Name <span style={{color: "#D1D5DB"}}>(Compulsory)</span></h4>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div className="row mb-3">
                                              <div className="col-sm-6">
                                                <div className="bg-white p-4 job-desc">
                                                  <div className="d-flex flex-row">
                                                    <div>
                                                      <img src={avatar} alt="avatar" className="img-fluid" />
                                                    </div>
                                                    <div className="ms-3">
                                                      <h3 style={{color: "#228B22"}}>Q3</h3>
                                                      <h4>Email <span style={{color: "#D1D5DB"}}>(Compulsory)</span></h4>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="col-sm-6">
                                                <div className="bg-white p-4 job-desc">
                                                  <div className="d-flex flex-row">
                                                    <div>
                                                      <img src={avatar} alt="avatar" className="img-fluid" />
                                                    </div>
                                                    <div className="ms-3">
                                                      <h3 style={{color: "#228B22"}}>Q4</h3>
                                                      <h4>Phone Number <span style={{color: "#D1D5DB"}}>(Compulsory)</span></h4>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div className="row mb-3">
                                              <div className="col-sm-6">
                                                <div className="bg-white p-4 job-desc">
                                                  <div className="d-flex flex-row">
                                                    <div>
                                                      <img src={avatar} alt="avatar" className="img-fluid" />
                                                    </div>
                                                    <div className="ms-3">
                                                      <h3 style={{color: "#228B22"}}>Q5</h3>
                                                      <h4>Website/Portfolio Link <span style={{color: "#D1D5DB"}}>(Compulsory)</span></h4>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="col-sm-6">
                                                <div className="bg-white p-4 job-desc">
                                                  <div className="d-flex flex-row">
                                                    <div>
                                                      <img src={avatar} alt="avatar" className="img-fluid" />
                                                    </div>
                                                    <div className="ms-3">
                                                      <h3 style={{color: "#228B22"}}>Q6</h3>
                                                      <h4>Linkedin Profile </h4>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div className="row">
                                              <div className="col-sm-6">
                                                <div className="bg-white p-4 job-desc">
                                                  <div className="d-flex flex-row">
                                                    <div>
                                                      <img src={avatar} alt="avatar" className="img-fluid" />
                                                    </div>
                                                    <div className="ms-3">
                                                      <h3 style={{color: "#228B22"}}>Q7</h3>
                                                      <h4>Work Type <span style={{color: "#D1D5DB"}}>(Compulsory)</span></h4>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="col-sm-6">
                                                <div className="bg-white p-4 job-desc">
                                                  <div className="d-flex flex-row">
                                                    <div>
                                                      <img src={avatar} alt="avatar" className="img-fluid" />
                                                    </div>
                                                    <div className="ms-3">
                                                      <h3 style={{color: "#228B22"}}>Q8</h3>
                                                      <h4>Able to start immediately </h4>
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
                                      class="tab-pane fade"
                                      id="pills-duploads"
                                      role="tabpanel"
                                      aria-labelledby="pills-duploads-tab"
                                      tabindex="0"
                                    >
                                      <div className="acc-details">
                                        <div className="row">
                                          <div className="details-card">
                                            <div className="row">
                                              <div className="col-sm-6">
                                                <div className="bg-white p-4 job-desc">
                                                  <div className="d-flex flex-row">
                                                    <div>
                                                      <img src={avatar} alt="avatar" className="img-fluid" />
                                                    </div>
                                                    <div className="ms-3">
                                                      <h3 style={{color: "#228B22"}}>Upload 1</h3>
                                                      <h4>CV <span style={{color: "#D1D5DB"}}>(Compulsory)</span></h4>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="col-sm-6">
                                                <div className="bg-white p-4 job-desc">
                                                  <div className="d-flex flex-row">
                                                    <div>
                                                      <img src={avatar} alt="avatar" className="img-fluid" />
                                                    </div>
                                                    <div className="ms-3">
                                                      <h3 style={{color: "#228B22"}}>Upload 2</h3>
                                                      <h4>Cover Letter <span style={{color: "#D1D5DB"}}>(Compulsory)</span></h4>
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
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="pills-jobs"
                    role="tabpanel"
                    aria-labelledby="pills-jobs-tab"
                    tabIndex="0"
                  >
                    <div className="overview">
                      <div className="row justify-content-center">
                        <div className="col-sm-8">
                          <div className="details-card members">
                            <div className="bg-white p-4">
                              <div className="row justify-content-start">
                                <div className="col-sm-12 loany">
                                  <ul
                                    className="nav nav-pills nav-fill"
                                    id="pills-tab"
                                    role="tablist"
                                  >
                                    <li
                                      className="nav-item"
                                      role="presentation"
                                    >
                                      <button
                                        className="nav-link active"
                                        id="pills-cjt-tab"
                                        data-bs-toggle="pill"
                                        data-bs-target="#pills-cjt"
                                        type="button"
                                        role="tab"
                                        aria-controls="pills-cjt"
                                        aria-selected="true"
                                      >
                                        Job Title
                                      </button>
                                    </li>
                                    <li
                                      className="nav-item"
                                      role="presentation"
                                    >
                                      <button
                                        className="nav-link"
                                        id="pills-cdesc-tab"
                                        data-bs-toggle="pill"
                                        data-bs-target="#pills-cdesc"
                                        type="button"
                                        role="tab"
                                        aria-controls="pills-cdesc"
                                        aria-selected="false"
                                      >
                                        Description
                                      </button>
                                    </li>
                                    <li
                                      className="nav-item"
                                      role="presentation"
                                    >
                                      <button
                                        className="nav-link"
                                        id="pills-cresp-tab"
                                        data-bs-toggle="pill"
                                        data-bs-target="#pills-cresp"
                                        type="button"
                                        role="tab"
                                        aria-controls="pills-cresp"
                                        aria-selected="false"
                                      >
                                        Responsibilities
                                      </button>
                                    </li>
                                    <li
                                      className="nav-item"
                                      role="presentation"
                                    >
                                      <button
                                        className="nav-link"
                                        id="pills-cskill-tab"
                                        data-bs-toggle="pill"
                                        data-bs-target="#pills-cskill"
                                        type="button"
                                        role="tab"
                                        aria-controls="pills-cskill"
                                        aria-selected="false"
                                      >
                                        Requirements and Skills
                                      </button>
                                    </li>
                                    <li
                                      className="nav-item"
                                      role="presentation"
                                    >
                                      <button
                                        className="nav-link"
                                        id="pills-cplace-tab"
                                        data-bs-toggle="pill"
                                        data-bs-target="#pills-cplace"
                                        type="button"
                                        role="tab"
                                        aria-controls="pills-cplace"
                                        aria-selected="false"
                                      >
                                        Job Type/Work Place Type
                                      </button>
                                    </li>
                                    <li
                                      className="nav-item"
                                      role="presentation"
                                    >
                                      <button
                                        className="nav-link"
                                        id="pills-cquestion-tab"
                                        data-bs-toggle="pill"
                                        data-bs-target="#pills-cquestion"
                                        type="button"
                                        role="tab"
                                        aria-controls="pills-cquestion"
                                        aria-selected="false"
                                      >
                                        Application Questions
                                      </button>
                                    </li>
                                    <li
                                      className="nav-item"
                                      role="presentation"
                                    >
                                      <button
                                        className="nav-link"
                                        id="pills-cuploads-tab"
                                        data-bs-toggle="pill"
                                        data-bs-target="#pills-cuploads"
                                        type="button"
                                        role="tab"
                                        aria-controls="pills-cuploads"
                                        aria-selected="false"
                                      >
                                        Uploads
                                      </button>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="row mt-5">
                                <div className="col-sm-12">
                                  <div
                                    class="tab-content"
                                    id="pills-tabContent"
                                  >
                                    <div
                                      class="tab-pane fade show active"
                                      id="pills-cjt"
                                      role="tabpanel"
                                      aria-labelledby="pills-cjt-tab"
                                      tabindex="0"
                                    >
                                      <div className="acc-details">
                                        <div className="row">
                                          <div className="col">
                                            <div className="job-tab">
                                              <p>Product Designer</p>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      class="tab-pane fade"
                                      id="pills-cdesc"
                                      role="tabpanel"
                                      aria-labelledby="pills-cdesc-tab"
                                      tabindex="0"
                                    >
                                      <div className="acc-details">
                                        <div className="row">
                                          <div className="col">
                                            <div className="job-tab">
                                              <p>
                                                We are looking for a PRODUCT
                                                DESIGNER to turn our software
                                                into easy-to-use products for
                                                our organization. PRODUCT
                                                DESIGNER responsibilities
                                                include gathering user
                                                requirements, designing graphic
                                                elements and building navigation
                                                components. To be successful in
                                                this role, you should have
                                                experience with design software
                                                and wireframe tools. If you also
                                                have a portfolio of professional
                                                design projects that includes
                                                work with web/mobile
                                                applications, we’d like to meet
                                                you. Ultimately, you’ll create
                                                both functional and appealing
                                                features that address our
                                                clients’ needs and help us grow
                                                our customer base.
                                              </p>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      class="tab-pane fade"
                                      id="pills-cresp"
                                      role="tabpanel"
                                      aria-labelledby="pills-cresp-tab"
                                      tabindex="0"
                                    >
                                      <div className="acc-details">
                                        <div className="row">
                                          <div className="col">
                                            <div className="job-tab">
                                              <ul>
                                                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                                                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                                                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                                                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                                                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                                                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                                                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                                              </ul>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      class="tab-pane fade"
                                      id="pills-cskill"
                                      role="tabpanel"
                                      aria-labelledby="pills-cskill-tab"
                                      tabindex="0"
                                    >
                                      <div className="acc-details">
                                        <div className="row">
                                          <div className="col">
                                            <div className="job-tab">
                                              <ul>
                                                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                                                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                                                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                                                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                                                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                                                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                                                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                                              </ul>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      class="tab-pane fade"
                                      id="pills-cplace"
                                      role="tabpanel"
                                      aria-labelledby="pills-cplace-tab"
                                      tabindex="0"
                                    >
                                      <div className="acc-details">
                                        <div className="row">
                                          <div className="details-card">
                                            <div className="row">
                                              <div className="col-sm-6">
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
                                              <div className="col-sm-6">
                                                <div className="bg-white p-4 job-desc">
                                                  <div className="d-flex flex-row">
                                                    <div>
                                                      <img src={avatar} alt="avatar" className="img-fluid" />
                                                    </div>
                                                    <div className="ms-3">
                                                      <h3>Work Place Type</h3>
                                                      <h4>Remote</h4>
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
                                      class="tab-pane fade"
                                      id="pills-cquestion"
                                      role="tabpanel"
                                      aria-labelledby="pills-dquestion-tab"
                                      tabindex="0"
                                    >
                                      <div className="acc-details">
                                        <div className="row">
                                          <div className="details-card">
                                            <div className="row mb-3">
                                              <div className="col-sm-6">
                                                <div className="bg-white p-4 job-desc">
                                                  <div className="d-flex flex-row">
                                                    <div>
                                                      <img src={avatar} alt="avatar" className="img-fluid" />
                                                    </div>
                                                    <div className="ms-3">
                                                      <h3 style={{color: "#228B22"}}>Q1</h3>
                                                      <h4>First Name <span style={{color: "#D1D5DB"}}>(Compulsory)</span></h4>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="col-sm-6">
                                                <div className="bg-white p-4 job-desc">
                                                  <div className="d-flex flex-row">
                                                    <div>
                                                      <img src={avatar} alt="avatar" className="img-fluid" />
                                                    </div>
                                                    <div className="ms-3">
                                                      <h3 style={{color: "#228B22"}}>Q2</h3>
                                                      <h4>Last Name <span style={{color: "#D1D5DB"}}>(Compulsory)</span></h4>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div className="row mb-3">
                                              <div className="col-sm-6">
                                                <div className="bg-white p-4 job-desc">
                                                  <div className="d-flex flex-row">
                                                    <div>
                                                      <img src={avatar} alt="avatar" className="img-fluid" />
                                                    </div>
                                                    <div className="ms-3">
                                                      <h3 style={{color: "#228B22"}}>Q3</h3>
                                                      <h4>Email <span style={{color: "#D1D5DB"}}>(Compulsory)</span></h4>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="col-sm-6">
                                                <div className="bg-white p-4 job-desc">
                                                  <div className="d-flex flex-row">
                                                    <div>
                                                      <img src={avatar} alt="avatar" className="img-fluid" />
                                                    </div>
                                                    <div className="ms-3">
                                                      <h3 style={{color: "#228B22"}}>Q4</h3>
                                                      <h4>Phone Number <span style={{color: "#D1D5DB"}}>(Compulsory)</span></h4>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div className="row mb-3">
                                              <div className="col-sm-6">
                                                <div className="bg-white p-4 job-desc">
                                                  <div className="d-flex flex-row">
                                                    <div>
                                                      <img src={avatar} alt="avatar" className="img-fluid" />
                                                    </div>
                                                    <div className="ms-3">
                                                      <h3 style={{color: "#228B22"}}>Q5</h3>
                                                      <h4>Website/Portfolio Link <span style={{color: "#D1D5DB"}}>(Compulsory)</span></h4>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="col-sm-6">
                                                <div className="bg-white p-4 job-desc">
                                                  <div className="d-flex flex-row">
                                                    <div>
                                                      <img src={avatar} alt="avatar" className="img-fluid" />
                                                    </div>
                                                    <div className="ms-3">
                                                      <h3 style={{color: "#228B22"}}>Q6</h3>
                                                      <h4>Linkedin Profile </h4>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div className="row">
                                              <div className="col-sm-6">
                                                <div className="bg-white p-4 job-desc">
                                                  <div className="d-flex flex-row">
                                                    <div>
                                                      <img src={avatar} alt="avatar" className="img-fluid" />
                                                    </div>
                                                    <div className="ms-3">
                                                      <h3 style={{color: "#228B22"}}>Q7</h3>
                                                      <h4>Work Type <span style={{color: "#D1D5DB"}}>(Compulsory)</span></h4>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="col-sm-6">
                                                <div className="bg-white p-4 job-desc">
                                                  <div className="d-flex flex-row">
                                                    <div>
                                                      <img src={avatar} alt="avatar" className="img-fluid" />
                                                    </div>
                                                    <div className="ms-3">
                                                      <h3 style={{color: "#228B22"}}>Q8</h3>
                                                      <h4>Able to start immediately </h4>
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
                                      class="tab-pane fade"
                                      id="pills-cuploads"
                                      role="tabpanel"
                                      aria-labelledby="pills-duploads-tab"
                                      tabindex="0"
                                    >
                                      <div className="acc-details">
                                        <div className="row">
                                          <div className="details-card">
                                            <div className="row">
                                              <div className="col-sm-6">
                                                <div className="bg-white p-4 job-desc">
                                                  <div className="d-flex flex-row">
                                                    <div>
                                                      <img src={avatar} alt="avatar" className="img-fluid" />
                                                    </div>
                                                    <div className="ms-3">
                                                      <h3 style={{color: "#228B22"}}>Upload 1</h3>
                                                      <h4>CV <span style={{color: "#D1D5DB"}}>(Compulsory)</span></h4>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="col-sm-6">
                                                <div className="bg-white p-4 job-desc">
                                                  <div className="d-flex flex-row">
                                                    <div>
                                                      <img src={avatar} alt="avatar" className="img-fluid" />
                                                    </div>
                                                    <div className="ms-3">
                                                      <h3 style={{color: "#228B22"}}>Upload 2</h3>
                                                      <h4>Cover Letter <span style={{color: "#D1D5DB"}}>(Compulsory)</span></h4>
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

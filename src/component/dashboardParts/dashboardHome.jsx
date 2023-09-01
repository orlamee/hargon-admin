import loan from "../../assets/loan-graph.svg";
import naira from "../../assets/naira.svg";
import dashboard from "../../assets/dashboard.svg";
import cancel from "../../assets/cancelled.svg";
import paid from "../../assets/pais.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import SearchNotification from "./searchNotification";
import { useNavigate } from "react-router-dom";

function DashboardHome() {
  const navigate = useNavigate();
  return (
    <div className="content home">
      <SearchNotification />
      <div className="row mt-5 mx-5">
        <div className="col-sm-4 mb-3">
          <div className="app-card bg-white">
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              autoplay={{
                delay: 1500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              modules={[Autoplay, Pagination]}
              className="mySwiper"
            >
              <SwiperSlide>
                <h3>Application Summary</h3>
                <h6 className="app-equal">Total applications</h6>
                <div>
                  <h5>20</h5>
                  <button
                    type="button"
                    className="app-card-btn"
                    onClick={() => navigate("/application-summary")}
                  >
                    See More
                  </button>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <h3>Application Summary</h3>
                <h6 className="app-equal">Rejected applications</h6>
                <div>
                  <h5>2</h5>
                  <button
                    type="button"
                    className="app-card-btn"
                    onClick={() => navigate("/application-summary")}
                  >
                    See More
                  </button>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <h3>Application Summary</h3>
                <h6 className="app-equal">Accepted applications</h6>
                <div>
                  <h5>2</h5>
                  <button
                    type="button"
                    className="app-card-btn"
                    onClick={() => navigate("/application-summary")}
                  >
                    See More
                  </button>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <h3>Application Summary</h3>
                <h6 className="app-equal">Pending applications</h6>
                <div>
                  <h5>80</h5>
                  <button
                    type="button"
                    className="app-card-btn"
                    onClick={() => navigate("/application-summary")}
                  >
                    See More
                  </button>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        <div className="col-sm-4 mb-3">
          <div className="app-card bg-white">
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              autoplay={{
                delay: 1500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              modules={[Autoplay, Pagination]}
              className="mySwiper"
            >
              <SwiperSlide>
                <h3>User Summary</h3>
                <h6 className="app-equal">Total users</h6>
                <div>
                  <h5>20</h5>
                  <button
                    type="button"
                    className="app-card-btn"
                    onClick={() => navigate("/manage-users")}
                  >
                    See More
                  </button>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <h3>User Summary</h3>
                <h6 className="app-equal">Blocked users</h6>
                <div>
                  <h5>27</h5>
                  <button
                    type="button"
                    className="app-card-btn"
                    onClick={() => navigate("/manage-users")}
                  >
                    See More
                  </button>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <h3>User Summary</h3>
                <h6 className="app-equal">Active users</h6>
                <div>
                  <h5>40</h5>
                  <button
                    type="button"
                    className="app-card-btn"
                    onClick={() => navigate("/manage-users")}
                  >
                    See More
                  </button>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <h3>User Summary</h3>
                <h6 className="app-equal">Inactive users</h6>
                <div>
                  <h5>290</h5>
                  <button
                    type="button"
                    className="app-card-btn"
                    onClick={() => navigate("/manage-users")}
                  >
                    See More
                  </button>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        <div className="col-sm-4 mb-3">
          <div className="app-card bg-white">
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              autoplay={{
                delay: 1500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              modules={[Autoplay, Pagination]}
              className="mySwiper"
            >
              <SwiperSlide>
                <h3>Loan Summary</h3>
                <h6 className="app-equal">Total Loans</h6>
                <div>
                  <h5>20</h5>
                  <button
                    type="button"
                    className="app-card-btn"
                    onClick={() => navigate("/all-loans")}
                  >
                    See More
                  </button>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <h3>Loan Summary</h3>
                <h6 className="app-equal">Active loans</h6>
                <div>
                  <h5>2</h5>
                  <button
                    type="button"
                    className="app-card-btn"
                    onClick={() => navigate("/all-loans")}
                  >
                    See More
                  </button>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <h3>Loan Summary</h3>
                <h6 className="app-equal">Expired loans</h6>
                <div>
                  <h5>2</h5>
                  <button
                    type="button"
                    className="app-card-btn"
                    onClick={() => navigate("/all-loans")}
                  >
                    See More
                  </button>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <h3>Loan Summary</h3>
                <h6 className="app-equal">Due loans</h6>
                <div>
                  <h5>2</h5>
                  <button
                    type="button"
                    className="app-card-btn"
                    onClick={() => navigate("/all-loans")}
                  >
                    See More
                  </button>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <h3>Loan Summary</h3>
                <h6 className="app-equal">Defaulted loans</h6>
                <div>
                  <h5>2</h5>
                  <button
                    type="button"
                    className="app-card-btn"
                    onClick={() => navigate("/all-loans")}
                  >
                    See More
                  </button>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
      <div className="row mt-4 mx-5 graphs">
        <div className="col-sm-9 mb-3">
          <img src={loan} alt="loan" className="img-fluid w-100" />
        </div>
        <div className="col-sm-3 mb-3">
          <img src={dashboard} alt="loan" className="img-fluid w-100" />
        </div>
      </div>
      <div className="row mt-4 mx-5">
        <div className="col-sm-5 mb-3">
          <div className="app-card bg-green" style={{ minHeight: "396px" }}>
            <div>
              <h3 className="text-white">Marketing Summary</h3>
              <button
                className="app-card-btn"
                style={{
                  background: "#F1984B",
                  color: "#fff",
                  borderColor: "#F1984B",
                }}
                onClick={() => navigate("/email")}
              >
                See More
              </button>
            </div>
            <div className="row mt-5">
              <div className="col-sm-9">
                <h6 className="text-white">Total emails</h6>
                <h5 className="text-white">200</h5>
              </div>
              <div className="col-sm-3">
                <h6 className="text-white">Total notifications</h6>
                <h5 className="text-white">200</h5>
              </div>
            </div>
            <div className="row mt-5">
              <div className="col-sm-9">
                <h6 className="text-white">Total SMS</h6>
                <h5 className="text-white">200</h5>
              </div>
              <div className="col-sm-3">
                <h6 className="text-white">Total calls</h6>
                <h5 className="text-white">200</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-7 mb-3">
          <img src={cancel} alt="loan" className="img-fluid cancel" />
        </div>
      </div>
      <div className="row mt-4 mx-5">
        <div className="col-sm-7 mb-3">
          <img src={paid} alt="loan" className="img-fluid cancel" />
        </div>
        <div className="col-sm-5">
          <div className="app-card bg-orange" style={{ minHeight: "396px" }}>
            <div>
              <h3 className="text-white">Marketplace Summary</h3>
              <button
                className="app-card-btn"
                style={{
                  background: "#228B22",
                  color: "#fff",
                  borderColor: "#228B22",
                }}
                onClick={() => navigate("/email")}
              >
                See More
              </button>
            </div>
            <div className="row mt-5">
              <div className="col-sm-9">
                <h6 className="text-white">Total items bought</h6>
                <h5 className="text-white">200</h5>
              </div>
              <div className="col-sm-3">
                <h6 className="text-white">Total bids</h6>
                <h5 className="text-white">200</h5>
              </div>
            </div>
            <div className="row mt-5">
              <div className="col-sm-9">
                <h6 className="text-white">Total funds</h6>
                <h5 className="text-white">
                  <img src={naira} alt="naira" className="img-fluid me-1" />
                  10k
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardHome;

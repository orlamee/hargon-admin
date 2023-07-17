import nots from "../../assets/not.svg"
// import ceo from "../../assets/ceo.svg"
import loan from "../../assets/loan-graph.svg"
// import ceo from "../../assets/ceo.svg"
import avatar from "../../assets/avi.svg"
import dashboard from "../../assets/dashboard.svg"
import cancel from "../../assets/cancelled.svg"
import paid from "../../assets/pais.svg"
import { Link } from "react-router-dom"
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from 'swiper/modules'
import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/navigation';


function DashboardHome() {
  return (
    <div className="content home">
      <div className="sticky-top container-fluid bg-white dash-bot px-5 py-4">
        <div className="row justify-content-end">
          <div className="col-sm-9">
            <div class="row d-flex justify-content-center align-items-center">
              <div className="col-md-12">
                <div className="form">
                  <i className="bi bi-search"></i>
                  <input type="text" class="form-control form-input" placeholder="Search for something here"/>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="d-flex flex-row justify-content-end">
              <Link><img src={nots} alt="nots" className="img-fluid me-4 mt-3" /></Link>
              <div className="d-flex flex-row">
                <img src={avatar} alt="admin" className="img-fluid" />
                <div className="user-avi mt-3 ms-3">
                  <h6>John Doe</h6>
                  <p>CEO</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
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
                  <button className="app-card-btn">See More</button>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <h3>Application Summary</h3>
                <h6 className="app-equal">Rejected applications</h6>
                <div>
                  <h5>2</h5>
                  <button className="app-card-btn">See More</button>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <h3>Application Summary</h3>
                <h6 className="app-equal">Accepted applications</h6>
                <div>
                  <h5>2</h5>
                  <button className="app-card-btn">See More</button>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <h3>Application Summary</h3>
                <h6 className="app-equal">Pending applications</h6>
                <div>
                  <h5>80</h5>
                  <button className="app-card-btn">See More</button>
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
                  <button className="app-card-btn">See More</button>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <h3>User Summary</h3>
                <h6 className="app-equal">Blocked users</h6>
                <div>
                  <h5>27</h5>
                  <button className="app-card-btn">See More</button>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <h3>User Summary</h3>
                <h6 className="app-equal">Active users</h6>
                <div>
                  <h5>40</h5>
                  <button className="app-card-btn">See More</button>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <h3>User Summary</h3>
                <h6 className="app-equal">Inactive users</h6>
                <div>
                  <h5>290</h5>
                  <button className="app-card-btn">See More</button>
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
                  <button className="app-card-btn">See More</button>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <h3>Loan Summary</h3>
                <h6 className="app-equal">Active loans</h6>
                <div>
                  <h5>2</h5>
                  <button className="app-card-btn">See More</button>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <h3>Loan Summary</h3>
                <h6 className="app-equal">Expired loans</h6>
                <div>
                  <h5>2</h5>
                  <button className="app-card-btn">See More</button>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <h3>Loan Summary</h3>
                <h6 className="app-equal">Due loans</h6>
                <div>
                  <h5>2</h5>
                  <button className="app-card-btn">See More</button>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <h3>Loan Summary</h3>
                <h6 className="app-equal">Defaulted loans</h6>
                <div>
                  <h5>2</h5>
                  <button className="app-card-btn">See More</button>
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
          <div className="app-card bg-green" style={{minHeight : "396px"}}>
            <div>
               <h3 className="text-white">Marketing Summary</h3>
              <button className="app-card-btn" style={{background: "#F1984B", color: "#fff", borderColor: "#F1984B"}}>See More</button>
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
          <div className="app-card bg-orange" style={{minHeight : "396px"}}>
            <div>
               <h3 className="text-white">Marketplace Summary</h3>
              <button className="app-card-btn" style={{background: "#228B22", color: "#fff", borderColor: "#228B22"}}>See More</button>
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
                <h5 className="text-white">10k</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashboardHome
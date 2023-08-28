import SearchNotification from "./searchNotification";
import cancel from "../../assets/cancelled.svg"
import credit from "../../assets/credit.svg"
import debit from "../../assets/debit.svg"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';

function ReportsSave() {
  return (
    <div className="content home">
      <SearchNotification />
      <div className="mt-5 row mx-5">
        <div className="col-sm-12 px-0">
          <div className="pending-loan">
            <div className="d-flex flex-row">
              <h5 className="me-3">Report</h5>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-5 mx-5">
        <Swiper
          slidesPerView={4}
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
              <h3>Savings customers</h3>
              <h6 className="mt-3 text-black">0</h6>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="report-card">
              <h3>Total withdrawal</h3>
              <h6 className="mt-3 text-black">0</h6>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="report-card">
              <h3>Total balance</h3>
              <h6 className="mt-3 text-black">0</h6>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="report-card">
              <h3>Active savings</h3>
              <h6 className="mt-3 text-black">0</h6>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="row mt-4 mx-5">
        <div className="col-sm-4 mb-3">
          <div className="report-card" style={{background: "#F0FDF4"}}>
            <h3 className="text-black">Funds</h3>
            <div className="row mt-3">
              <div className="col-sm-7 mb-3">
                <p>Total Funds</p>
                <h6 className="mt-3 text-black">₦ 100,000</h6>
              </div>
              <div className="col-sm-5">
                <p>Interest</p>
                <h6 className="mt-3 text-black">₦ 100,000 <span>(10%)</span></h6>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-4 mb-3">
          <div className="report-card" style={{background: "#FEF2F2"}}>
            <h3 className="text-black">Loans</h3>
            <div className="row mt-3">
              <div className="col-sm-7 mb-3">
                <p>Total Funds</p>
                <h6 className="mt-3 text-black">₦ 100,000</h6>
              </div>
              <div className="col-sm-5">
                <p>Interest</p>
                <h6 className="mt-3 text-black">₦ 100,000 <span>(10%)</span></h6>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-4 mb-3">
          <div className="report-card" style={{background: "#FFF2BF"}}>
            <h3 className="text-black">Savings</h3>
            <div className="row mt-3">
              <div className="col-sm-7 mb-3">
                <p>Total Funds</p>
                <h6 className="mt-3 text-black">₦ 100,000</h6>
              </div>
              <div className="col-sm-5">
                <p>Interest</p>
                <h6 className="mt-3 text-black">₦ 100,000 <span>(10%)</span></h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4 row mx-5">
        <div className="col-sm-7 mb-3">
          <img src={cancel} alt="graph" className="img-fluid cancel" />
        </div>
        <div className="col-sm-5">
          <div className="loan-saving">
            <h2>Account</h2>
            <ul className="nav nav-pills mb-4 mt-4" id="pills-tab" role="tablist">
              <li className="nav-item" role="presentation">
                <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Loans</button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Savings</button>
              </li>
            </ul>
            <div class="tab-content" id="pills-tabContent">
              <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabindex="0">
                <div className="card-loans">
                  <div className="d-flex flex-row">
                    <img src={credit} alt="credit" className="img-fluid" />
                    <div className="ms-3">
                      <h1>Inflow</h1>
                      <h6 className="text-black">₦ 0.00</h6>
                    </div>
                  </div>
                </div>
                <div className="card-loans mt-3">
                  <div className="d-flex flex-row">
                    <img src={debit} alt="credit" className="img-fluid" />
                    <div className="ms-3">
                      <h1 style={{color: "#EF4444"}}>Outflow</h1>
                      <h6 className="text-black">₦ 0.00</h6>
                    </div>
                  </div>
                </div>
              </div>
              <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabindex="0">
                <div className="card-loans">
                  <div className="d-flex flex-row">
                    <img src={credit} alt="credit" className="img-fluid" />
                    <div className="ms-3">
                      <h1>Inflow</h1>
                      <h6 className="text-black">₦ 0.00</h6>
                    </div>
                  </div>
                </div>
                <div className="card-loans mt-3">
                  <div className="d-flex flex-row">
                    <img src={debit} alt="credit" className="img-fluid" />
                    <div className="ms-3">
                      <h1 style={{color: "#EF4444"}}>Outflow</h1>
                      <h6 className="text-black">₦ 0.00</h6>
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

export default ReportsSave;

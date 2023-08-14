import SearchNotification from "./searchNotification";
import icon from "../../assets/comesoon.svg";


function Auctioner() {
  return (
    <div className="content home">
      <SearchNotification />
      <div className="mt-5 row mx-5">
        <div className="col-sm-12 px-0">
          <div className="pending-loan">
            <div className="d-flex flex-row">
              <h5 className="me-3">Auction</h5>
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
                      <div className="text-center my-5">
                        <img src={icon} alt="coming soon" className="img-fluid"/>
                        <h4 className="my-4">Coming Soon</h4>
                        <h6 style={{color: "#9CA3AF"}}>This feature is not available right now. It will be in Version 2.0</h6>
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

export default Auctioner;

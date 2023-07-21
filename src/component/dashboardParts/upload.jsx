import SearchNotification from "./searchNotification";
import rep from "../../assets/report.svg";


function Upload() {
  return (
    <div className="content home">
      <SearchNotification />
      <div className="mt-5 row mx-5">
        <div className="col-sm-12 px-0">
          <div className="pending-loan">
            <div className="d-flex flex-row">
              <h5 className="me-3">Bulk Imports</h5>
            </div>
          </div>
        </div>
      </div>
      <div 
      className="row justify-content-center mt-5 mx-5 members bg-white py-5 px-2"
      style={{ borderRadius: "0 0 20px 20px", minHeight: "800px" }}
      >
        <div className="col-sm-5">
          <div className="upload-sheet text-center">
            <h6>Upload Your Excel Sheet</h6>
            <img src={rep} alt="report" className="img-fluid" />
            <div>
              <a href="/imported-loan" className="btn-save">Continue to Import</a>
            </div>
          </div>
         </div>
      </div>
    </div>
  );
}

export default Upload;

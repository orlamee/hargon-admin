import SearchNotification from "./searchNotification";
import { useNavigate } from "react-router-dom";

function CreateEmailTable() {
  const navigate = useNavigate();
  return (
    <div className="content home">
      <SearchNotification />
      <div className="mt-5 row mx-5">
        <div className="col-sm-12 px-0">
          <div className="pending-loan">
            <div className="d-flex flex-row">
              <h5 className="me-3">Create Email </h5>
            </div>
            <button
              className="btn-save float-end"
              onClick={() => navigate("/create-email")}
              style={{ marginTop: "-38px" }}
            >
              Send Test Email <i className="bi bi-plus ms-2"></i>
            </button>
          </div>
        </div>
      </div>
      <div
        className="row mt-2 mx-5 members bg-white py-5 px-2"
        style={{ borderRadius: "0 0 20px 20px" }}
      >
        <div className="col">
          
        </div>
      </div>
     
    </div>
  );
}

export default CreateEmailTable;

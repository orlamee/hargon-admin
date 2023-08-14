import { Form } from "react-bootstrap";
import SearchNotification from "./searchNotification";


function AppNotification() {
  return (
    <div className="content home">
      <SearchNotification />
      <div className="mt-5 row mx-5">
        <div className="col-sm-12 px-0">
          <div className="pending-loan">
            <div className="d-flex flex-row">
              <h5 className="me-3">App Notifications</h5>
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
                      <Form className="modal-m">
                        <Form.Group className="mb-3">
                          <Form.Label>Title</Form.Label>
                          <Form.Control type="text" placeholder="Enter Title" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                          <Form.Label>Subtext</Form.Label>
                          <Form.Control type="text" placeholder="Enter Subtext" />
                        </Form.Group>
                        <Form.Group className="mb-5">
                          <Form.Label>Page Link (Button)</Form.Label>
                          <Form.Control type="text" placeholder="Enter link to the page" />
                        </Form.Group>
                        <div className="text-center">
                          <button className="btn-save">Send Notification</button>
                        </div>
                      </Form>
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

export default AppNotification;

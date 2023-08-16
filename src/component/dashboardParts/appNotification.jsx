import { Form } from "react-bootstrap";
import SearchNotification from "./searchNotification";
import { FileUploader } from "react-drag-drop-files";
import React, { useState } from "react";
import success from "../../assets/success.svg"


const fileTypes = ["JPG", "PNG"];
function AppNotification() {
  const [file, setFile] = useState(null);
  const handleChange = (file) => {
    setFile(file);
  };
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
                        <Form.Group className="mb-3">
                          <Form.Label>Add Image</Form.Label>
                          <FileUploader handleChange={handleChange} name="file" label="Upload Picture" types={fileTypes} />
                          <p>{file ? `File name: ${file[0].name}` : "no files uploaded yet"}</p>
                        </Form.Group>
                        <Form.Group className="mb-5">
                          <Form.Label>Page Link (Button)</Form.Label>
                          <Form.Control type="text" placeholder="Enter link to the page" />
                        </Form.Group>
                        <div className="text-center">
                          <button type="button" className="btn-save" data-bs-toggle="modal" data-bs-target="#appnots">Send Notification</button>
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

      <div className="modal fade vprogress" id="appnots" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className="row justify-content-center not-alert mb-4">
                <div className="col-sm-6 text-center">
                  <img src={success} alt="success" className="img-fluid" />
                  <h3 className="my-3">Notification Sent</h3>
                  <p>You have successfully sent a notification to this page link <span style={{color: "#005FEE", cursor: "pointer"}}>fttgywer545466</span></p>
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

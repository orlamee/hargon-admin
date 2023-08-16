import { Form } from "react-bootstrap";
import SearchNotification from "./searchNotification";
import { FileUploader } from "react-drag-drop-files";
import React, { useState } from "react";
import success from "../../assets/success.svg"
import phone from "../../assets/emu.svg"


const fileTypes = ["JPG", "PNG"];
function AppPrompt() {
  const [file, setFile] = useState(null);
  const handleChange = (fileList) => {
    setFile(fileList);
  };
  return (
    <div className="content home">
      <SearchNotification />
      <div className="mt-5 row mx-5">
        <div className="col-sm-12 px-0">
          <div className="pending-loan">
            <div className="d-flex flex-row">
              <h5 className="me-3">Prompt</h5>
            </div>
          </div>
        </div>
      </div>
      <div
        className="mt-2 mx-5 members bg-white py-5 px-2 view-loans"
        style={{ borderRadius: "0 0 20px 20px" }}
      >
        <div className="row justify-content-center">
          <div className="overview">
            <div className="row justify-content-center px-4">
              <div className="col-sm-6">
                <div className="details-card">
                  <div className="bg-white">
                    <img src={phone} alt="phone" className="img-fluid w-100" />
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="details-card">
                  <div className="bg-white p-4 ">
                    <Form className="modal-m">
                      <Form.Group className="mb-3">
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text" placeholder="Payment successful" />
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Label>Subtext</Form.Label>
                        <Form.Control type="text" placeholder="Your account has been credited NGN 20,000" />
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Label>Add Image</Form.Label>
                        <FileUploader handleChange={handleChange} name="file" label="Upload Picture" types={fileTypes} />
                        {/* <p>{file ? `File name: ${file[0].name}` : "no files uploaded yet"}</p> */}
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Label>Choose User Category</Form.Label>
                        <select class="form-select" aria-label="Default select example">
                          <option selected>Open this select menu</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </select>
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Label>Date</Form.Label>
                        <Form.Control type="date" placeholder="Enter link to the page" />
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Label>Time</Form.Label>
                        <Form.Control type="time" placeholder="" />
                      </Form.Group>
                      <div className="d-flex flex-row justify-content-center my-5">
                        <button type="button" className="btn-prompt me-2">Test Prompt</button>
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
                  <h3 className="my-3">Prompt Sent</h3>
                  <p>You have successfully sent a prompt to all users</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppPrompt;

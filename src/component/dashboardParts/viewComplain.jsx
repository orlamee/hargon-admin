import SearchNotification from "./searchNotification";
import {Form } from "react-bootstrap";

function ViewComplain() {
  return (
    <div className="content home">
      <SearchNotification />
      <div className="mt-5 row mx-5">
        <div className="col-sm-12 px-0">
          <div className="pending-loan">
            <div className="d-flex flex-row">
              <h5 className="me-3">
                <a href="/support">
                  <i
                    className="bi bi-chevron-left me-2"
                    style={{ color: "#228B22" }}
                  ></i>
                </a>
                View Complain
              </h5>
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
                      <div className="view-com my-3">
                        <h4>
                          Michael Opara -{" "}
                          <span style={{ color: "#005FEE" }}>
                            MichaelOpara88@gmail.com
                          </span>{" "}
                        </h4>
                        <h4 className="my-4">
                          Having Issues Uploading Documents for kyc
                        </h4>
                        <p>
                          Hello, <br />I am having issues uploading documents
                          for KYC verification. I am getting frustrated already.
                          Please respond ASAP Thank You
                        </p>
                        <div className="text-end mt-5">
                          <button
                            className="btn-save"
                            data-bs-toggle="modal"
                            data-bs-target="#reply-email"
                          >
                            Reply Email
                          </button>
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
        className="modal fade modal-m"
        id="reply-email"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title">Reply Email</h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="inner-card">
                <div className="row">
                  <div className="col-sm-12">
                    <div className="view-com">
                      <h4>
                        Michael Opara {"<"}
                        <span style={{ color: "#9CA3AF" }}>
                          MichaelOpara88@gmail.com
                        </span>{">"}
                      </h4>
                      <h4 className="my-4">
                        Having Issues Uploading Documents for kyc
                      </h4>
                      <p>
                        Hello, <br />I am having issues uploading documents
                        for KYC verification. I am getting frustrated already.
                        Please respond ASAP Thank You
                      </p>
                      <Form>
                        <Form.Group className="mb-3">
                          <Form.Control as="textarea" rows={5} />
                        </Form.Group>
                        <div className="text-end">
                          <button className="btn-save">Send Email</button>
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

export default ViewComplain;

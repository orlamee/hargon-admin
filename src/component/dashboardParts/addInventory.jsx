import { Col, Form, Row } from "react-bootstrap";
import SearchNotification from "./searchNotification";
import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";
const fileTypes = ["JPG", "PNG"];


function AddInventory() {
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
              <h5 className="me-3"><a href="/merchant-inventory"><i className="bi bi-chevron-left me-2" style={{color: "#228B22"}}></i></a>Add Inventory</h5>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white mt-2 mx-5 p-5 app-details">
        <div className="row">
          <div className="col-sm-6 mb-3">
            <h3 className="text-black mb-4">Product Details</h3>
            <hr />
            <Form className="mt-4">
              <Form.Group className="mb-3" >
                <Form.Label>Product Name</Form.Label>
                <Form.Control type="text" placeholder="Samsung s20" />
              </Form.Group>
              <Form.Group className="mb-3" >
                <Form.Label>Product Description</Form.Label>
                <Form.Control type="text" placeholder="Samsung s20" />
              </Form.Group>
              <Row>
                <Col>
                  <Form.Group className="mb-3">
                    <Form.Label>Product ID</Form.Label>
                    <Form.Control type="text" placeholder="J345"/>
                  </Form.Group>

                </Col>
                <Col>
                  <Form.Group className="mb-3">
                    <Form.Label>Product Description</Form.Label>
                    <Form.Control type="text" placeholder="Electronics"/>
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group className="mb-3">
                    <Form.Label>Product Qunatity</Form.Label>
                    <Form.Control type="text" placeholder="10"/>
                  </Form.Group>

                </Col>
                <Col>
                  <Form.Group className="mb-3">
                    <Form.Label>Product Amount</Form.Label>
                    <Form.Control type="number" placeholder="1000"/>
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group className="mb-3">
                    <Form.Label>Tax</Form.Label>
                    <Form.Control type="text" placeholder="10"/>
                  </Form.Group>

                </Col>
                <Col>
                  <Form.Group className="mb-3">
                    <Form.Label>Date Added</Form.Label>
                    <Form.Control type="date"/>
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group className="mb-3">
                    <Form.Label>Brand</Form.Label>
                    <Form.Control type="text" placeholder="Samsung"/>
                  </Form.Group>

                </Col>
                <Col>
                  <Form.Group className="mb-3">
                    <Form.Label>Status</Form.Label>
                    <Form.Control type="text" placeholder="Brand New"/>
                  </Form.Group>
                </Col>
              </Row>
              <Form.Group className="mb-3">
                <Form.Label>Product Images</Form.Label>
                <FileUploader handleChange={handleChange} name="file" label="Upload Picture" types={fileTypes} />
                <p>{file ? `File name: ${file[0].name}` : "no files uploaded yet"}</p>
              </Form.Group>
            </Form>
          </div>
          <div className="col-sm-6">
            <h3 className="text-black mb-4">Merchant Details</h3>
            <hr />
            <Form className="mt-4">
              <Form.Group className="mb-3" >
                <Form.Label>Merchant Name</Form.Label>
                <Form.Control type="text" placeholder="John Doe" />
              </Form.Group>
              <Row>
                <Col>
                  <Form.Group className="mb-3">
                    <Form.Label>Merchant ID</Form.Label>
                    <Form.Control type="number" placeholder="234" />
                  </Form.Group>

                </Col>
                <Col>
                  <Form.Group className="mb-3">
                    <Form.Label>Merchant Phone Number</Form.Label>
                    <Form.Control type="tel" placeholder="080800222" />
                  </Form.Group>
                </Col>
              </Row>
              <button className="mt-3 btn-save">Add Products</button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddInventory;

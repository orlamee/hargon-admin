import SearchNotification from "./searchNotification";
import one from "../../assets/img.svg"


function Inventory() {
  return (
    <div className="content home">
      <SearchNotification />
      <div className="mt-5 row mx-5">
        <div className="col-sm-12 px-0">
          <div className="pending-loan">
            <div className="d-flex flex-row">
              <h5 className="me-3">Inventory</h5>
            </div>
          </div>
        </div>
      </div>
      <div
        className="row mt-2 mx-5 members bg-white py-5 px-2"
        style={{ borderRadius: "0 0 20px 20px" }}
      >
        <div className="col">
           <div className="text-end">
            <a href="/new-inventory" className="btn-save">Add <i className="bi bi-plus"></i></a>
          </div>
          <table
            className="table table-responsive"
            style={{ width: "100%" }}
            id="application"
          >
            <thead className="bg-white rounded-pill">
              <tr>
                <th>Action</th>
                <th>Product ID</th>
                <th>Product Name</th>
                <th>Merchant ID</th>
                <th>Merchant Name</th>
                <th>Catgory</th>
                <th>Quantity</th>
                <th>Amount</th>
                <th>Recently Added</th>
                <th>Image</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div className="dropdown">
                    <i
                      className="bi bi-three-dots"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    ></i>
                    <ul class="dropdown-menu details">
                      <li>
                        <a className="dropdown-item" href="/merchant-inventory/details">
                          View Details
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/">
                          Reject
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/">
                          Edit
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/">
                          Approve
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/">
                          Delete
                        </a>
                      </li>
                    </ul>
                  </div>
                </td>
                <td>#11-22</td>
                <td>Samsung</td>
                <td>#15-01</td>
                <td>Elon Musk</td>
                <td><span className="cat">Electronics</span></td>
                <td>90</td>
                <td>₦10,000</td>
                <td>-</td>
                <td><img src={one} alt="products" className="img-fluid" /></td>
                <td>
                  <span className="approved">Approved</span>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="dropdown">
                    <i
                      className="bi bi-three-dots"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    ></i>
                    <ul class="dropdown-menu details">
                      <li>
                        <a className="dropdown-item" href="/merchant-inventory/details">
                          View Details
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/">
                          Reject
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/">
                          Edit
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/">
                          Approve
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/">
                          Delete
                        </a>
                      </li>
                    </ul>
                  </div>
                </td>
                <td>#11-22</td>
                <td>Samsung</td>
                <td>#15-01</td>
                <td>Elon Musk</td>
                <td><span className="cat">Electronics</span></td>
                <td>90</td>
                <td>₦10,000</td>
                <td>-</td>
                <td><img src={one} alt="products" className="img-fluid" /></td>
                <td>
                  <span className="approved">Approved</span>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="dropdown">
                    <i
                      className="bi bi-three-dots"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    ></i>
                    <ul class="dropdown-menu details">
                      <li>
                        <a className="dropdown-item" href="/merchant-inventory/details">
                          View Details
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/">
                          Reject
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/">
                          Edit
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/">
                          Approve
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/">
                          Delete
                        </a>
                      </li>
                    </ul>
                  </div>
                </td>
                <td>#11-22</td>
                <td>Samsung</td>
                <td>#15-01</td>
                <td>Elon Musk</td>
                <td><span className="cat">Electronics</span></td>
                <td>90</td>
                <td>₦10,000</td>
                <td>-</td>
                <td><img src={one} alt="products" className="img-fluid" /></td>
                <td>
                  <span className="approved">Approved</span>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="dropdown">
                    <i
                      className="bi bi-three-dots"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    ></i>
                    <ul class="dropdown-menu details">
                      <li>
                        <a className="dropdown-item" href="/merchant-inventory/details">
                          View Details
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/">
                          Reject
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/">
                          Edit
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/">
                          Approve
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/">
                          Delete
                        </a>
                      </li>
                    </ul>
                  </div>
                </td>
                <td>#11-22</td>
                <td>Samsung</td>
                <td>#15-01</td>
                <td>Elon Musk</td>
                <td><span className="cat">Electronics</span></td>
                <td>90</td>
                <td>₦10,000</td>
                <td>-</td>
                <td><img src={one} alt="products" className="img-fluid" /></td>
                <td>
                  <span className="approved">Approved</span>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="dropdown">
                    <i
                      className="bi bi-three-dots"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    ></i>
                    <ul class="dropdown-menu details">
                      <li>
                        <a className="dropdown-item" href="/merchant-inventory/details">
                          View Details
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/">
                          Reject
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/">
                          Edit
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/">
                          Approve
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/">
                          Delete
                        </a>
                      </li>
                    </ul>
                  </div>
                </td>
                <td>#11-22</td>
                <td>Samsung</td>
                <td>#15-01</td>
                <td>Elon Musk</td>
                <td><span className="cat">Electronics</span></td>
                <td>90</td>
                <td>₦10,000</td>
                <td>-</td>
                <td><img src={one} alt="products" className="img-fluid" /></td>
                <td>
                  <span className="approved">Approved</span>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="dropdown">
                    <i
                      className="bi bi-three-dots"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    ></i>
                    <ul class="dropdown-menu details">
                      <li>
                        <a className="dropdown-item" href="/merchant-inventory/details">
                          View Details
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/">
                          Reject
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/">
                          Edit
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/">
                          Approve
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/">
                          Delete
                        </a>
                      </li>
                    </ul>
                  </div>
                </td>
                <td>#11-22</td>
                <td>Samsung</td>
                <td>#15-01</td>
                <td>Elon Musk</td>
                <td><span className="cat">Electronics</span></td>
                <td>90</td>
                <td>₦10,000</td>
                <td>-</td>
                <td><img src={one} alt="products" className="img-fluid" /></td>
                <td>
                  <span className="approved">Approved</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Inventory;

import SearchNotification from "./searchNotification";

export default function CalculateLoans() {
  return (
    <div className="content home">
      <SearchNotification />
      <div className="mt-5 row mx-5">
        <div className="col-sm-12 px-0">
          <div className="pending-loan">
            <div className="d-flex flex-row">
              <h5 className="me-3"><a href="/loan-calculator"><i className="bi bi-chevron-left me-2" style={{color: "#228B22"}}></i></a>Loan Calculator</h5>
            </div>
          </div>
        </div>
      </div>
      <div
        className="row mt-5 mx-5 members bg-white py-5 px-2"
        style={{ borderRadius: "0 0 20px 20px" }}
      >
        <div className="col">
          <table
            className="table table-responsive"
            style={{ width: "100%" }}
            id="application"
          >
            <thead className="bg-white rounded-pill">
              <tr>
                <th>#</th>
                <th>Date</th>
                <th>Days</th>
                <th>Disbursement</th>
                <th>Principal Due</th>
                <th>Principal Balance</th>
                <th>Interest Due</th>
                <th>Fees</th>
                <th>Total Due</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>15/06/2023</td>
                <td>30</td>
                <td>₦10,000</td>
                <td>30</td>
                <td>₦10,000</td>
                <td>15/06/2023</td>
                <td>0</td>
                <td>150,000</td>
              </tr>
              <tr>
                <td>2</td>
                <td>15/06/2023</td>
                <td>30</td>
                <td>₦10,000</td>
                <td>30</td>
                <td>₦10,000</td>
                <td>15/06/2023</td>
                <td>0</td>
                <td>150,000</td>
              </tr>
              <tr>
                <td>3</td>
                <td>15/06/2023</td>
                <td>30</td>
                <td>₦10,000</td>
                <td>30</td>
                <td>₦10,000</td>
                <td>15/06/2023</td>
                <td>0</td>
                <td>150,000</td>
              </tr>
              <tr>
                <td>4</td>
                <td>15/06/2023</td>
                <td>30</td>
                <td>₦10,000</td>
                <td>30</td>
                <td>₦10,000</td>
                <td>15/06/2023</td>
                <td>0</td>
                <td>150,000</td>
              </tr>
              <tr>
                <td>5</td>
                <td>15/06/2023</td>
                <td>30</td>
                <td>₦10,000</td>
                <td>30</td>
                <td>₦10,000</td>
                <td>15/06/2023</td>
                <td>0</td>
                <td>150,000</td>
              </tr>
              <tr>
                <td>6</td>
                <td>15/06/2023</td>
                <td>30</td>
                <td>₦10,000</td>
                <td>30</td>
                <td>₦10,000</td>
                <td>15/06/2023</td>
                <td>0</td>
                <td>150,000</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

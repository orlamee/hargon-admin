/* eslint-disable jsx-a11y/anchor-is-valid */
import SearchNotification from "./searchNotification";


function Biller() {
  return (
    <div className="content home">
      <SearchNotification />
      <div className="mt-5 row mx-5">
        <div className="col-sm-12 px-0">
          <div className="pending-loan">
            <div className="d-flex flex-row">
              <h5 className="me-3">Bills</h5>
            </div>
          </div>
        </div>
      </div>
      <div
        className="row mt-2 mx-5 members bg-white py-5 px-2"
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
                <th>User ID</th>
                <th>Transaction ID</th>
                <th>Type</th>
                <th>Payment</th>
                <th>Operator</th>
                <th>Provider</th>
                <th>Cus Token</th>
                <th>Package</th>
                <th>Amount</th>
                <th>Rewards</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>#5643</td>
                <td>4357889</td>
                <td>Data</td>
                <td>Kode Hex</td>
                <td>CoralPlay</td>
                <td>MTN</td>
                <td>08165435789</td>
                <td>100MB(Daily Plan)</td>
                <td>N 100</td>
                <td>N 100</td>
                <td><span className="awaiting">Pending</span></td>
              </tr>
              <tr>
                <td>#5643</td>
                <td>4357889</td>
                <td>Data</td>
                <td>Kode Hex</td>
                <td>CoralPlay</td>
                <td>MTN</td>
                <td>08165435789</td>
                <td>100MB(Daily Plan)</td>
                <td>N 100</td>
                <td>N 100</td>
                <td><span className="approved">Approved</span></td>
              </tr>
              <tr>
                <td>#5643</td>
                <td>4357889</td>
                <td>Electricity</td>
                <td>Kode Hex</td>
                <td>CoralPlay</td>
                <td>MTN</td>
                <td>08165435789</td>
                <td>100MB(Daily Plan)</td>
                <td>N 100</td>
                <td>N 100</td>
                <td><span className="withdrawn">Declined</span></td>
              </tr>
              <tr>
                <td>#5643</td>
                <td>4357889</td>
                <td>Electricity</td>
                <td>Kode Hex</td>
                <td>CoralPlay</td>
                <td>MTN</td>
                <td>08165435789</td>
                <td>100MB(Daily Plan)</td>
                <td>N 100</td>
                <td>N 100</td>
                <td><span className="withdrawn">Declined</span></td>
              </tr>
              <tr>
                <td>#5643</td>
                <td>4357889</td>
                <td>Electricity</td>
                <td>Kode Hex</td>
                <td>CoralPlay</td>
                <td>MTN</td>
                <td>08165435789</td>
                <td>100MB(Daily Plan)</td>
                <td>N 100</td>
                <td>N 100</td>
                <td><span className="withdrawn">Declined</span></td>
              </tr>
              <tr>
                <td>#5643</td>
                <td>4357889</td>
                <td>Electricity</td>
                <td>Kode Hex</td>
                <td>CoralPlay</td>
                <td>Sporty Bet</td>
                <td>08165435789</td>
                <td>100MB(Daily Plan)</td>
                <td>N 100</td>
                <td>N 100</td>
                <td><span className="withdrawn">Declined</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Biller;

import CalculateLoans from "../component/dashboardParts/calculateLoans";
import Sidebar from "../component/dashboardParts/sidebar";


export default function LoanCalculation () {
  return (
    <div>
      <Sidebar/>
      <CalculateLoans/>
    </div>
  )
}
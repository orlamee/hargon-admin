import ComplianceTable from "../component/dashboardParts/complianceTable";
import Sidebar from "../component/dashboardParts/sidebar";


export default function CheckCompliance () {
  return (
    <div>
      <Sidebar/>
      <ComplianceTable/>
    </div>
  )
}
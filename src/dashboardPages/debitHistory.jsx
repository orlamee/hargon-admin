import DebitTableHistory from "../component/dashboardParts/debitHistoryTable";
import Sidebar from "../component/dashboardParts/sidebar";


export default function DebitHistory () {
  return (
    <div>
      <Sidebar/>
      <DebitTableHistory/>
    </div>
  )
}
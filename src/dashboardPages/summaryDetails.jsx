import ApplicationSummaryView from "../component/dashboardParts/applicationSummaryView";
import Sidebar from "../component/dashboardParts/sidebar";


export default function SummaryDetails () {
  return (
    <div>
      <Sidebar/>
      <ApplicationSummaryView/>
    </div>
  )
}
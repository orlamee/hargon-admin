import DashboardHome from "../component/dashboardParts/dashboardHome";
import Sidebar from "../component/dashboardParts/sidebar";


export default function Dashboard () {
  return (
    <div>
      <Sidebar/>
      <DashboardHome/>
    </div>
  )
}
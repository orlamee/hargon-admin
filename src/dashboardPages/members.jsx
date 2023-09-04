import MemberTables from "../component/dashboardParts/membersTable";
import Sidebar from "../component/dashboardParts/sidebar";


export default function Members () {
  return (
    <div>
      <Sidebar/>
      <MemberTables/>
    </div>
  )
}
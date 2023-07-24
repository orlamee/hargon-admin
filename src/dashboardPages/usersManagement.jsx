import ManageUsers from "../component/dashboardParts/manageUsers";
import Sidebar from "../component/dashboardParts/sidebar";


export default function UsersManagement () {
  return (
    <div>
      <Sidebar/>
      <ManageUsers/>
    </div>
  )
}
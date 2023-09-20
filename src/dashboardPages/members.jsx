import { Navigate } from "react-router-dom";
import useAuth from "../auth/auth";
import MemberTables from "../component/dashboardParts/membersTable";
import Sidebar from "../component/dashboardParts/sidebar";


export default function Members () {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }
  return (
    <div>
      <Sidebar/>
      <MemberTables/>
    </div>
  )
}
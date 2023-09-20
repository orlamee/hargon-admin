import { Navigate } from "react-router-dom";
import useAuth from "../auth/auth";
import AdminOfficer from "../component/dashboardParts/adminOfficer";
import Sidebar from "../component/dashboardParts/sidebar";


export default function AdminAccountOfficer () {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }
  return (
    <div>
      <Sidebar/>
      <AdminOfficer/>
    </div>
  )
}
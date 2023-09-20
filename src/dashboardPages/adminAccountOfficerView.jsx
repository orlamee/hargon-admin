import { Navigate } from "react-router-dom";
import useAuth from "../auth/auth";
import AdminOfficerView from "../component/dashboardParts/adminOfficerView";
import Sidebar from "../component/dashboardParts/sidebar";


export default function AdminAccountOfficerView () {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }
  return (
    <div>
      <Sidebar/>
      <AdminOfficerView/>
    </div>
  )
}
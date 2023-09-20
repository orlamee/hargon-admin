import { Navigate } from "react-router-dom";
import ManageUsers from "../component/dashboardParts/manageUsers";
import Sidebar from "../component/dashboardParts/sidebar";
import useAuth from "../auth/auth";


export default function UsersManagement () {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }
  return (
    <div>
      <Sidebar/>
      <ManageUsers/>
    </div>
  )
}
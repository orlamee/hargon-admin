import { Navigate } from "react-router-dom";
import useAuth from "../auth/auth";
import Sidebar from "../component/dashboardParts/sidebar";
import UsersImport from "../component/dashboardParts/usersImport";


export default function BulkUsers () {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }
  return (
    <div>
      <Sidebar/>
      <UsersImport/>
    </div>
  )
}
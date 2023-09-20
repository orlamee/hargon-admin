import { Navigate } from "react-router-dom";
import useAuth from "../auth/auth";
import Sidebar from "../component/dashboardParts/sidebar";
import UserBulk from "../component/dashboardParts/usersBulk";


export default function UploadUsers () {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }
  return (
    <div>
      <Sidebar/>
      <UserBulk/>
    </div>
  )
}
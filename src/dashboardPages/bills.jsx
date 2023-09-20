import { Navigate } from "react-router-dom";
import useAuth from "../auth/auth";
import Biller from "../component/dashboardParts/biller";
import Sidebar from "../component/dashboardParts/sidebar";


export default function Bills () {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }
  return (
    <div>
      <Sidebar/>
      <Biller/>
    </div>
  )
}
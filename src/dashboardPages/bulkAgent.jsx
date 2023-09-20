
import { Navigate } from "react-router-dom";
import useAuth from "../auth/auth";
import ImportAgent from "../component/dashboardParts/importAgent";
import Sidebar from "../component/dashboardParts/sidebar";


export default function BulkAgent () {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }
  return (
    <div>
      <Sidebar/>
      <ImportAgent/>
    </div>
  )
}
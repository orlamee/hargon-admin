import { Navigate } from "react-router-dom";
import useAuth from "../auth/auth";
import DecisionTable from "../component/dashboardParts/sharingTable";
import Sidebar from "../component/dashboardParts/sidebar";


export default function DecisionSharing () {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }
  return (
    <div>
      <Sidebar/>
      <DecisionTable/>
    </div>
  )
}
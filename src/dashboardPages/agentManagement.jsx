import { Navigate } from "react-router-dom";
import useAuth from "../auth/auth";
import ManageAgents from "../component/dashboardParts/manageAgents";
import Sidebar from "../component/dashboardParts/sidebar";


export default function AgentManagement () {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }
  return (
    <div>
      <Sidebar/>
      <ManageAgents/>
    </div>
  )
}
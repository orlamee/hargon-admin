import { Navigate } from "react-router-dom";
import useAuth from "../auth/auth";
import AgentBulk from "../component/dashboardParts/agentsBulk";
import Sidebar from "../component/dashboardParts/sidebar";


export default function UploadAgents () {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }
  return (
    <div>
      <Sidebar/>
      <AgentBulk/>
    </div>
  )
}
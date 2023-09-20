import { Navigate } from "react-router-dom";
import useAuth from "../auth/auth";
import SettingsAgent from "../component/dashboardParts/settingsAgents";
import Sidebar from "../component/dashboardParts/sidebar";


export default function AgentSettings () {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }
  return (
    <div>
      <Sidebar/>
      <SettingsAgent/>
    </div>
  )
}
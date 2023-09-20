import { Navigate } from "react-router-dom";
import useAuth from "../auth/auth";
import DetailsAgent from "../component/dashboardParts/detailsAgent";
import Sidebar from "../component/dashboardParts/sidebar";


export default function AgentDetails () { 
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }
  return (
    <div>
      <Sidebar/>
      <DetailsAgent/>
    </div>
  )
}
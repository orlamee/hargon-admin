import { Navigate } from "react-router-dom";
import useAuth from "../auth/auth";
import DecisionView from "../component/dashboardParts/decisionView";
import Sidebar from "../component/dashboardParts/sidebar";


export default function ViewDecision () {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }
  return (
    <div>
      <Sidebar/>
      <DecisionView/>
    </div>
  )
}
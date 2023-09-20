import { Navigate } from "react-router-dom";
import ApplicationSummaryView from "../component/dashboardParts/applicationSummaryView";
import Sidebar from "../component/dashboardParts/sidebar";
import useAuth from "../auth/auth";


export default function SummaryDetails () {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }
  return (
    <div>
      <Sidebar/>
      <ApplicationSummaryView/>
    </div>
  )
}
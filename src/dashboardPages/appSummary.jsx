import { Navigate } from "react-router-dom";
import useAuth from "../auth/auth";
import ApplicationSum from "../component/dashboardParts/applicationSum";
import Sidebar from "../component/dashboardParts/sidebar";


export default function AppSummary () {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }
  return (
    <div>
      <Sidebar/>
      <ApplicationSum/>
    </div>
  )
}
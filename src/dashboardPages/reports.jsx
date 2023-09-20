import { Navigate } from "react-router-dom";
import ReportView from "../component/dashboardParts/reportView";
import Sidebar from "../component/dashboardParts/sidebar";
import useAuth from "../auth/auth";


export default function Reports () {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }
  return (
    <div>
      <Sidebar/>
      <ReportView/>
    </div>
  )
}
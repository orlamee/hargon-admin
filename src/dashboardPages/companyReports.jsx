import { Navigate } from "react-router-dom";
import useAuth from "../auth/auth";
import ReportCompany from "../component/dashboardParts/reportCompany";
import Sidebar from "../component/dashboardParts/sidebar";


export default function CompanyReports () {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }
  return (
    <div>
      <Sidebar/>
      <ReportCompany/>
    </div>
  )
}
import { Navigate } from "react-router-dom";
import useAuth from "../auth/auth";
import ComplianceTable from "../component/dashboardParts/complianceTable";
import Sidebar from "../component/dashboardParts/sidebar";


export default function CheckCompliance () {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }
  return (
    <div>
      <Sidebar/>
      <ComplianceTable/>
    </div>
  )
}
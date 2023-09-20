import { Navigate } from "react-router-dom";
import useAuth from "../auth/auth";
import DetailCompliance from "../component/dashboardParts/detailCompliance";
import Sidebar from "../component/dashboardParts/sidebar";


export default function ComplianceDetails () {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }
  return (
    <div>
      <Sidebar/>
      <DetailCompliance/>
    </div>
  )
}
import { Navigate } from "react-router-dom";
import useAuth from "../auth/auth";
import DetailsCompany from "../component/dashboardParts/detailsCompany";
import Sidebar from "../component/dashboardParts/sidebar";


export default function CompanyDetails () {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }
  return (
    <div>
      <Sidebar/>
      <DetailsCompany/>
    </div>
  )
}
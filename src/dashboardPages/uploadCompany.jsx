import { Navigate } from "react-router-dom";
import useAuth from "../auth/auth";
import CompanyBulk from "../component/dashboardParts/companyBulk";
import Sidebar from "../component/dashboardParts/sidebar";


export default function UploadCompany () {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }
  return (
    <div>
      <Sidebar/>
      <CompanyBulk/>
    </div>
  )
}
import { Navigate } from "react-router-dom";
import CompanyManage from "../component/dashboardParts/companyManage";
import Sidebar from "../component/dashboardParts/sidebar";
import useAuth from "../auth/auth";


export default function ManageCompany () {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }
  return (
    <div>
      <Sidebar/>
      <CompanyManage/>
    </div>
  )
}
import { Navigate } from "react-router-dom";
import useAuth from "../auth/auth";
import SettingsCompany from "../component/dashboardParts/settingsCompany";
import Sidebar from "../component/dashboardParts/sidebar";


export default function CompanySettings () {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }
  return (
    <div>
      <Sidebar/>
      <SettingsCompany/>
    </div>
  )
}
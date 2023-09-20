import { Navigate } from "react-router-dom";
import SettingsJob from "../component/dashboardParts/settingsJob";
import Sidebar from "../component/dashboardParts/sidebar";
import useAuth from "../auth/auth";


export default function CareerSettings () {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }
  return (
    <div>
      <Sidebar/>
      <SettingsJob/>
    </div>
  )
}
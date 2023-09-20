import { Navigate } from "react-router-dom";
import useAuth from "../auth/auth";
import SettingsUser from "../component/dashboardParts/settingsUser";
import Sidebar from "../component/dashboardParts/sidebar";


export default function UserSettings () {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }
  return (
    <div>
      <Sidebar/>
      <SettingsUser/>
    </div>
  )
}
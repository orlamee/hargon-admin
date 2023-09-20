import { Navigate } from "react-router-dom";
import useAuth from "../auth/auth";
import SettingsApp from "../component/dashboardParts/settingsApp";
import Sidebar from "../component/dashboardParts/sidebar";


export default function AppSettings () {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }
  return (
    <div>
      <Sidebar/>
      <SettingsApp/>
    </div>
  )
}
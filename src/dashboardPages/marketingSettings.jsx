import { Navigate } from "react-router-dom";
import useAuth from "../auth/auth";
import SettingsMarket from "../component/dashboardParts/settingsMarket";
import Sidebar from "../component/dashboardParts/sidebar";


export default function MarketingSettings () {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }
  return (
    <div>
      <Sidebar/>
      <SettingsMarket/>
    </div>
  )
}
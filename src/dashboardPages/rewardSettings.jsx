import { Navigate } from "react-router-dom";
import useAuth from "../auth/auth";
import SettingsReward from "../component/dashboardParts/settingsReward";
import Sidebar from "../component/dashboardParts/sidebar";


export default function RewardSettings () {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }
  return (
    <div>
      <Sidebar/>
      <SettingsReward/>
    </div>
  )
}
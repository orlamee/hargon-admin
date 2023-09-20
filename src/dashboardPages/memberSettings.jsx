import { Navigate } from "react-router-dom";
import SettingsMember from "../component/dashboardParts/settingsMember";
import Sidebar from "../component/dashboardParts/sidebar";
import useAuth from "../auth/auth";


export default function MemberSettings () {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }
  return (
    <div>
      <Sidebar/>
      <SettingsMember/>
    </div>
  )
}
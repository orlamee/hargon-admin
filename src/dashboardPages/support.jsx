import { Navigate } from "react-router-dom";
import Sidebar from "../component/dashboardParts/sidebar";
import SupportView from "../component/dashboardParts/supportView";
import useAuth from "../auth/auth";


export default function Support () {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }
  return (
    <div>
      <Sidebar/>
      <SupportView/>
    </div>
  )
}
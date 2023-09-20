import { Navigate } from "react-router-dom";
import useAuth from "../auth/auth";
import AppDetails from "../component/dashboardParts/appDetails";
import Sidebar from "../component/dashboardParts/sidebar";


export default function ApplicationDetails () {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }
  return (
    <div>
      <Sidebar/>
      <AppDetails/>
    </div>
  )
}
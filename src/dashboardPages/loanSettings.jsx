import { Navigate } from "react-router-dom";
import useAuth from "../auth/auth";
import Settings from "../component/dashboardParts/settings";
import Sidebar from "../component/dashboardParts/sidebar";


export default function LoanSettings () {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }
  return (
    <div>
      <Sidebar/>
      <Settings/>
    </div>
  )
}
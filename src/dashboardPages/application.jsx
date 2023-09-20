import { Navigate } from "react-router-dom";
import useAuth from "../auth/auth";
import Sidebar from "../component/dashboardParts/sidebar";
import Summary from "../component/dashboardParts/summary";


export default function Application () {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }
  return (
    <div>
      <Sidebar/>
      <Summary/>
    </div>
  )
}
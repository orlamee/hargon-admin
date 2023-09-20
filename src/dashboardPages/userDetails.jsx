import { Navigate } from "react-router-dom";
import useAuth from "../auth/auth";
import DetailsUsers from "../component/dashboardParts/detailsUser";
import Sidebar from "../component/dashboardParts/sidebar";


export default function UserDetails () {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }
  
  return (
    <div>
      <Sidebar/>
      <DetailsUsers/>
    </div>
  )
}
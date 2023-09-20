import { Navigate } from "react-router-dom";
import useAuth from "../auth/auth";
import Auctioner from "../component/dashboardParts/auctioner";
import Sidebar from "../component/dashboardParts/sidebar";


export default function Auction () {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }
  return (
    <div>
      <Sidebar/>
      <Auctioner/>
    </div>
  )
}
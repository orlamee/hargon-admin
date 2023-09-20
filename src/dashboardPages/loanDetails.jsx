import { Navigate } from "react-router-dom";
import Sidebar from "../component/dashboardParts/sidebar";
import ViewDetails from "../component/dashboardParts/viewDetails";
import useAuth from "../auth/auth";


export default function LoanDetails () {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }
  return (
    <div>
      <Sidebar/>
      <ViewDetails/>
    </div>
  )
}
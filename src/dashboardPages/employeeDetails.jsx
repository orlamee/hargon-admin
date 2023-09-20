import { Navigate } from "react-router-dom";
import useAuth from "../auth/auth";
import DetailsEmployee from "../component/dashboardParts/detailsEmployee";
import Sidebar from "../component/dashboardParts/sidebar";


export default function EmployeeDetails () {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }
  return (
    <div>
      <Sidebar/>
      <DetailsEmployee/>
    </div>
  )
}
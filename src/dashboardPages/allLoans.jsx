import { Navigate } from "react-router-dom";
import useAuth from "../auth/auth";
import AllLoansParts from "../component/dashboardParts/allLoansParts";
import Sidebar from "../component/dashboardParts/sidebar";


export default function AllLoans () {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }
  return (
    <div>
      <Sidebar/>
      <AllLoansParts/>
    </div>
  )
}
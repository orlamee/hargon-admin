import { Navigate } from "react-router-dom";
import useAuth from "../auth/auth";
import LoanCalcu from "../component/dashboardParts/loanCalcu";
import Sidebar from "../component/dashboardParts/sidebar";


export default function Calculator () {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }
  return (
    <div>
      <Sidebar/>
      <LoanCalcu/>
    </div>
  )
}
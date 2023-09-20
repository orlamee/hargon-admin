import { Navigate } from "react-router-dom";
import CalculateLoans from "../component/dashboardParts/calculateLoans";
import Sidebar from "../component/dashboardParts/sidebar";
import useAuth from "../auth/auth";


export default function LoanCalculation () {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }
  return (
    <div>
      <Sidebar/>
      <CalculateLoans/>
    </div>
  )
}
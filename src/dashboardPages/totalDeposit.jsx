import { Navigate } from "react-router-dom";
import useAuth from "../auth/auth";
import Deposit from "../component/dashboardParts/deposits";
import Sidebar from "../component/dashboardParts/sidebar";


export default function TotalDeposit () {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }
  return (
    <div>
      <Sidebar/>
      <Deposit/>
    </div>
  )
}
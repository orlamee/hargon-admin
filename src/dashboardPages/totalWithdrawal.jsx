import { Navigate } from "react-router-dom";
import useAuth from "../auth/auth";
import Sidebar from "../component/dashboardParts/sidebar";
import WithDrawal from "../component/dashboardParts/withdrawal";


export default function TotalWithdrawal () {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }
  return (
    <div>
      <Sidebar/>
      <WithDrawal/>
    </div>
  )
}
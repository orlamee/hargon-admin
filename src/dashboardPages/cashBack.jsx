import { Navigate } from "react-router-dom";
import useAuth from "../auth/auth";
import CashBackTable from "../component/dashboardParts/cashbackTable";
import Sidebar from "../component/dashboardParts/sidebar";


export default function CashBack () {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }
  return (
    <div>
      <Sidebar/>
      <CashBackTable/>
    </div>
  )
}
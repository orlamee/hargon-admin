import { Navigate } from "react-router-dom";
import useAuth from "../auth/auth";
import DebitTableHistory from "../component/dashboardParts/debitHistoryTable";
import Sidebar from "../component/dashboardParts/sidebar";


export default function DebitHistory () {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }
  return (
    <div>
      <Sidebar/>
      <DebitTableHistory/>
    </div>
  )
}
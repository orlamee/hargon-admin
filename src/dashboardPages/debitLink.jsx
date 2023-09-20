import { Navigate } from "react-router-dom";
import useAuth from "../auth/auth";
import DebitTable from "../component/dashboardParts/debitTable";
import Sidebar from "../component/dashboardParts/sidebar";


export default function DebitLink () {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }
  return (
    <div>
      <Sidebar/>
      <DebitTable/>
    </div>
  )
}
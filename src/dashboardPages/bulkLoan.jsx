
import { Navigate } from "react-router-dom";
import ImportLoans from "../component/dashboardParts/importLoan";
import Sidebar from "../component/dashboardParts/sidebar";
import useAuth from "../auth/auth";


export default function BulkLoan () {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }
  return (
    <div>
      <Sidebar/>
      <ImportLoans/>
    </div>
  )
}
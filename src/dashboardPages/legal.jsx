import { Navigate } from "react-router-dom";
import useAuth from "../auth/auth";
import LegalTable from "../component/dashboardParts/legalTable";
import Sidebar from "../component/dashboardParts/sidebar";


export default function Legal () {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }
  return (
    <div>
      <Sidebar/>
      <LegalTable/>
    </div>
  )
}
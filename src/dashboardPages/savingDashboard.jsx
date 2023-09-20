import { Navigate } from "react-router-dom";
import useAuth from "../auth/auth";
import SavingsDashboadTable from "../component/dashboardParts/savingDashboardTable";
import Sidebar from "../component/dashboardParts/sidebar";


export default function SavingsDashboard () {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }
  return (
    <div>
      <Sidebar/>
      <SavingsDashboadTable/>
    </div>
  )
}
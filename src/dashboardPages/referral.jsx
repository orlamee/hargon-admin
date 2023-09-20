import { Navigate } from "react-router-dom";
import useAuth from "../auth/auth";
import ReferralTable from "../component/dashboardParts/referralTable";
import Sidebar from "../component/dashboardParts/sidebar";


export default function Referral () {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }
  return (
    <div>
      <Sidebar/>
      <ReferralTable/>
    </div>
  )
}
import { Navigate } from "react-router-dom";
import useAuth from "../auth/auth";
import Sidebar from "../component/dashboardParts/sidebar";
import WalletTable from "../component/dashboardParts/walletTable";



export default function Wallet () {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }
  return (
    <div>
      <Sidebar/>
      <WalletTable/>
    </div>
  )
}
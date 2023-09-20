import { Navigate } from "react-router-dom";
import useAuth from "../auth/auth";
import PaymentTable from "../component/dashboardParts/paymentTable";
import Sidebar from "../component/dashboardParts/sidebar";


export default function Payment () {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }
  return (
    <div>
      <Sidebar/>
      <PaymentTable/>
    </div>
  )
}
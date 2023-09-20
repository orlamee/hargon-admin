import { Navigate } from "react-router-dom";
import useAuth from "../auth/auth";
import ManageProduct from "../component/dashboardParts/manageProducts";
import Sidebar from "../component/dashboardParts/sidebar";


export default function ManageP () {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }
  return (
    <div>
      <Sidebar/>
      <ManageProduct/>
    </div>
  )
}
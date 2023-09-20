import { Navigate } from "react-router-dom";
import useAuth from "../auth/auth";
import AddApplication from "../component/dashboardParts/addApplication";
import Sidebar from "../component/dashboardParts/sidebar";


export default function NewApplication () {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }
  return (
    <div>
      <Sidebar/>
      <AddApplication/>
    </div>
  )
}
import { Navigate } from "react-router-dom";
import useAuth from "../auth/auth";
import CreateJob from "../component/dashboardParts/createJob";
import Sidebar from "../component/dashboardParts/sidebar";


export default function AddJob () {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }
  return (
    <div>
      <Sidebar/>
      <CreateJob/>
    </div>
  )
}
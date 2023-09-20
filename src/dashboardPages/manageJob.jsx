import { Navigate } from "react-router-dom";
import JobManage from "../component/dashboardParts/jobManage";
import Sidebar from "../component/dashboardParts/sidebar";
import useAuth from "../auth/auth";


export default function ManageJob () {const { isAuthenticated } = useAuth();

if (!isAuthenticated) {
  return <Navigate to="/" />;
}

  return (
    <div>
      <Sidebar/>
      <JobManage/>
    </div>
  )
}
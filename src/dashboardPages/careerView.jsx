import { Navigate } from "react-router-dom";
import useAuth from "../auth/auth";
import JobDesc from "../component/dashboardParts/jobDesc";
import Sidebar from "../component/dashboardParts/sidebar";


export default function CareerView () {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }
  return (
    <div>
      <Sidebar/>
      <JobDesc/>
    </div>
  )
}
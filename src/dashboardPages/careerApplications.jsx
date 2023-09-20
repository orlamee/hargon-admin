import { Navigate } from "react-router-dom";
import useAuth from "../auth/auth";
import JobApplications from "../component/dashboardParts/jobApplications";
import Sidebar from "../component/dashboardParts/sidebar";


export default function CareerApplications () {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }
  return (
    <div>
      <Sidebar/>
      <JobApplications/>
    </div>
  )
}
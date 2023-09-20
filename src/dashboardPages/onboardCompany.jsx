import { Navigate } from "react-router-dom";
import useAuth from "../auth/auth";
import ImportCompany from "../component/dashboardParts/importCompany";
import Sidebar from "../component/dashboardParts/sidebar";


export default function OnboardingCompany () {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }
  return (
    <div>
      <Sidebar/>
      <ImportCompany/>
    </div>
  )
}
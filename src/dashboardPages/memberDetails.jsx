import { Navigate } from "react-router-dom";
import useAuth from "../auth/auth";
import DetailsMember from "../component/dashboardParts/detailsMember";
import Sidebar from "../component/dashboardParts/sidebar";


export default function MemberDetails () {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }
  return (
    <div>
      <Sidebar/>
      <DetailsMember/>
    </div>
  )
}
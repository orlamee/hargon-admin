import { Navigate } from "react-router-dom";
import useAuth from "../auth/auth";
import CreateEmailTable from "../component/dashboardParts/createEmailTable";
import Sidebar from "../component/dashboardParts/sidebar";


export default function CreateEmail () {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }
  return (
    <div>
      <Sidebar/>
      <CreateEmailTable/>
    </div>
  )
}
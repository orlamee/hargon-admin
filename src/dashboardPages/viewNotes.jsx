import { Navigate } from "react-router-dom";
import useAuth from "../auth/auth";
import Notes from "../component/dashboardParts/notes";
import Sidebar from "../component/dashboardParts/sidebar";


export default function ViewNotes () {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }
  return (
    <div>
      <Sidebar/>
      <Notes/>
    </div>
  )
}
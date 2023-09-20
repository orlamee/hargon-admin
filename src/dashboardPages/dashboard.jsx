import React from "react";
import Sidebar from "../component/dashboardParts/sidebar";
import DashboardHome from "../component/dashboardParts/dashboardHome";
import useAuth from "../auth/auth"; // Import the custom auth hook
import { Navigate } from "react-router-dom";

export default function Dashboard() {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    // Redirect the user to the login page or show an error message
    return <Navigate to="/" />;
  }

  return (
    <div>
      <Sidebar />
      <DashboardHome />
    </div>
  );
}

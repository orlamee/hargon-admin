import React from "react";
import Sidebar from "../component/dashboardParts/sidebar";
import DashboardHome from "../component/dashboardParts/dashboardHome";
import useAuth from "../auth/auth";
import { Navigate } from "react-router-dom";

export default function Dashboard() {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }

  return (
    <div>
      <Sidebar />
      <DashboardHome />
    </div>
  );
}

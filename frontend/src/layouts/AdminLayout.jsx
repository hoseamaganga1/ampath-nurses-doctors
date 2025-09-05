// src/layouts/AdminLayout.jsx
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AdminSidebar from "../components/admin/AdminSidebar";

const AdminLayout = ({ children }) => {
  const navigate = useNavigate();

  // logout function
  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("lastActivity");
    navigate("/admin");
  };

  useEffect(() => {
    const checkAuth = () => {
      const isAuthenticated = localStorage.getItem("isAuthenticated");
      const lastActivity = parseInt(localStorage.getItem("lastActivity") || "0");
      const now = Date.now();

      if (!isAuthenticated || now - lastActivity > 30 * 60 * 1000) {
        handleLogout();
      }
    };

    checkAuth();

    const updateActivity = () => {
      localStorage.setItem("lastActivity", Date.now().toString());
    };
    window.addEventListener("mousemove", updateActivity);
    window.addEventListener("keydown", updateActivity);
    window.addEventListener("click", updateActivity);

    const interval = setInterval(checkAuth, 60 * 1000);

    return () => {
      clearInterval(interval);
      window.removeEventListener("mousemove", updateActivity);
      window.removeEventListener("keydown", updateActivity);
      window.removeEventListener("click", updateActivity);
    };
  }, [navigate]);

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Admin Sidebar */}
      <AdminSidebar onLogout={handleLogout} />

      {/* Main content (shifted to the right to avoid overlap) */}
      <div className="flex-1 ml-64 p-6">{children}</div>
    </div>
  );
};

export default AdminLayout;

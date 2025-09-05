// src/components/AdminSidebar.jsx
import React from "react";
import { Link } from "react-router-dom";
import {
  FaTachometerAlt,
  FaUpload,
  FaSync,
  FaUser,
  FaSignOutAlt,
} from "react-icons/fa";

const AdminSidebar = ({ onLogout }) => {
  return (
    <aside className="bg-white shadow-lg h-screen w-64 fixed left-0 top-0 flex flex-col">
      <div className="p-6 text-2xl font-bold text-blue-600 border-b">
        <Link to="/admin/dashboard" className="flex items-center space-x-2">
          <img src="/src/assets/logo2.png" alt="Logo" className="h-10 w-auto" />
        </Link>
      </div>
      <nav className="flex-1 px-6 py-4 space-y-4">
        <Link
          to="/admin/dashboard"
          className="flex items-center space-x-2 hover:text-blue-600"
        >
          <FaTachometerAlt /> <span>Dashboard</span>
        </Link>
        <Link
          to="/admin/upload"
          className="flex items-center space-x-2 hover:text-blue-600"
        >
          <FaUpload /> <span>Upload</span>
        </Link>
        <Link
          to="/admin/updates"
          className="flex items-center space-x-2 hover:text-blue-600"
        >
          <FaSync /> <span>Updates</span>
        </Link>
        <Link
          to="/admin/profile"
          className="flex items-center space-x-2 hover:text-blue-600"
        >
          <FaUser /> <span>Profile</span>
        </Link>
      </nav>
      <button
        onClick={onLogout}
        className="flex items-center space-x-2 text-red-600 hover:text-red-800 px-6 py-4 border-t"
      >
        <FaSignOutAlt /> <span>Logout</span>
      </button>
    </aside>
  );
};

export default AdminSidebar;

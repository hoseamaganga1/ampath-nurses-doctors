import React from "react";
import { Link } from "react-router-dom";
import {
  FaUserMd,
  FaHospital,
  FaFlask,
  FaStethoscope,
  FaTimes,
  FaHome,
} from "react-icons/fa";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <aside
      className={`
        bg-white shadow-lg  min-h-screen w-64 z-30
        fixed inset-y-0 left-0 transform transition-transform duration-300
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
        lg:translate-x-0 lg:relative
      `}
    >
      {/* Header */}
     <div className="flex justify-between items-center p-6">
  {/* Left: Logo + Title */}
  <div className="flex items-center space-x-3">
    <Link to="/" className="flex items-center space-x-2">
      <img src="/src/assets/logo2.png" alt="Logo" className="h-10 w-auto" />
      {/* <h1 className="text-2xl font-bold text-blue-600">MedDirectory</h1> */}
    </Link>
  </div>

  {/* Right: Close button (tablet/mobile only) */}
  <button
    className="lg:hidden text-gray-600 text-2xl"
    onClick={toggleSidebar}
  >
    <FaTimes />
  </button>
</div>


      {/* Navigation */}
      <nav className="flex flex-col space-y-4 px-6 mt-4">
        <Link to="/" className="flex items-center space-x-2 hover:text-blue-600">
          <FaHome /> <span>Home</span>
        </Link>
        <Link
          to="/medical-professionals"
          className="flex items-center space-x-2 hover:text-blue-600"
        >
          <FaUserMd /> <span>Medical Professionals</span>
        </Link>
        <Link
          to="/county"
          className="flex items-center space-x-2 hover:text-blue-600"
        >
          <FaStethoscope /> <span>County</span>
        </Link>
        <Link
          to="/institutions"
          className="flex items-center space-x-2 hover:text-blue-600"
        >
          <FaHospital /> <span>Institutions</span>
        </Link>
        <Link
          to="/researchers"
          className="flex items-center space-x-2 hover:text-blue-600"
        >
          <FaFlask /> <span>Researchers</span>
        </Link>
      </nav>
    </aside>
  );
};

export default Sidebar;

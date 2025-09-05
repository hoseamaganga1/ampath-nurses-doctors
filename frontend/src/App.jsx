import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { FaBars } from "react-icons/fa";

// Public pages
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import MedicalProfessionals from "./pages/MedicalProfessionals";

// Admin pages
import AdminLogin from "./pages/admin/AdminLogin";
import AdminLayout from "./layouts/AdminLayout";
import Dashboard from "./pages/admin/Dashboard";
import Upload from "./pages/admin/Upload";
import Updates from "./pages/admin/Updates";
import Profile from "./pages/admin/Profile";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <Router>
      <Routes>
        {/* ---------- ADMIN ROUTES ---------- */}
        <Route path="/admin" element={<AdminLogin />} />
        <Route
          path="/admin/*"
          element={
            <AdminLayout>
              <Routes>
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="upload" element={<Upload />} />
                <Route path="updates" element={<Updates />} />
                <Route path="profile" element={<Profile />} />
              </Routes>
            </AdminLayout>
          }
        />

        {/* ---------- PUBLIC ROUTES ---------- */}
        <Route
          path="/*" element={
            <div className="flex min-h-screen bg-gray-50 text-gray-800">
              {/* Sidebar */}
              <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />

              {/* Overlay for mobile/tablet */}
              {isOpen && (
                <div className="fixed inset-0 z-20 bg-black/40 lg:hidden" onClick={toggleSidebar}/>
              )}

              {/* Content */}
              <div className="flex-1 flex flex-col">
                {/* Top Bar with toggle (tablet & below) */}
                <header className="lg:hidden bg-white shadow p-4 flex items-center">
                  <button
                    onClick={toggleSidebar}
                    className="text-2xl text-gray-700 focus:outline-none"
                  >
                    <FaBars />
                  </button>
                  <h1 className="ml-4 font-bold text-xl text-blue-600">
                    MedDirectory
                  </h1>
                </header>

                <main className="flex-1 p-4">
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/medical-professionals" element={<MedicalProfessionals />}/>
                  </Routes>
                </main>

                {/* Footer always visible */}
                <Footer />
              </div>
            </div>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;

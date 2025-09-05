// src/pages/admin/AdminLogin.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const [isForgot, setIsForgot] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    // Dummy credentials
    const dummyUser = { username: "admin", password: "admin123" };

    if (username === dummyUser.username && password === dummyUser.password) {
      // Save login + timestamp in localStorage
      localStorage.setItem("isAuthenticated", "true");
      localStorage.setItem("lastActivity", Date.now().toString());

      navigate("/admin/dashboard"); // redirect to dashboard
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-xl w-full max-w-md p-8">
        <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">
          {isForgot ? "Forgot Password" : "Admin Login"}
        </h2>

        {!isForgot && (
          <>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full mb-4 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full mb-4 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
            />
          </>
        )}

        {isForgot && (
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full mb-4 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
          />
        )}

        {error && <p className="text-red-500 text-sm mb-3">{error}</p>}

        <button
          onClick={handleLogin}
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        >
          {isForgot ? "Reset Password" : "Sign In"}
        </button>

        {/* Centered Forgot Password */}
        {!isForgot && (
          <div className="mt-4 text-center">
            <button
              onClick={() => setIsForgot(true)}
              className="text-sm text-gray-600 hover:text-blue-600"
            >
              Forgot Password?
            </button>
          </div>
        )}

        {/* Back to login when in forgot mode */}
        {isForgot && (
          <div className="mt-4 text-center">
            <button
              onClick={() => setIsForgot(false)}
              className="text-sm text-gray-600 hover:text-blue-600"
            >
              Back to Login
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminLogin;

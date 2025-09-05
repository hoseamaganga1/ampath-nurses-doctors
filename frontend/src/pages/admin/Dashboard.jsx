// src/pages/admin/AdminDashboard.jsx
import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Bar,
} from "recharts";

const AdminDashboard = () => {
  // Dummy gender distribution
  const doctorGenderData = [
    { name: "Male Doctors", value: 35 },
    { name: "Female Doctors", value: 25 },
  ];

  const nurseGenderData = [
    { name: "Male Nurses", value: 15 },
    { name: "Female Nurses", value: 40 },
  ];

  // Dummy specialty distribution (replace with real data later)
  const specialtiesData = [
    { name: "Oncology", doctors: 10, nurses: 8 },
    { name: "HIV", doctors: 7, nurses: 6 },
    { name: "Maternal & Child Health", doctors: 6, nurses: 9 },
    { name: "Diabetes", doctors: 5, nurses: 3 },
    { name: "Hypertension", doctors: 4, nurses: 5 },
    { name: "Mental Health", doctors: 6, nurses: 7 },
    { name: "Pharmacy", doctors: 3, nurses: 4 },
    { name: "Population Health", doctors: 5, nurses: 6 },
    { name: "Anticoagulation", doctors: 2, nurses: 3 },
    { name: "Non-malignant Hematology", doctors: 3, nurses: 2 },
    { name: "OVC", doctors: 4, nurses: 5 },
    { name: "AMPATH Medical Record System", doctors: 5, nurses: 4 },
    { name: "Research", doctors: 8, nurses: 7 },
    { name: "Cardiology", doctors: 2, nurses: 1 },
    { name: "Pediatrics", doctors: 3, nurses: 4 },
    { name: "Surgery", doctors: 2, nurses: 2 },
  ];

  const COLORS = ["#4F46E5", "#F43F5E"]; // Blue & Pink

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-gray-700 mb-6">Admin Dashboard</h1>

      {/* Pie Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        {/* Doctors Pie Chart */}
        <div className="bg-white shadow-lg rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-4 text-center">
            Doctors (Male vs Female)
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={doctorGenderData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={100}
                label
              >
                {doctorGenderData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Nurses Pie Chart */}
        <div className="bg-white shadow-lg rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-4 text-center">
            Nurses (Male vs Female)
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={nurseGenderData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={100}
                label
              >
                {nurseGenderData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Bar Chart for Specialties */}
      <div className="bg-white shadow-lg rounded-xl p-6">
        <h2 className="text-xl font-semibold mb-6 text-center">
          Staff Distribution by Specialty
        </h2>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={specialtiesData} margin={{ top: 20, right: 30, left: 20, bottom: 80 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" angle={-45} textAnchor="end" interval={0} height={100} />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="doctors" fill="#4F46E5" name="Doctors" />
            <Bar dataKey="nurses" fill="#F43F5E" name="Nurses" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default AdminDashboard;

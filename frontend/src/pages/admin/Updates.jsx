// src/pages/admin/Updates.jsx
import React, { useState } from "react";
import facilities from "../../data/facilities"; // adjust path as needed


const Updates = () => {
  const [records, setRecords] = useState([
    {
      id: 1,
      fullName: "John Doe",
      title: "Doctor",
      facility: "Nairobi Hospital",
      speciality: "Oncology",
      status: "Active",
      pfNo: "PF12345",
      phone: "712345678",
      countryCode: "+254",
      email: "john@example.com",
      address: "Nairobi, Kenya",
    },
  ]);

  const [editId, setEditId] = useState(null);

  const handleEdit = (id) => {
    setEditId(id);
  };

  const handleSave = (id, updatedRecord) => {
    setRecords(records.map((rec) => (rec.id === id ? updatedRecord : rec)));
    setEditId(null);
  };

  const handleDelete = (id) => {
    setRecords(records.filter((rec) => rec.id !== id));
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Manage Records</h2>

      <table className="w-full border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2 border">Full Name</th>
            <th className="p-2 border">Title</th>
            <th className="p-2 border">Facility</th>
            <th className="p-2 border">Speciality</th>
            <th className="p-2 border">Status</th>
            <th className="p-2 border">PF No</th>
            <th className="p-2 border">Contact</th>
            <th className="p-2 border">Email</th>
            <th className="p-2 border">Address</th>
            <th className="p-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {records.map((rec) => (
            <tr key={rec.id}>
              <td className="p-2 border">{rec.fullName}</td>

              {/* Title dropdown only in edit mode */}
              <td className="p-2 border">
                {editId === rec.id ? (
                  <select
                    value={rec.title}
                    onChange={(e) =>
                      setRecords(
                        records.map((r) =>
                          r.id === rec.id ? { ...r, title: e.target.value } : r
                        )
                      )
                    }
                    className="border px-2 py-1 rounded"
                  >
                    <option value="Doctor">Doctor</option>
                    <option value="Nurse">Nurse</option>
                  </select>
                ) : (
                  rec.title
                )}
              </td>

              <td className="p-2 border">
                {editId === rec.id ? (
                  <select
                    value={rec.facility}
                    onChange={(e) =>
                      setRecords(
                        records.map((r) =>
                          r.id === rec.id
                            ? { ...r, facility: e.target.value }
                            : r
                        )
                      )
                    }
                    className="border px-2 py-1 rounded"
                  >
                    {Object.entries(facilities).map(([county, hospList]) => (
                      <optgroup key={county} label={county}>
                        {hospList.map((hosp, idx) => (
                          <option key={idx} value={hosp}>
                            {hosp}
                          </option>
                        ))}
                      </optgroup>
                    ))}
                  </select>
                ) : (
                  rec.facility
                )}
              </td>

              {/* Speciality dropdown */}
              <td className="p-2 border">
                {editId === rec.id ? (
                  <select
                    value={rec.speciality}
                    onChange={(e) =>
                      setRecords(
                        records.map((r) =>
                          r.id === rec.id
                            ? { ...r, speciality: e.target.value }
                            : r
                        )
                      )
                    }
                    className="border px-2 py-1 rounded"
                  >
                    <option value="Oncology">Oncology</option>
                    <option value="HIV">HIV</option>
                    <option value="Maternal & Child Health">
                      Maternal & Child Health
                    </option>
                    <option value="Diabetes">Diabetes</option>
                    <option value="Hypertension">Hypertension</option>
                    <option value="Mental Health">Mental Health</option>
                    <option value="Pharmacy">Pharmacy</option>
                    <option value="Population Health">Population Health</option>
                    <option value="Anticoagulation">Anticoagulation</option>
                    <option value="Non-malignant Hematology">
                      Non-malignant Hematology
                    </option>
                    <option value="OVC">OVC</option>
                    <option value="AMPATH Medical Record System">
                      AMPATH Medical Record System
                    </option>
                    <option value="Research">Research</option>
                    <option value="Cardiology">Cardiology</option>
                    <option value="Pediatrics">Pediatrics</option>
                    <option value="Surgery">Surgery</option>
                  </select>
                ) : (
                  rec.speciality
                )}
              </td>

              {/* Status always editable */}
              <td className="p-2 border">
                <select
                  value={rec.status}
                  onChange={(e) =>
                    setRecords(
                      records.map((r) =>
                        r.id === rec.id ? { ...r, status: e.target.value } : r
                      )
                    )
                  }
                  className="border px-2 py-1 rounded"
                >
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                </select>
              </td>

              <td className="p-2 border">{rec.pfNo}</td>
              <td className="p-2 border">
                {rec.countryCode} {rec.phone}
              </td>
              <td className="p-2 border">{rec.email}</td>
              <td className="p-2 border">{rec.address}</td>

              <td className="p-2 border flex gap-2">
                {editId === rec.id ? (
                  <button
                    onClick={() => handleSave(rec.id, rec)}
                    className="bg-green-500 text-white px-3 py-1 rounded"
                  >
                    Save
                  </button>
                ) : (
                  <button
                    onClick={() => handleEdit(rec.id)}
                    className="bg-blue-500 text-white px-3 py-1 rounded"
                  >
                    Edit
                  </button>
                )}
                <button
                  onClick={() => handleDelete(rec.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Updates;

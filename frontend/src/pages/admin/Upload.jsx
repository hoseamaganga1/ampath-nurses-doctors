// src/pages/admin/Upload.jsx
import React, { useState } from "react";

const facilities = {
  "Busia County": [
    "Angurai Health Centre",
    "Bokolu Health Centre",
    "Bumala A Health Centre",
    "Bumala B Health Centre",
    "Busia District Hospital",
    "Matayos Health Centre",
    "Mukhobola Health Centre",
    "Osieko Dispensary",
    "Port Victoria Sub-District Hospital",
  ],
  "Trans Nzoia County": [
    "Cherangany Health Centre",
    "Kapsara District Hospital",
    "Kitale District Hospital",
    "Moi’s Bridge Health Centre",
    "Mt. Elgon District Hospital",
  ],
  "Uasin Gishu County": [
    "Burnt Forest Sub-District Hospital",
    "Huruma Sub-District Hospital",
    "Moi Teaching and Referral Hospital (Modules 1–4)",
    "Mosoriot Rural Health Training Centre",
    "Soy Health Centre",
    "Uasin Gishu District Hospital",
    "Ziwa Sub-District Hospital",
  ],
  "Elgeyo Marakwet County": [
    "Chebiemit District Hospital",
    "Chepkorio Health Centre",
    "Iten District Hospital",
  ],
  "West Pokot County": [
    "Kacheliba District Hospital",
    "Kapenguria District Hospital",
  ],
  "Bungoma County": [
    "Endebess Sub-District Hospital",
    "Saboti Sub-District Hospital",
    "Webuye District Hospital",
  ],
  "Kisumu County": ["Chulaimbo Sub-District Hospital"],
};

const specialties = [
  "Oncology",
  "HIV",
  "Maternal & Child Health",
  "Diabetes",
  "Hypertension",
  "Mental Health",
  "Pharmacy",
  "Population Health",
  "Anticoagulation",
  "Non-malignant Hematology",
  "OVC",
  "AMPATH Medical Record System",
  "Research",
  "Cardiology",
  "Pediatrics",
  "Surgery",
];

const statusbar = ["Active", "Inactive"];

const Upload = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    title: "Doctor",
    county: "",
    facility: "",
    specialty: "",
    status: "Active",
    pfNo: "",
    countryCode: "+254",
    phone: "",
    email: "",
    address: "",
  });

  const [records, setRecords] = useState([]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setRecords([...records, formData]);
    setFormData({
      fullName: "",
      title: "Doctor",
      county: "",
      facility: "",
      specialty: "",
      status: "Active",
      pfNo: "",
      countryCode: "+254",
      phone: "",
      email: "",
      address: "",
    });
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-gray-700 mb-6">
        Upload Professionals
      </h1>

      {/* Upload Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-xl p-6 grid grid-cols-1 md:grid-cols-2 gap-4 mb-8"
      >
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={handleChange}
          className="border p-2 rounded-lg"
          required
        />

        <select
          name="title"
          value={formData.title}
          onChange={handleChange}
          className="border p-2 rounded-lg"
        >
          <option>Doctor</option>
          <option>Nurse</option>
        </select>

        {/* County dropdown */}
        <select
          name="county"
          value={formData.county}
          onChange={handleChange}
          className="border p-2 rounded-lg"
          required
        >
          <option value="">Select County</option>
          {Object.keys(facilities).map((county) => (
            <option key={county} value={county}>
              {county}
            </option>
          ))}
        </select>

        {/* Facility dropdown */}
        <select
          name="facility"
          value={formData.facility}
          onChange={handleChange}
          className="border p-2 rounded-lg"
          required
          disabled={!formData.county}
        >
          <option value="">Select Facility</option>
          {formData.county &&
            facilities[formData.county].map((fac, idx) => (
              <option key={idx} value={fac}>
                {fac}
              </option>
            ))}
        </select>

        {/* Specialty dropdown */}
        <select
          name="specialty"
          value={formData.specialty}
          onChange={handleChange}
          className="border p-2 rounded-lg"
          required
        >
          <option value="">Select Specialty</option>
          {specialties.map((spec, idx) => (
            <option key={idx} value={spec}>
              {spec}
            </option>
          ))}
        </select>

        <select
          name="status"
          value={formData.status}
          onChange={handleChange}
          className="border p-2 rounded-lg"
        >
          <option value="">Status</option>
          {statusbar.map((stat, idx) => (
            <option key={idx} value={stat}>
              {stat}
            </option>
          ))}
         
        </select>

        <input
          type="text"
          name="pfNo"
          placeholder="PF Number"
          value={formData.pfNo}
          onChange={handleChange}
          className="border p-2 rounded-lg"
        />
        {/* Phone Number with Country Code */}
        <div className="flex space-x-2">
          <select
            name="countryCode"
            value={formData.countryCode}
            onChange={handleChange}
            className="border p-2 rounded-lg w-24"
          >
            <option value="+254">🇰🇪 +254</option>
            <option value="+255">🇹🇿 +255</option>
            <option value="+256">🇺🇬 +256</option>
            <option value="+257">🇷🇼 +257</option>
            <option value="+260">🇿🇲 +260</option>
            <option value="+1">🇺🇸 +1</option>
            <option value="+44">🇬🇧 +44</option>
            {/* Add more as needed */}
          </select>

          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={(e) => {
              const value = e.target.value;
              if (/^\d{0,10}$/.test(value)) {
                setFormData({ ...formData, phone: value });
              }
            }}
            className="border p-2 rounded-lg flex-1"
            maxLength="10"
            required
          />
        </div>

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          className="border p-2 rounded-lg"
        />
        <input
          type="text"
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleChange}
          className="border p-2 rounded-lg"
        />

        <div className="col-span-1 md:col-span-2 text-right">
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
          >
            Upload
          </button>
        </div>
      </form>

      {/* Records Table */}
      <div className="bg-white shadow-lg rounded-xl p-6 overflow-x-auto">
        <h2 className="text-xl font-semibold mb-4">Uploaded Professionals</h2>
        {records.length === 0 ? (
          <p className="text-gray-500">No records uploaded yet.</p>
        ) : (
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="p-2 border">Full Name</th>
                <th className="p-2 border">Title</th>
                <th className="p-2 border">County</th>
                <th className="p-2 border">Facility</th>
                <th className="p-2 border">Specialty</th>
                <th className="p-2 border">Status</th>
                <th className="p-2 border">PF No</th>
                <th className="p-2 border">Phone</th>
                <th className="p-2 border">Email</th>
                <th className="p-2 border">Address</th>
              </tr>
            </thead>
            <tbody>
              {records.map((rec, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="p-2 border">{rec.fullName}</td>
                  <td className="p-2 border">{rec.title}</td>
                  <td className="p-2 border">{rec.county}</td>
                  <td className="p-2 border">{rec.facility}</td>
                  <td className="p-2 border">{rec.specialty}</td>
                  <td className="p-2 border">{rec.status}</td>
                  <td className="p-2 border">{rec.pfNo}</td>
                  <td className="p-2 border">
                    {rec.countryCode} {rec.phone}
                  </td>
                  <td className="p-2 border">{rec.email}</td>
                  <td className="p-2 border">{rec.address}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default Upload;

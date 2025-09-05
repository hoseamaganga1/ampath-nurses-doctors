import React, { useEffect, useState } from "react";
import api from "../axios/axiosapi";

const MainSection = () => {
  const [filters, setFilters] = useState({
    search: "",
    title: "All",
    County: "All",
    facility: "All",
    specialty: "All",
    gender: "All",
  });
  const [data, setData] = useState([]);


  useEffect(() => {
    async function fetchData() {
      try {
        const response = await api.get("http://localhost:44444/section/contents");
        console.log("Fetched professionals:", response.data);
        setData(response.data);
      } catch (error) {
        console.error("Error fetching professionals:", error);
      }
    }
    fetchData();
  }, []);

  // 🔹 Get unique counties
  const getCounties = () => [...new Set(data.map((d) => d.location))];

//   // 🔹 Get facilities filtered by county
//   const getFacilities = () => {
//     let list = data;
//     if (filters.County !== "All") {
//       list = data.filter((d) => d.location === filters.County);
//     }
//     return [...new Set(list.map((d) => d.facility))];
//   };


  // 🔹 Get facilities filtered by county
  const getFacilitiesfromData = () => {
    let list = []; 
    let data2 = data;
    if (filters.County !=='All') {data2=data.filter((d) => d.location === filters.County); }
    for (const item of data2) {
      if (!list.includes(item.hname)) {
        list.push(item.hname);
      }
    }
    console.log("Categories:", data2);
    return list;
  };
  

  // 🔹 Get facilities filtered by county
  const getCategoryfromData = () => {
    let list = []; 
    let data2 = data;
    if (filters.County !=='All') {data2=data.filter((d) => d.location === filters.County); }

    for (const item of data2) {
      if (!list.includes(item.category)) {
        list.push(item.category);
      }
    }
    return list;
  };
  
  // 🔹 Get specialties filtered by county
  const getSpecialties = () => {
    let list = data;
    if (filters.County !== "All") {
      list = data.filter((d) => d.location === filters.County);
    }
    return [...new Set(list.map((d) => d.specialty))];
  };

  // 🔹 Handle filter changes
  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  // 🔹 Final filtered professionals
  const filteredData = data.filter((doc) => {
    return (
      (filters.search === "" ||
        doc.nursename.toLowerCase().includes(filters.search.toLowerCase())) &&
      (filters.title === "All" || doc.title === filters.title) &&
      (filters.County === "All" || doc.location === filters.County) &&
      (filters.facility === "All" || doc.hname === filters.facility) &&
      (filters.specialty === "All" || doc.category === filters.specialty) &&
      (filters.gender === "All" || doc.gender === filters.gender)
    );
  });

  return (
    <main className="flex-1 p-6 bg-gray-50 min-h-screen flex gap-6">
      {/* Left Filters */}
      <aside className="w-64 bg-white shadow p-4 rounded-lg space-y-4 h-screen">
        <h2 className="text-lg font-bold text-gray-700 mb-2">Filters</h2>

        {/* Search */}
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">Search by Name</label>
          <input
            type="text"
            name="search"
            value={filters.search}
            onChange={handleFilterChange}
            placeholder="Enter name..."
            className="w-full border border-gray-300 rounded-lg px-3 py-2"
          />
        </div>

        {/* Title */}
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">Medical Title</label>
          <select
            name="title"
            value={filters.title}
            onChange={handleFilterChange}
            className="w-full border border-gray-300 rounded-lg px-3 py-2"
          >
            <option value= 'All'>All</option>
            <option value= 'Doctor'>Dr.</option>
            <option value= 'Nurse'>Nurse</option>
            
          </select>
        </div>

        {/* County */}
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">County</label>
          <select
            name="County"
            value={filters.County}
            onChange={handleFilterChange}
            className="w-full border border-gray-300 rounded-lg px-3 py-2"
          >
            <option>All</option>
            {getCounties().map((c, i) => (
              <option key={i} value={c}>{c}</option>
            ))}
          </select>
        </div>

        {/* Facility */}
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">Facility</label>
          <select
            name="facility"
            value={filters.facility}
            onChange={handleFilterChange}
            className="w-full border border-gray-300 rounded-lg px-3 py-2"
          >
            <option>All</option>
            {getFacilitiesfromData().map((f, i) => (
              <option key={i} value={f}>{f}</option>
            ))}
          </select>
        </div>

        {/* Specialty */}
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">Specialty</label>
          <select
            name="specialty"
            value={filters.specialty}
            onChange={handleFilterChange}
            className="w-full border border-gray-300 rounded-lg px-3 py-2"
          >
            <option>All</option>
            {getCategoryfromData().map((s, i) => (
              <option key={i} value={s}>{s}</option>
            ))}
          </select>
        </div>

        {/* Gender */}
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">Gender</label>
          <select
            name="gender"
            value={filters.gender}
            onChange={handleFilterChange}
            className="w-full border border-gray-300 rounded-lg px-3 py-2"
          >
            <option value={`All`}>All</option>
            <option value={`male`}>Male</option>
            <option value={`female`}>Female</option>
          </select>
        </div>
      </aside>

      {/* Results */}
      <section className="flex-1">
        <h2 className="text-xl font-bold text-gray-700 mb-4">Medical Professionals</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-3">
          {filteredData.length > 0 ? (
            filteredData.map((doc) => (
              <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-6">
  
    <div
      key={doc.id}
      className="bg-white shadow rounded-lg p-6 flex flex-col items-center text-center"
    >
      <img
        src="https://i.pinimg.com/736x/2f/a2/c9/2fa2c992a8e4e5ce630015884071ea26.jpg"
        alt={doc.name}
        className="w-20 h-20 rounded-full object-cover mb-4"
      />
      <h3 className="text-lg font-bold text-gray-800">{doc.nursename}</h3>
      <p className="text-sm text-gray-600">{doc.category}</p>
      <p className="text-sm text-gray-500">{doc.hname}</p>

      {/* Info grid inside card */}
      <div className="grid grid-cols-2 gap-x-4 gap-y-2 mt-4 text-sm text-gray-700 w-full">
        <span className="font-semibold">Title:</span>
        <span className="text-blue-600">{doc.title}</span>

        <span className="font-semibold">Status:</span>
        <span className="text-blue-600">{doc.status}</span>

        <span className="font-semibold">PF Number:</span>
        <span className="text-blue-600">{doc.pfnumber}</span>

        <span className="font-semibold">Phone:</span>
        <span className="text-blue-600">{doc.phone}</span>

        <span className="font-semibold">Address:</span>
        <span className="text-blue-600">{doc.address}</span>
      </div>
    </div>
  
</div>

            ))
          ) : (
            <p className="text-gray-600">No professionals found.</p>
          )}
        </div>
      </section>
    </main>
  );
};

export default MainSection;

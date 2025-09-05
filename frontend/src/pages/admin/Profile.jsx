// src/pages/AdminProfile.jsx
import React, { useState } from "react";

const Profile = () => {
  const [profiles, setProfiles] = useState([
    {
      id: 1,
      username: "admin1",
      email: "admin1@example.com",
      photo: "https://i.pinimg.com/736x/8d/16/90/8d16902ae35c1e982c2990ff85fa11fb.jpg",
    },
    {
      id: 2,
      username: "admin2",
      email: "admin2@example.com",
      photo: "https://i.pinimg.com/736x/8d/16/90/8d16902ae35c1e982c2990ff85fa11fb.jpg",
    },
  ]);

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    photo: "",
  });

  const [preview, setPreview] = useState(null);
  const [editingId, setEditingId] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({ ...formData, photo: reader.result });
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingId) {
      setProfiles(
        profiles.map((p) =>
          p.id === editingId ? { ...p, ...formData, id: editingId } : p
        )
      );
      setEditingId(null);
    } else {
      setProfiles([
        ...profiles,
        {
          id: Date.now(),
          ...formData,
          photo: formData.photo || "https://i.pinimg.com/736x/8d/16/90/8d16902ae35c1e982c2990ff85fa11fb.jpg",
        },
      ]);
    }
    setFormData({ username: "", email: "", password: "", photo: "" });
    setPreview(null);
  };

  const handleEdit = (profile) => {
    setFormData(profile);
    setEditingId(profile.id);
    setPreview(profile.photo);
  };

  const handleDelete = (id) => {
    setProfiles(profiles.filter((p) => p.id !== id));
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Admin Profiles</h1>

      {/* Profiles Table */}
      <div className="overflow-x-auto bg-white rounded-lg shadow mb-6">
        <table className="w-full border border-gray-200">
          <thead className="bg-gray-200 text-left">
            <tr>
              <th className="p-2 border">Photo</th>
              <th className="p-2 border">Username</th>
              <th className="p-2 border">Email</th>
              <th className="p-2 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {profiles.map((profile) => (
              <tr key={profile.id} className="hover:bg-gray-100">
                <td className="p-2 border">
                  <img
                    src={profile.photo}
                    alt={profile.username}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                </td>
                <td className="p-2 border">{profile.username}</td>
                <td className="p-2 border">{profile.email}</td>
                <td className="p-2 border">
                  <button
                    onClick={() => handleEdit(profile)}
                    className="px-3 py-1 bg-yellow-500 text-white rounded mr-2"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(profile.id)}
                    className="px-3 py-1 bg-red-600 text-white rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Create/Edit Form with Side Image Section */}
      <div className="bg-white p-6 rounded-lg shadow flex gap-6">
        {/* Form Section (2/3) */}
        <form onSubmit={handleSubmit} className="flex-[2] grid gap-4">
          <h2 className="text-2xl font-semibold mb-2">
            {editingId ? "Edit Profile" : "Create Profile"}
          </h2>

          {/* Username & Email */}
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
              required
              className="p-2 border rounded"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="p-2 border rounded"
            />
          </div>

          {/* Password & Upload */}
          <div className="grid grid-cols-2 gap-4">
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required={!editingId}
              pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
              title="Password must be at least 8 characters, include uppercase, lowercase, number, and special character."
              className="p-2 border rounded"
            />

            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="p-2 border rounded"
            />
          </div>

          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded"
          >
            {editingId ? "Update Profile" : "Create Profile"}
          </button>
        </form>

        {/* Image Preview Section (1/3) */}
        <div className="flex-[1] flex flex-col items-center justify-center border-l pl-6">
          {preview ? (
            <div className="w-40 h-40 rounded-full overflow-hidden border-2 border-gray-300 flex items-center justify-center">
              <img
                src={preview}
                alt="Preview"
                className="object-cover w-full h-full"
              />
            </div>
          ) : (
            <p className="text-gray-500 text-center">No image selected</p>
          )}
          {preview && (
            <p className="mt-2 text-sm text-gray-600 italic">
              (Image is auto-centered & cropped)
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;

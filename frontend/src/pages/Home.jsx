import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col">
      {/* Header Section */}
      <section className="bg-blue-600 text-white py-16 text-center">
        <h1 className="text-4xl md:text-6xl font-bold">Medical Directory</h1>
        <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto">
          Your trusted source to find doctors, nurses, institutions, and medical
          specialists across the country.
        </p>
      </section>

      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center py-24"
        style={{
          backgroundImage:
            "url('https://img.freepik.com/free-photo/medical-banner-with-doctor-wearing-lab-coat_23-2149611199.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-center text-white px-6">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Find Healthcare Professionals Easily
          </h2>
          <p className="text-lg mb-6 max-w-xl mx-auto">
            Search by county, specialty, institution, or role and connect with
            the right medical professionals today.
          </p>
          <Link
            to="/medical-professionals"
            className="bg-blue-500 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold"
          >
            Explore Directory
          </Link>
        </div>
      </section>

      {/* Features / Banner Section */}
      <section className="py-16 px-6 md:px-20 bg-gray-50 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-12">
          Why Use Our Medical Directory?
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg">
            <h3 className="font-bold text-lg mb-2">Find Doctors</h3>
            <p className="text-gray-600">
              Browse licensed doctors across all counties and specialties.
            </p>
          </div>
          <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg">
            <h3 className="font-bold text-lg mb-2">Nurses Directory</h3>
            <p className="text-gray-600">
              Access a wide list of qualified and registered nurses near you.
            </p>
          </div>
          <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg">
            <h3 className="font-bold text-lg mb-2">Hospitals & Institutions</h3>
            <p className="text-gray-600">
              Explore healthcare facilities and institutions across the country.
            </p>
          </div>
          <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg">
            <h3 className="font-bold text-lg mb-2">Research & Specialists</h3>
            <p className="text-gray-600">
              Find researchers, specialists, and healthcare consultants by
              expertise.
            </p>
          </div>
        </div>
      </section>

      {/* General Info Section */}
      <section className="py-16 px-6 md:px-20">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
          About Our Directory
        </h2>
        <div className="max-w-4xl mx-auto text-gray-700 leading-relaxed space-y-6 text-lg">
          <p>
            The Medical Directory is a centralized platform designed to make it
            easier for citizens and healthcare workers to connect. Whether
            you’re a patient seeking specialized treatment or a professional
            looking to network, this platform gives you access to verified
            healthcare professionals.
          </p>
          <p>
            Our goal is to improve transparency, accessibility, and trust in the
            healthcare system by providing up-to-date information on doctors,
            nurses, hospitals, researchers, and more.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;

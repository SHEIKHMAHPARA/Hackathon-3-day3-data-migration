"use client";
// import React, { useState } from "react";
// import { Switch } from "@headlessui/react";


const TeamPage = () => {
//   const [isYearly, setIsYearly] = useState(false);

  return (
    <div className="bg-gray-100 h-384 text-gray-900">
      {/* Navbar */}
      <header className="bg-white shadow-sm py-4 px-6 flex justify-between items-center">
        <h1 className="text-lg font-bold">Bandage</h1>
        <nav className="space-x-6 text-sm">
          <a href="#" className="text-gray-700">Home</a>
          <a href="#" className="text-gray-700">Product</a>
          <a href="#" className="text-gray-700">Pricing</a>
          <a href="#" className="text-gray-700">Contact</a>
        </nav>
        <div className="space-x-4">
          <a href="#" className="text-blue-500">Login</a>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">Become a member →</button>
        </div>
      </header>

      {/* Hero Section */}
      <div className="bg-white text-center py-">
        <h2 className="text-lg font-semibold text-gray-500">WHAT WE DO</h2>
        <h1 className="text-4xl font-bold">Innovation tailored for you</h1>
        <p className="mt-2 text-gray-600">Home &gt; Team</p>
      </div>
    </div>
  );
};

export default TeamPage;

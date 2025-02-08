"use client";
import React, { useState } from "react";
import { Switch } from "@headlessui/react";


const PricingPage = () => {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <div className="bg-gray-100 min-h-screen text-gray-900">
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
      <section className="bg-white text-center py-16">
        <h2 className="text-lg font-semibold text-gray-500">PRICING</h2>
        <h1 className="text-4xl font-bold">Simple Pricing</h1>
        <p className="mt-2 text-gray-600">Home &gt; Pricing</p>
      </section>

      {/* Pricing Section */}
      <section className="text-center py-16 px-4">
        <h2 className="text-3xl font-bold">Pricing</h2>
        <p className="mt-2 text-gray-500">Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics</p>
        <div className="mt-6 flex justify-center items-center space-x-4">
          <span>Monthly</span>
          <Switch
            checked={isYearly}
            onChange={setIsYearly}
            className={`${isYearly ? "bg-blue-500" : "bg-gray-300"} relative inline-flex h-6 w-11 items-center rounded-full`}
          >
            <span className="inline-block h-4 w-4 transform rounded-full bg-white transition" />
          </Switch>
          <span>Yearly</span>
          <span className="bg-blue-100 text-blue-600 px-2 py-1 text-xs font-medium rounded-lg">Save 25%</span>
        </div>

        {/* Pricing Cards */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {/* Free Plan */}
          <div className="border p-6 rounded-lg text-center">
            <h3 className="text-xl font-bold">FREE</h3>
            <p className="mt-2 text-gray-500">Organize across all apps by hand</p>
            <p className="mt-4 text-3xl font-bold">0 $<span className="text-base font-medium"> Per Month</span></p>
            <p className="mt-4 text-green-600">✔ Unlimited product updates</p>
          </div>

          {/* Standard Plan */}
          <div className="bg-gray-900 text-white p-6 rounded-lg text-center">
            <h3 className="text-xl font-bold">STANDARD</h3>
            <p className="mt-2 text-gray-300">Organize across all apps by hand</p>
            <p className="mt-4 text-3xl font-bold">9.99 $<span className="text-base font-medium"> Per Month</span></p>
            <p className="mt-4 text-green-400">✔ Unlimited product updates</p>
          </div>

          {/* Premium Plan */}
          <div className="border p-6 rounded-lg text-center">
            <h3 className="text-xl font-bold">PREMIUM</h3>
            <p className="mt-2 text-gray-500">Organize across all apps by hand</p>
            <p className="mt-4 text-3xl font-bold">19.99 $<span className="text-base font-medium"> Per Month</span></p>
            <p className="mt-4 text-green-600">✔ Unlimited product updates</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PricingPage;

"use client";
import { useState } from "react";
import { FaStar, FaHeart, FaShoppingCart, FaEye } from "react-icons/fa";

const DyShopOne = () => {
  const [selectedColor, setSelectedColor] = useState("blue");
  const colors = ["blue", "green", "orange", "black"];

  return (
    <div className="flex flex-col md:flex-row gap-8 p-6 w-full max-w-6xl mx-auto">
      {/* Left Section - Image Carousel */}
      <div className="flex flex-col items-center w-full md:w-1/2">
        <div className="relative w-full h-96 bg-gray-100 flex items-center justify-center">
          <img
            src="/carousel-inner (1).png"
            alt="Product"
            className="object-cover w-full h-full"
          />
          <button className="absolute left-4 text-gray-500 text-2xl">❮</button>
          <button className="absolute right-4 text-gray-500 text-2xl">❯</button>
        </div>
        <div className="flex gap-2 mt-4">
          <img src="/sofa1.jpeg" alt="thumb" className="w-16 h-16" />
          <img src="/single-product-1-thumb-2.jpg" alt="thumb" className="w-16 h-16" />
        </div>
      </div>

      {/* Right Section - Product Details */}
      <div className="w-full md:w-1/2 flex flex-col">
        <h2 className="text-2xl font-semibold">Floating Phone</h2>
        <div className="flex items-center gap-1 text-yellow-400 my-2">
          {[...Array(4)].map((_, i) => (
            <FaStar key={i} />
          ))}
          <FaStar className="text-gray-300" />
          <span className="text-gray-500 text-sm ml-2">10 Reviews</span>
        </div>
        <p className="text-2xl font-bold">$1,139.33</p>
        <p className="text-sm text-gray-600">Availability: <span className="text-green-500">In Stock</span></p>
        <p className="text-gray-500 mt-2">
          Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie.
        </p>
        
        {/* Color Selection */}
        <div className="flex gap-2 mt-4">
          {colors.map((color) => (
            <div
              key={color}
              className={`w-8 h-8 rounded-full cursor-pointer border-2 ${selectedColor === color ? "border-black" : "border-transparent"}`}
              style={{ backgroundColor: color }}
              onClick={() => setSelectedColor(color)}
            />
          ))}
        </div>
        
        {/* Actions */}
        <div className="flex items-center gap-4 mt-6">
          <button className="px-6 py-3 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600">
            Select Options
          </button>
          <FaHeart className="text-gray-500 text-2xl cursor-pointer hover:text-red-500" />
          <FaShoppingCart className="text-gray-500 text-2xl cursor-pointer hover:text-blue-500" />
          <FaEye className="text-gray-500 text-2xl cursor-pointer hover:text-black" />
        </div>
      </div>
    </div>
  );
};

export default DyShopOne;

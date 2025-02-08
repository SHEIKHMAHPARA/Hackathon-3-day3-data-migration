import React from "react";

const products = [
  {
    id: 1,
    image: "/fixed-height (1).png",
    title: "Graphic Design",
    department: "English Department",
    originalPrice: "$16.48",
    discountedPrice: "$6.48",
  },
  {
    id: 2,
    image: "/fixed-height (2).png",
    title: "Graphic Design",
    department: "English Department",
    originalPrice: "$16.48",
    discountedPrice: "$6.48",
  },
  {
    id: 3,
    image: "/fixed-height (3).png",
    title: "Graphic Design",
    department: "English Department",
    originalPrice: "$16.48",
    discountedPrice: "$6.48",
  },
  {
    id: 4,
    image: "/fixed-height (4).png",
    title: "Graphic Design",
    department: "English Department",
    originalPrice: "$16.48",
    discountedPrice: "$6.48",
  },
  {
    id: 5,
    image: "/fixed-height (5).png",
    title: "Graphic Design",
    department: "English Department",
    originalPrice: "$16.48",
    discountedPrice: "$6.48",
  },
  {
    id: 6,
    image: "/fixed-height (6).png",
    title: "Graphic Design",
    department: "English Department",
    originalPrice: "$16.48",
    discountedPrice: "$6.48",
  },
  {
    id: 7,
    image: "/fixed-height (7).png",
    title: "Graphic Design",
    department: "English Department",
    originalPrice: "$16.48",
    discountedPrice: "$6.48",
  },
  {
    id: 8,
    image: "/fixed-height.png",
    title: "Graphic Design",
    department: "English Department",
    originalPrice: "$16.48",
    discountedPrice: "$6.48",
  },
];

const DyShopThree: React.FC = () => {
  return (
    <section className="max-w-6xl mx-auto py-10 px-5">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">BESTSELLER PRODUCTS</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white shadow-md rounded-lg overflow-hidden">
            <img src={product.image} alt={product.title} className="w-full h-60 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900">{product.title}</h3>
              <p className="text-gray-500 text-sm">{product.department}</p>
              <div className="mt-2 flex items-center space-x-2">
                <span className="text-gray-400 line-through">{product.originalPrice}</span>
                <span className="text-green-600 font-semibold">{product.discountedPrice}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DyShopThree;

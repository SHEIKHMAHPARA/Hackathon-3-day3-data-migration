import Image from "next/image";
import { useState } from "react";

const products = [
  { title: "Men", imageUrl: "/product1.png" },
  { title: "Women", imageUrl: "/product2.png" },
  { title: "Accessories", imageUrl: "/shopproduct-3.png" },
  { title: "Kids", imageUrl: "/shopproduct-4.png" },
  { title: "Kids", imageUrl: "/shopproduct-5.png" },
  { title: "Kids", imageUrl: "/shopproduct-6.png" },
  { title: "Kids", imageUrl: "/shopproduct-7.png" },
  { title: "Kids", imageUrl: "/shopproduct-8.png" },
  { title: "Kids", imageUrl: "/shopproduct-9.png" },
  { title: "Kids", imageUrl: "/shopproduct-10.png" },
  { title: "Kids", imageUrl: "/shopproduct-11.png" },
  { title: "Kids", imageUrl: "/shopproduct-12.png" },

  
];

export default function ShopCard() {
  return (
    <div className="bg-[#FAFAFA] lg:h-[770px] h-[1750px]">
      <div className="w-full bg-[#FAFAFA] text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12 pt-20">
            <h2 className="text-[#252B42] text-[24px] leading-[32px] font-bold mb-2">
              EDITORS PICK
            </h2>
            <p className="text-gray-400 font-normal text-sm">
              Problems trying to resolve the conflict between
            </p>
          </div>
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {products.map((product, index) => (
                <div key={index} className="relative aspect-[3/4] md:aspect-auto">
                  <div className="relative h-[500px]">
                    <Image
                      src={product.imageUrl}
                      alt={product.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/20 hover:bg-black/30 transition-colors">
                      <span className="absolute left-8 bottom-8 py-3 px-16 bg-white text-[#252B42] text-base font-bold">
                        {product.title.toUpperCase()}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

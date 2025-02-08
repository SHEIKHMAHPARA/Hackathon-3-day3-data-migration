import React from "react";

const DyShopTwo = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        {/* Left Column - Image */}
        <div className="flex justify-center">
          <img 
            src="/unsplash_QANOF9iJlFs.png" 
            alt="Decor" 
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Middle Column - First Text Block */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">
            the quick fox jumps over
          </h2>
          <p className="text-gray-600">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. 
            RELIT official consequent door ENIM RELIT Mollie. Excitation venial 
            consequent sent nostrum met.
          </p>
          <p className="text-gray-600">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. 
            RELIT official consequent door ENIM RELIT Mollie. Excitation venial 
            consequent sent nostrum met.
          </p>
        </div>

        {/* Right Column - Second Text Block */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900">
            the quick fox jumps over
          </h2>
          <ul className="space-y-2 text-gray-600">
            <li> the quick fox jumps over the lazy dog</li>
            <li> the quick fox jumps over the lazy dog</li>
            <li> the quick fox jumps over the lazy dog</li>
            <li> the quick fox jumps over the lazy dog</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-6">
            the quick fox jumps over
          </h2>
          <ul className="space-y-2 text-gray-600">
            <li> the quick fox jumps over the lazy dog</li>
            <li> the quick fox jumps over the lazy dog</li>
            <li> the quick fox jumps over the lazy dog</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DyShopTwo;

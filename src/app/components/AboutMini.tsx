'use client';

const ProblemsSection = () => {
  return (
    <div className="w-full px-6 md:px-16 lg:px-32 py-12 flex flex-col md:flex-row items-start md:items-center gap-6">
      {/* Left Side */}
      <div className="md:w-1/2">
        <p className="text-red-500 text-sm font-semibold">Problems trying</p>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
          Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
        </h2>
      </div>
      
      {/* Right Side */}
      <div className="md:w-1/2 text-gray-500 text-sm">
        <p>
          Problems trying to resolve the conflict between the two major realms of Classical physics: 
          Newtonian mechanics
        </p>
      </div>
    </div>
  );
};

export default ProblemsSection;

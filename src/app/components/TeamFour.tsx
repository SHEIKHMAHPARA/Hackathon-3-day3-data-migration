import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const CTASection = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
        Start your <span className="text-blue-600">14 days free trial</span>
      </h2>
      <p className="text-gray-500 mt-2 max-w-md">
        Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent.
      </p>
      <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-md text-sm sm:text-base font-medium hover:bg-blue-700">
        Try it free now
      </button>
      <div className="flex space-x-4 mt-6">
        <a href="#" className="text-blue-600 text-2xl hover:text-blue-800">
          <FaTwitter />
        </a>
        <a href="#" className="text-blue-600 text-2xl hover:text-blue-800">
          <FaFacebookF />
        </a>
        <a href="#" className="text-blue-600 text-2xl hover:text-blue-800">
          <FaInstagram />
        </a>
        <a href="#" className="text-blue-600 text-2xl hover:text-blue-800">
          <FaLinkedinIn />
        </a>
      </div>
    </div>
  );
};

export default CTASection;

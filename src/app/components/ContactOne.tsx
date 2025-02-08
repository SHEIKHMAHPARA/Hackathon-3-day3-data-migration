'use client';

import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";



import Image from 'next/image';
import Link from 'next/link';

const ContactUs = () => {
  return (
    <div className="min-h-screen flex flex-col items-center px-6 md:px-16 lg:px-32">
      {/* Navbar */}
      <nav className="w-full flex justify-between items-center py-6">
        <h1 className="text-2xl font-bold">Bandage</h1>
        <ul className="hidden md:flex gap-6 text-gray-600">
          <li><Link href="#">Home</Link></li>
          <li><Link href="#">Product</Link></li>
          <li><Link href="#">Pricing</Link></li>
          <li><Link href="#">Contact</Link></li>
        </ul>
        <div className="flex gap-4">
          <Link href="#" className="text-blue-500">Login</Link>
          <Link href="#" className="bg-blue-500 text-white px-4 py-2 rounded-md">Become a member</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center w-full mt-12 gap-12">
        {/* Text Section */}
        <div className="w-full md:w-1/2 space-y-4">
          <p className="text-sm font-semibold text-gray-700">CONTACT US</p>
          <h2 className="text-5xl font-bold">Get in touch 
          today!</h2>
          <p className="text-gray-500">
          We know how large objects will act,<br /> 
          but things on a small scale</p>
          <p className='font-semibold w-207'>Phone ; +451 215 215 </p> 
          <p className='font-semibold w-207'>Fax : +451 215 215</p>
          <br />
                <div className="flex space-x-4">
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
        
        {/* Image Section */}
        <div className="relative w-full md:w-1/2">
          <div className="absolute inset-0 bg-pink-200 rounded-full w-[90%] h-[90%] -z-10"></div>
          <Image 
            src="/Contact.jpg" 
            alt="Shopping Girl" 
            width={500} 
            height={500} 
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

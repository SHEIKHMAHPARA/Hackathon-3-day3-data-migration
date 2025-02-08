export default function ContactSection() {
    return (
      <section className="py-16 px-4 text-center">
        <h3 className="text-sm font-semibold tracking-wide uppercase text-gray-500">Visit Our Office</h3>
        <h2 className="text-3xl font-bold text-gray-900 mt-2">We help small businesses with big ideas</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10 max-w-5xl mx-auto">
          {/* Phone Support */}
          <div className="flex flex-col items-center">
            <div className="text-blue-500 text-5xl">📞</div>
            <p className="mt-4 text-gray-700">georgia.young@example.com</p>
            <p className="text-gray-700">georgia.young@ple.com</p>
            <h4 className="mt-2 font-semibold text-gray-900">Get Support</h4>
            <button className="mt-4 px-6 py-2 border border-blue-500 text-blue-500 rounded-full hover:bg-blue-100">Submit Request</button>
          </div>
  
          {/* Location */}
          <div className="flex flex-col items-center bg-gray-900 text-white p-8 rounded-lg">
            <div className="text-blue-400 text-5xl">📍</div>
            <p className="mt-4">georgia.young@example.com</p>
            <p>georgia.young@ple.com</p>
            <h4 className="mt-2 font-semibold">Get Support</h4>
            <button className="mt-4 px-6 py-2 border border-blue-400 text-blue-400 rounded-full hover:bg-blue-800">Submit Request</button>
          </div>
  
          {/* Email Support */}
          <div className="flex flex-col items-center">
            <div className="text-blue-500 text-5xl">📧</div>
            <p className="mt-4 text-gray-700">georgia.young@example.com</p>
            <p className="text-gray-700">georgia.young@ple.com</p>
            <h4 className="mt-2 font-semibold text-gray-900">Get Support</h4>
            <button className="mt-4 px-6 py-2 border border-blue-500 text-blue-500 rounded-full hover:bg-blue-100">Submit Request</button>
          </div>
        </div>
      </section>
    );
  }
  
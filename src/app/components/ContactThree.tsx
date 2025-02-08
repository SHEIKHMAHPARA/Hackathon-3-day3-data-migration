export default function CallToAction() {
    return (
      <section className="flex flex-col items-center justify-center py-16 px-4 text-center">
        <div className="relative mb-4">
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-blue-500 text-3xl">⬇️</div>
        </div>
        <h3 className="text-sm font-semibold tracking-wide uppercase text-gray-500">We Can't WAIT TO MEET YOU</h3>
        <h2 className="text-4xl font-bold text-gray-900 mt-2">Let’s Talk</h2>
        <button className="mt-6 px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600">
          Try it free now
        </button>
      </section>
    );
  }
  
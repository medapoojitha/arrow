import React from "react";

function Hero() {
  return (
    <section className="bg-gradient-to-r from-green-100 to-green-50 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-6 lg:px-20 grid lg:grid-cols-2 gap-10 items-center">
        
        {/* Left Content */}
        <div>
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
            Grow Your Business With
            <span className="text-green-600"> Arrow Solutions</span>
          </h1>

          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            We provide modern web development, UI/UX design, and digital
            solutions to help your business grow faster and smarter.
          </p>

          <div className="mt-8 flex gap-4">
            <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl text-lg font-semibold shadow-lg transition duration-300">
              Get Started
            </button>

            <button className="border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-6 py-3 rounded-xl text-lg font-semibold transition duration-300">
              Learn More
            </button>
          </div>

          {/* Stats */}
          <div className="mt-12 flex gap-10">
            <div>
              <h2 className="text-3xl font-bold text-gray-800">150+</h2>
              <p className="text-gray-500">Projects Completed</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-800">100+</h2>
              <p className="text-gray-500">Happy Clients</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-800">5+</h2>
              <p className="text-gray-500">Years Experience</p>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
            alt="Hero"
            className="rounded-3xl shadow-2xl w-full max-w-lg"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
import React from "react";

function ServiceCard({ title, description, icon }) {
  return (
    <div className="bg-white shadow-xl rounded-2xl p-8 hover:scale-105 transition duration-300">
      
      {/* Icon */}
      <div className="text-5xl mb-5">
        {icon}
      </div>

      {/* Title */}
      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        {title}
      </h2>

      {/* Description */}
      <p className="text-gray-600 leading-relaxed">
        {description}
      </p>

      {/* Button */}
      <button className="mt-6 bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-xl transition duration-300">
        Read More
      </button>
    </div>
  );
}

export default ServiceCard;
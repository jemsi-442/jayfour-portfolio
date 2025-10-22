import React from "react";

function ServiceCard({ title, description, icon: Icon }) {
  return (
    <div className="bg-gray-800 rounded-2xl shadow-lg p-6 flex flex-col items-center text-center transform transition duration-300 hover:scale-105 hover:shadow-cyan-500/50 hover:bg-gray-700">
      <Icon className="w-12 h-12 text-cyan-400 mb-4" />
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <p className="text-gray-400 mt-2">{description}</p>
    </div>
  );
}

export default ServiceCard;

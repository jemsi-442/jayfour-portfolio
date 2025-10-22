import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white text-center px-6">
      <h1 className="text-6xl font-extrabold mb-4 animate-bounce">404</h1>
      <h2 className="text-2xl mb-6 animate-fadeIn">Oops! Page not found.</h2>
      <p className="mb-8 animate-fadeIn delay-200">
        The page you are looking for doesn’t exist or has been moved.
      </p>
      <Link
        to="/"
        className="bg-yellow-400 text-black px-6 py-3 rounded-xl font-semibold shadow-md hover:bg-yellow-500 transition transform hover:scale-105 animate-fadeIn delay-400"
      >
        Go Back Home
      </Link>

      {/* Tailwind custom animations */}
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeIn { animation: fadeIn 0.8s forwards; }
          .delay-200 { animation-delay: 0.2s; }
          .delay-400 { animation-delay: 0.4s; }
        `}
      </style>
    </div>
  );
}

export default NotFound;

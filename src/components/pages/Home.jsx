import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

const heroImages = [
  "https://images.unsplash.com/photo-1581092795369-6f223b96b3c6?auto=format&fit=crop&w=1920&q=80",
  "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1920&q=80",
  "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1920&q=80"
];

function Home() {
  const { user } = useContext(AuthContext);
  const [currentImage, setCurrentImage] = useState(0);

  // Change hero image every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="relative w-full h-screen flex flex-col items-center justify-center text-white"
      style={{
        backgroundImage: `url(${heroImages[currentImage]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 max-w-3xl">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold drop-shadow-lg animate-fadeIn animate-delay-200">
          JAYFOUR Tech Solutions
        </h1>

        <h2 className="text-lg sm:text-xl md:text-2xl mb-6 text-yellow-300 font-semibold tracking-wide animate-fadeIn animate-delay-400">
          Innovation • Security • Training
        </h2>

        {user ? (
          <p className="mb-6 text-base sm:text-lg md:text-xl animate-fadeIn animate-delay-600">
            👋 Welcome back,{" "}
            <span className="font-bold text-yellow-300">{user.username}</span>!
          </p>
        ) : (
          <p className="mb-6 text-base sm:text-lg md:text-xl animate-fadeIn animate-delay-600">
            👉 Log in to explore our exclusive services and training.
          </p>
        )}

        <p className="text-sm sm:text-base md:text-lg mb-10 leading-relaxed animate-fadeIn animate-delay-800">
          We are on a mission to build <strong>JAYFOUR TECH CAMP</strong> — a hub for
          cutting-edge skills in <strong>Programming, Cybersecurity, Training</strong> 
          and <strong>Innovation</strong>.  
          Our goal is to ensure every student and client achieves <strong>modern technology solutions</strong> 
          and accelerated growth opportunities.  
          📞 Contact us at <span className="font-bold">+255 683 186 987</span> to start your journey today!
        </p>

        <div className="flex flex-wrap justify-center gap-4 animate-fadeIn animate-delay-1000">
          {[
            { to: "/consultancy", label: "Consultancy" },
            { to: "/programming", label: "Programming" },
            { to: "/cybersecurity", label: "Cybersecurity" },
            { to: "/training", label: "Training" },
            { to: "/contact", label: "Contact" },
          ].map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="bg-white text-indigo-600 px-5 py-3 rounded-xl font-semibold shadow-md transform transition duration-300 hover:scale-105 hover:bg-gray-100"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Tailwind-like CSS animations */}
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeIn { animation: fadeIn 0.8s forwards; }
          .animate-delay-200 { animation-delay: 0.2s; }
          .animate-delay-400 { animation-delay: 0.4s; }
          .animate-delay-600 { animation-delay: 0.6s; }
          .animate-delay-800 { animation-delay: 0.8s; }
          .animate-delay-1000 { animation-delay: 1s; }
        `}
      </style>
    </div>
  );
}

export default Home;

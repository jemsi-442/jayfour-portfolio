import React from "react";
import { Link } from "react-scroll";

export default function Hero() {
  return (
    <section
      id="hero"
      className="flex flex-col justify-center items-center text-center min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white"
    >
      <h1 className="text-5xl md:text-6xl font-bold mb-4 animate-fadeIn">
        Welcome to JAYFOUR Tech
      </h1>
      <p className="text-lg md:text-2xl mb-8 animate-fadeIn delay-300">
        Ghost-Level Software & Cybersecurity Services
      </p>
      <Link
        to="about"
        smooth={true}
        duration={700}
        className="px-6 py-3 bg-white text-indigo-600 font-semibold rounded-full hover:scale-105 hover:shadow-xl transition transform cursor-pointer animate-fadeIn delay-500"
      >
        Learn More
      </Link>
    </section>
  );
}

import React from "react";

export default function About() {
  return (
    <section
      id="about"
      className="py-20 px-6 md:px-20 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100"
    >
      <h2 className="text-4xl font-bold mb-6 animate-fadeIn">About JAYFOUR Tech</h2>
      <p className="text-lg mb-4 animate-fadeIn delay-300">
        We are a Ghost-Level software development and cybersecurity firm. We craft
        solutions ranging from web development, software engineering to ethical
        hacking and advanced cybersecurity services.
      </p>
      <p className="text-lg animate-fadeIn delay-500">
        Our mission is to empower businesses with high-tech solutions and ensure
        digital safety in a fast-evolving tech world.
      </p>
    </section>
  );
}

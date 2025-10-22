import React from "react";

export default function Programming() {
  const services = [
    {
      title: "Web Development",
      description: "Full-stack web apps using React, Node.js, and modern technologies.",
    },
    {
      title: "Software Development",
      description: "Custom software solutions for business automation and scaling.",
    },
    {
      title: "Mobile Apps",
      description: "iOS & Android applications with clean UX/UI and smooth performance.",
    },
  ];

  return (
    <section className="py-20 px-6 md:px-20 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100">
      <h2 className="text-4xl font-bold mb-10">Programming Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="bg-white dark:bg-gray-700 rounded-2xl shadow p-6 transform transition duration-500 hover:scale-105 hover:shadow-xl"
          >
            <h3 className="text-xl font-semibold mb-3 text-indigo-600">{service.title}</h3>
            <p className="text-gray-600 dark:text-gray-200">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

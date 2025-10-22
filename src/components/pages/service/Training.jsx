import React from "react";

export default function Training() {
  const services = [
    {
      title: "Coding Bootcamps",
      description: "Intensive programming courses for aspiring developers.",
    },
    {
      title: "Cybersecurity Training",
      description: "Learn ethical hacking, penetration testing, and defense strategies.",
    },
    {
      title: "Workshops & Seminars",
      description: "Hands-on workshops on software development, cloud, and more.",
    },
  ];

  return (
    <section className="py-20 px-6 md:px-20 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100">
      <h2 className="text-4xl font-bold mb-10">Training Services</h2>
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

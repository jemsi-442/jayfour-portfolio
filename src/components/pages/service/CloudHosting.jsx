import React from "react";

export default function CloudHosting() {
  const services = [
    {
      title: "Cloud Servers",
      description: "High-performance cloud servers for any workload.",
    },
    {
      title: "Managed Hosting",
      description: "Fully managed hosting services with monitoring and support.",
    },
    {
      title: "Scalable Solutions",
      description: "Scale resources up or down based on your business needs.",
    },
  ];

  return (
    <section className="py-20 px-6 md:px-20 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100">
      <h2 className="text-4xl font-bold mb-10">Cloud & Hosting Services</h2>
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
 
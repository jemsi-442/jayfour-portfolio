import React from "react";

export default function Branding() {
  const services = [
    {
      title: "Logo & Visual Identity",
      description: "Professional logos, color schemes, and visual elements for your brand.",
    },
    {
      title: "Brand Guidelines",
      description: "Detailed brand manuals to maintain consistency across platforms.",
    },
    {
      title: "Marketing Materials",
      description: "Brochures, flyers, and social media content aligned with your branding.",
    },
  ];

  return (
    <section
      id="branding"
      className="py-20 px-6 md:px-20 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100"
    >
      <h2 className="text-4xl font-bold mb-10 animate-fadeIn">Branding Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-700 rounded-2xl shadow p-6 transform transition duration-500 hover:scale-105 hover:shadow-xl animate-fadeIn delay-300"
          >
            <h3 className="text-xl font-semibold mb-3 text-indigo-600">{service.title}</h3>
            <p className="text-gray-600 dark:text-gray-200">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

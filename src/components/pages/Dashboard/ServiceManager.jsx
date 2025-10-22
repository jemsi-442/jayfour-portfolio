import React from "react";
import "./ServiceManager.css"; // hii ndiyo fade-in animation CSS

const services = [
  { icon: "💻", title: "Programming", description: "Web & App Development" },
  { icon: "🎨", title: "Design", description: "UI/UX & Graphics" },
  { icon: "⚡", title: "Performance", description: "Optimization & Speed" },
  { icon: "🔒", title: "Security", description: "Cybersecurity & Hardening" },
  { icon: "☁️", title: "Cloud", description: "AWS / Azure / GCP" },
  { icon: "📊", title: "Analytics", description: "Data & Insights" }
];

const gradients = [
  "from-blue-500 via-purple-500 to-pink-500",
  "from-green-400 via-teal-500 to-blue-500",
  "from-red-400 via-orange-500 to-yellow-500",
  "from-purple-500 via-pink-500 to-red-500",
  "from-indigo-500 via-purple-600 to-pink-500",
  "from-yellow-400 via-red-400 to-pink-500"
];

export default function ServiceManager() {
  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">
        🚀 Our Services
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s, index) => (
          <div key={index} className="fade-in">
            <div
              className={`bg-gradient-to-r ${gradients[index % gradients.length]} rounded-lg p-6 shadow-lg hover:scale-105 transform transition-transform`}
            >
              <div className="text-5xl mb-3">{s.icon}</div>
              <h3 className="text-xl font-bold text-white">{s.title}</h3>
              <p className="text-white mt-2">{s.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

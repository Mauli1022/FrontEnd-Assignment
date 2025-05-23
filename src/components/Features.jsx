import React from "react";

const features = [
  {
    id: 1,
    url: "/Icon-1.svg",
    title: "User-Friendly Interface",
    description: "Our platform offers seamless task management to boost your efficiency.",
  },
  {
    id: 2,
    url: "/Icon-2.svg",
    title: "Collaborate & Share Effortlessly",
    description: "Invite team members to work together and achieve your goals faster.",
  },
  {
    id: 3,
    url: "/Icon-3.svg",
    title: "Effortless Collaboration",
    description: "Invite team members to work together and achieve your goals faster.",
  },
  {
    id: 4,
    url: "/Icon-4.svg",
    title: "Seamless Access",
    description: "Stay connected and manage your tasks on the go with ease.",
  },
];

export default function Features() {
  return (
    <section className="w-full px-4 sm:px-6 md:px-12 py-16 bg-white">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-[#0A1B39] mb-12 sm:mb-14 leading-tight">
        Transform Your Productivity with Our <br className="hidden sm:block" />
        Innovative To-Do List Features
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {features.map((feature, index) => (
          <div
            key={feature.id}
            className="bg-gray-100 rounded-xl p-6 flex flex-col items-start relative hover:shadow-lg transition-shadow duration-300 min-h-[280px] sm:min-h-[300px]"
          >
            <div className="absolute top-4 right-6 text-gray-300 text-xl sm:text-2xl font-bold">
              {String(feature.id).padStart(2, "0")}
            </div>
            <div className="bg-white rounded-lg p-3 sm:p-4 shadow-sm mb-4 w-14 sm:w-16 h-14 sm:h-16 flex items-center justify-center">
              <img
                src={feature.url}
                alt={`Feature ${feature.id}`}
                className="w-full h-full object-contain"
              />
            </div>
            <h3 className="text-base sm:text-lg font-semibold text-[#0A1B39] mb-2">
              {feature.title}
            </h3>
            <div className="flex gap-2 mb-2">
              <div className="h-1 w-5 bg-red-500 rounded-full"></div>
              <div className="h-1 w-3 bg-red-500 rounded-full"></div>
            </div>
            <p className="text-sm sm:text-base text-gray-600">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

import React, { useState } from "react";
import { BoltIcon, CubeIcon, Battery100Icon } from "@heroicons/react/24/outline";


const Specifications = () => {
  const [activeTab, setActiveTab] = useState("Performance");

  const specs = {
    Performance: [
      { label: "Top Speed", value: "45 km/h" },
      { label: "Range", value: "120 km" },
      { label: "Motor Power", value: "500W" },
    ],
    Dimensions: [
      { label: "Frame Size", value: '18" Alloy' },
      { label: "Weight", value: "22 kg" },
      { label: "Wheel Size", value: '27.5"' },
    ],
    Battery: [
      { label: "Capacity", value: "720Wh" },
      { label: "Charging Time", value: "4 hours" },
      { label: "Type", value: "Removable & Lockable" },
    ],
  };

  return (
    <section id="specs" className="bg-gradient-to-b from-gray-50 to-gray-100 py-16 px-4">
      {/* Heading */}
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-extrabold mb-4">Specifications & Performance</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Precision engineering meets cutting-edge technology — here’s what makes the Helios E-One extraordinary.
        </p>
      </div>

      {/* Tab Buttons */}
      <div className="flex justify-center gap-4 mb-10 flex-wrap">
        {[
          { name: "Performance", icon: <BoltIcon className="h-5 w-5" /> },
          { name: "Dimensions", icon: <CubeIcon className="h-5 w-5" /> },
          { name: "Battery", icon: <Battery100Icon className="h-5 w-5" /> },
        ].map((tab) => (
          <button
            key={tab.name}
            onClick={() => setActiveTab(tab.name)}
            className={`flex items-center gap-2 px-5 py-2 rounded-full font-medium shadow-sm transition-all ${
              activeTab === tab.name
                ? "bg-black text-white"
                : "bg-white hover:bg-gray-200 text-gray-800"
            }`}
          >
            {tab.icon}
            {tab.name}
          </button>
        ))}
      </div>

      {/* Specs Cards */}
      <div className="max-w-4xl mx-auto grid sm:grid-cols-2 gap-6 mb-16 transition-all">
        {specs[activeTab].map((item, idx) => (
          <div
            key={idx}
            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
          >
            <p className="text-gray-500 text-sm">{item.label}</p>
            <p className="text-xl font-bold">{item.value}</p>
          </div>
        ))}
      </div>

      {/* Stat Images */}
      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6 mb-16">
        {[
          { img: "/range-map.jpg", label: "Range Map" },
          { img: "/speedometer.jpg", label: "Top Speed" },
          { img: "/charging.jpg", label: "Charging Time" },
        ].map((stat, idx) => (
          <div
            key={idx}
            className="bg-white/60 backdrop-blur-md p-4 rounded-xl shadow-lg hover:shadow-xl transition"
          >
            <img
              src={stat.img}
              alt={stat.label}
              className="rounded-lg mb-3 w-full object-cover h-40"
            />
            <p className="font-semibold text-center">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Colors */}
      <div className="max-w-4xl mx-auto text-center">
        <h3 className="text-xl font-bold mb-6">Available Colors</h3>
        <div className="flex justify-center gap-4 flex-wrap">
          {["bg-black", "bg-red-600", "bg-blue-600", "bg-gray-400"].map((color, idx) => (
            <div
              key={idx}
              className={`${color} w-12 h-12 rounded-full border-2 border-white shadow-md cursor-pointer hover:scale-110 transition-transform`}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Specifications;

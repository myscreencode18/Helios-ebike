import React from "react";
import { Zap, BatteryCharging, Wind, Shield } from "lucide-react";

const features = [
  {
    icon: <Zap className="w-10 h-10 text-orange-500" />,
    title: "Instant Torque",
    desc: "0–30 km/h in just 3.2 seconds — effortless acceleration at your fingertips.",
  },
  {
    icon: <BatteryCharging className="w-10 h-10 text-orange-500" />,
    title: "Extended Range",
    desc: "Ride up to 120 km on a single charge thanks to our next-gen lithium battery.",
  },
  {
    icon: <Wind className="w-10 h-10 text-orange-500" />,
    title: "Aerodynamic Design",
    desc: "Engineered frame and carbon components reduce drag for optimal efficiency.",
  },
  {
    icon: <Shield className="w-10 h-10 text-orange-500" />,
    title: "Advanced Safety",
    desc: "ABS braking, smart lights, and real-time diagnostics for your safety.",
  },
];

const Features = () => {
  return (
    <section id="features" className="bg-gray-900 text-white py-20 px-4">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Designed for Power & Precision
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-16">
          Every element of the Helios E-One is built to redefine your ride —
          combining performance, sustainability, and style.
        </p>

        {/* Features Grid */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-2xl p-8 shadow-lg hover:scale-105 transition-transform"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400 text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

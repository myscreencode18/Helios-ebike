import React from "react";

const lifestyleCards = [
  {
    img: "/city-ride.jpg",
    title: "Urban Freedom",
    desc: "Glide through traffic with effortless speed.",
  },
  {
    img: "/mountain-trail.jpg",
    title: "Trail Adventures",
    desc: "Conquer off-road paths with unmatched stability.",
  },
  {
    img: "/night-ride.jpg",
    title: "Night Glow",
    desc: "Smart lighting to brighten every night journey.",
  },
  {
    img: "/beach-cruise.jpg",
    title: "Coastal Breeze",
    desc: "Ride along the shore with the wind at your back.",
  },
  {
    img: "cafe-stop.jpg",
    title: "Cafe Hopping",
    desc: "Stop anywhere, arrive in style.",
  },
  {
    img: "/sunset-ride.jpg",
    title: "Sunset Ride",
    desc: "Chase horizons with extended battery range.",
  },
];

const Lifestyle = () => {
  return (
    <section id="lifestyle" className="bg-gray-900 text-white py-20 px-4">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Live the Helios Lifestyle
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          The Helios E-One isn’t just transportation — it’s freedom, adventure,
          and style all in one ride.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {lifestyleCards.map((card, idx) => (
          <div
            key={idx}
            className="relative group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
          >
            {/* Background Image */}
            <img
              src={card.img}
              alt={card.title}
              className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
            {/* Text */}
            <div className="absolute bottom-0 p-6 z-10">
              <h3 className="text-xl font-semibold">{card.title}</h3>
              <p className="text-gray-300 text-sm">{card.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Lifestyle;

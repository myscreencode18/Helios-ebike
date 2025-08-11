import React from "react";

const testimonials = [
  {
    img: "/Alex Morgan.jpg",
    quote: "The Helios E-One completely changed my daily commute — it’s fast, fun, and eco-friendly!",
    name: "Alex Morgan",
    location: "San Francisco, CA",
  },
  {
    img: "/Sofia Ramirez.jpg",
    quote: "I ride through mountain trails every weekend now. Pure adventure in every turn.",
    name: "Sofia Ramirez",
    location: "Denver, CO",
  },
  {
    img: "/Liam Carter.jpg",
    quote: "Charging once a week is all I need. The range is insane compared to other e-bikes.",
    name: "Liam Carter",
    location: "Seattle, WA",
  },
  {
    img: "/Hannah Lee.jpg",
    quote: "It’s not just a bike — it’s a lifestyle upgrade. Everyone asks me where I got it.",
    name: "Hannah Lee",
    location: "Austin, TX",
  },
  {
    img: "/David Chen.jpg",
    quote: "Helios nailed the design and performance. It’s worth every penny.",
    name: "David Chen",
    location: "New York, NY",
  },
  {
    img: "/Emma Wilson.jpg",
    quote: "The smooth ride and smart features make it feel like the future of transport.",
    name: "Emma Wilson",
    location: "Chicago, IL",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="bg-gray-50 py-20 px-4">
      <div className="max-w-7xl mx-auto mb-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          What Riders Are Saying
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Real stories from Helios E-One riders across the country.
        </p>
      </div>

      {/* Collage Layout */}
      <div
        className="
          max-w-7xl mx-auto grid grid-cols-6 gap-6
          auto-rows-[200px] md:auto-rows-[250px]
        "
      >
        {testimonials.map((t, idx) => (
          <div
            key={idx}
            className={`
              relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl
              transform transition-all duration-500 hover:-translate-y-1 hover:rotate-1
              ${idx === 0 ? "col-span-4 row-span-2" : ""}
              ${idx === 1 ? "col-span-2 row-span-1" : ""}
              ${idx === 2 ? "col-span-2 row-span-2" : ""}
              ${idx === 3 ? "col-span-3 row-span-1" : ""}
              ${idx === 4 ? "col-span-3 row-span-1" : ""}
              ${idx === 5 ? "col-span-2 row-span-1" : ""}
            `}
          >
            <img
              src={t.img}
              alt={t.name}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
            <div className="absolute bottom-0 p-4 text-white">
              <p className="italic text-sm md:text-base mb-2">"{t.quote}"</p>
              <h4 className="font-semibold">{t.name}</h4>
              <span className="text-sm text-gray-300">{t.location}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;

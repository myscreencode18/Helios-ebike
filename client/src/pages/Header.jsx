import React, { useState } from "react";
import { Menu, X, Play } from "lucide-react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleCloseMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="relative w-full bg-black text-white overflow-hidden">
      {/* Background Image / Video */}
      <div className="absolute inset-0 z-0">
        <img
          src="/bgimage.jpg"
          alt="Helios E-Bike"
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/90"></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold tracking-wider">HELIOS</div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-sm uppercase tracking-wide">
          <li>
  <a
    href="#features"
    className="hover:text-orange-400 transition cursor-pointer"
    onClick={handleCloseMenu}
  >
    Features
  </a>
</li>
<li>
  <a
    href="#specs"
    className="hover:text-orange-400 transition cursor-pointer"
    onClick={handleCloseMenu}
  >
    Specs
  </a>
</li>
<li>
  <a
    href="#testimonials"
    className="hover:text-orange-400 transition cursor-pointer"
    onClick={handleCloseMenu}
  >
    Testimonials
  </a>
</li>
<li>
  <a
    href="#preorder"
    className="hover:text-orange-400 transition cursor-pointer"
    onClick={handleCloseMenu}
  >
    Pre-Order
  </a>
</li>

        </ul>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu */}
   {/* Mobile Menu */}
{menuOpen && (
  <div className="absolute top-0 left-0 w-full bg-black z-20 px-6 py-8 md:hidden min-h-screen flex flex-col">
    {/* Close Button */}
    <div className="flex justify-end mb-6">
      <button
        className="p-2 rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
        onClick={handleCloseMenu}
      >
        <X size={28} />
      </button>
    </div>

    {/* Menu Links */}
    <ul className="space-y-6 text-lg uppercase tracking-wide">
      <li>
        <a
          href="#home"
          onClick={handleCloseMenu}
          className="hover:text-orange-400 transition cursor-pointer"
        >
          Home
        </a>
      </li>
      <li>
        <a
          href="#features"
          onClick={handleCloseMenu}
          className="hover:text-orange-400 transition cursor-pointer"
        >
          Features
        </a>
      </li>
      <li>
        <a
          href="#specs"
          onClick={handleCloseMenu}
          className="hover:text-orange-400 transition cursor-pointer"
        >
          Specs
        </a>
      </li>
      <li>
        <a
          href="#testimonials"
          onClick={handleCloseMenu}
          className="hover:text-orange-400 transition cursor-pointer"
        >
          Testimonials
        </a>
      </li>
      <li>
        <a
          href="#preorder"
          onClick={handleCloseMenu}
          className="hover:text-orange-400 transition cursor-pointer"
        >
          Pre-Order
        </a>
      </li>
    </ul>
  </div>
)}

      {/* Hero Section */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8 pt-20 pb-32 flex flex-col items-start">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight max-w-3xl">
          Ride the Future
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-xl">
          Helios E-One — Performance. Style. Zero Emissions.
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-wrap gap-4">
          <button className="bg-gradient-to-r from-orange-500 to-orange-700 text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:scale-105 transition-transform">
            Pre-Order Now
          </button>
          <button className="flex items-center gap-2 border border-gray-300 px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition">
            <Play size={18} /> Watch Launch Film
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

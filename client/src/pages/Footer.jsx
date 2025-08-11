// Footer.jsx
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-gray-300 py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-white">Helios Bikes</h2>
          <p className="mt-3 text-gray-400">
            Powering the future of urban mobility.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#features" className="hover:text-amber-500">Features</a></li>
            <li><a href="#specifications" className="hover:text-amber-500">Specifications</a></li>
            <li><a href="#testimonials" className="hover:text-amber-500">Testimonials</a></li>
            <li><a href="#preorder" className="hover:text-amber-500">Pre-order</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
          <p>Email: support@heliosbikes.com</p>
          <p>Phone: +1 (555) 123-4567</p>
          <p>Address: 123 E-Bike Lane, Mobility City</p>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-amber-500"><FaFacebookF /></a>
            <a href="#" className="hover:text-amber-500"><FaInstagram /></a>
            <a href="#" className="hover:text-amber-500"><FaTwitter /></a>
            <a href="#" className="hover:text-amber-500"><FaYoutube /></a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Helios Bikes. All rights reserved.
      </div>
    </footer>
  );
}

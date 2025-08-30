import React, { useState } from "react";
import axios from 'axios';


const PreOrderCTA = () => {
const [loading, setLoading] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    color: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);
  try {
    const response = await axios.post('https://helios-ebike.onrender.com/api/preorders', formData, {
      headers:{
        "Content-Type": "application/json"
      }
    });
    alert('Pre-order successful! Thank you.');
    setFormData({ name: '', email: '', phone: '', color: '' });
    setIsModalOpen(false);
  } catch (error) {
    if (error.response) {
      // Backend returned an error response
      if (error.response.status === 409) {
        alert(error.response.data.message); // Show "already exists" message
      } else {
        alert('Error: ' + (error.response.data.message || 'Something went wrong.'));
      }
    } else {
      // Network or other error
      alert('Network error, please try again later.');
    }
  } 
  finally {
    setLoading(false);
  }
};


  return (
    <section
      id="preorder"
      className="relative bg-cover bg-center py-20 px-4 text-white"
      style={{
        backgroundImage: `url('/ctabg.jpg')`,
      }}
    >
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="relative max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Be the First to Ride the Future
        </h2>
        <p className="text-lg text-gray-200 mb-8">
          Secure your Helios E-One today and enjoy exclusive launch perks.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-amber-500 hover:bg-amber-600 text-black font-semibold py-3 px-8 rounded-lg transition duration-300"
          >
            Pre-order Now
          </button>
          <button
            onClick={() =>
              document.getElementById("specs")?.scrollIntoView({
                behavior: "smooth",
              })
            }
            className="border border-white hover:bg-white hover:text-black font-semibold py-3 px-8 rounded-lg transition duration-300"
          >
            Learn More
          </button>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="bg-white text-black rounded-xl p-6 w-full max-w-md relative">
            {/* Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-black text-xl"
            >
              ✕
            </button>
            <h3 className="text-2xl font-bold mb-4">Pre-order Your Helios</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2"
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2"
              />
              <select
                name="color"
                value={formData.color}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2"
                required
              >
                <option value="">Preferred Color</option>
                <option value="Black">Black</option>
                <option value="Red">Red</option>
                <option value="Silver">Silver</option>
                <option value="Custom">Custom</option>
              </select>
           <button
  type="submit"
  disabled={loading}
  className={`w-full ${
    loading ? 'bg-yellow-300 cursor-not-allowed' : 'bg-yellow-500 hover:bg-yellow-600'
  } text-black font-semibold py-3 rounded-lg transition duration-300`}
>
  {loading ? 'Submitting...' : 'Confirm Pre-order'}
</button>

            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default PreOrderCTA;

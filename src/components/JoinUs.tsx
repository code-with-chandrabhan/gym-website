import React, { useState } from "react";
import axios from "axios";

const JoinUs: React.FC = () => {
  const [form, setForm] = useState({ name: "", email: "", contact: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post("https://gym-backend-2-61kx.onrender.com/api/join", form);
      const data = res.data as { message: string };
      alert(data.message);
      setForm({ name: "", email: "", contact: "" });
    } catch (err: any) {
      alert(err.response?.data?.message || "Server error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-gradient-to-r from-black via-red-700 to-black  py-16 px-6 min-h-[600px]">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-12 max-w-7xl mx-auto">
        {/* Map Section */}
        <div className="rounded-2xl overflow-hidden shadow-2xl transform transition-transform hover:scale-105 duration-500 w-full lg:w-2/3 h-[450px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d29769.781658941534!2d72.75762295792872!3d21.143533581091543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1svesu%20gym!5e0!3m2!1sen!2sin!4v1757878234411!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Gym Location Map"
          ></iframe>
        </div>

        {/* Form Section */}
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md space-y-6"
        >
          <h3 className="text-3xl font-bold text-gray-800 text-center">
            Join Our Fitness Family
          </h3>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 transition"
            required
          />
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 transition"
            required
          />
          <input
            name="contact"
            value={form.contact}
            onChange={handleChange}
            placeholder="Contact Number"
            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 transition"
            required
          />

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-4 bg-gradient-to-r from-pink-500 to-orange-500 text-white rounded-lg font-semibold text-lg shadow-lg transform transition-transform duration-300 ${
              loading ? "opacity-70 cursor-not-allowed scale-100" : "hover:scale-105"
            }`}
          >
            {loading ? "Submitting..." : "Join Us"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default JoinUs;

import React, { useState } from "react";
import { registerUser } from "../api/api";
import { useNavigate, Link } from "react-router-dom";

const Register: React.FC = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    number: "",
    city: "",
    password: "",
  });
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    try {
      await registerUser(form);
      setMessage("✅ Registration Successful! Please Login.");
      setTimeout(() => navigate("/login"), 1500);
    } catch (error: any) {
      setMessage(error.response?.data?.message || "❌ Registration Failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center relative px-4 sm:px-6"
      style={{
        backgroundImage:
          "url('https://png.pngtree.com/thumb_back/fh260/background/20241224/pngtree-a-fully-equipped-gym-with-dumbbells-weight-machines-and-cardio-equipment-image_16843660.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Register Box */}
      <div className="relative z-10 bg-black/70 p-10 rounded-xl shadow-xl w-full max-w-md text-center text-white">
        {/* Gym Logo */}
        <div className="flex justify-center mb-6">
          <img
            src="https://seeklogo.com/images/G/gym-logo-1F3A1D2D41-seeklogo.com.png"
            alt="Gym Logo"
            className="w-16 h-16"
          />
        </div>

        <h2 className="text-3xl font-extrabold mb-8">Create an Account</h2>

        <form onSubmit={handleRegister} className="flex flex-col gap-5">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={form.name}
            onChange={handleChange}
            required
            disabled={loading}
            className="w-full p-4 rounded-lg bg-gray-900 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
            disabled={loading}
            className="w-full p-4 rounded-lg bg-gray-900 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
          />

          <input
            type="text"
            name="number"
            placeholder="Phone Number"
            value={form.number}
            onChange={handleChange}
            required
            disabled={loading}
            className="w-full p-4 rounded-lg bg-gray-900 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
          />

          <input
            type="text"
            name="city"
            placeholder="City"
            value={form.city}
            onChange={handleChange}
            disabled={loading}
            className="w-full p-4 rounded-lg bg-gray-900 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            required
            disabled={loading}
            className="w-full p-4 rounded-lg bg-gray-900 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
          />

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-4 bg-yellow-500 text-black font-semibold rounded-lg shadow-lg transition-transform duration-300 ${
              loading ? "opacity-60 cursor-not-allowed" : "hover:bg-yellow-600 hover:scale-105"
            }`}
          >
            {loading ? "Registering..." : "REGISTER"}
          </button>
        </form>

        {/* Message */}
        {message && (
          <p
            className={`mt-6 text-sm font-medium ${
              message.startsWith("✅") ? "text-green-400" : "text-red-400"
            }`}
            aria-live="polite"
          >
            {message}
          </p>
        )}

        {/* Login Link */}
        <div className="mt-8">
          <p className="text-gray-300 mb-3">Already have an account?</p>
          <Link
            to="/login"
            className="inline-block px-6 py-3 bg-blue-600 rounded-lg font-semibold text-white shadow hover:bg-blue-700 transition"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;

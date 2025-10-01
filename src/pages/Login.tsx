import React, { useState } from "react";
import { loginUser } from "../api/api"; 
import { useNavigate } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
import type { CredentialResponse } from "@react-oauth/google"; 

interface LoginProps {
  setToken: (token: string) => void;
}

interface LoginResponse {
  token: string;
  _id: string;
  name?: string;
}

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

const Login: React.FC<LoginProps> = ({ setToken }) => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState<string>(""); 
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError(""); 
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await loginUser(form);
      const data = res.data as LoginResponse;

      if (data.token && data._id) {
        setToken(data.token);
        localStorage.setItem("token", data.token);
        localStorage.setItem("userId", data._id);
        if (data.name) localStorage.setItem("userName", data.name);

        navigate("/");
      } else {
        setError("Login failed. Invalid response.");
      }
    } catch (error: any) {
      setError(error.response?.data?.message || "Invalid email or password");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSuccess = async (credentialResponse: CredentialResponse) => {
    if (credentialResponse.credential) {
      try {
        // Get plan details from localStorage (if any)
        const planName = localStorage.getItem("planName") || "";
        const duration = localStorage.getItem("duration") || "";
        const amount = localStorage.getItem("amount") || "";

        const res = await fetch(`${API_URL}/api/auth/google`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            token: credentialResponse.credential,
            planName,
            duration,
            amount,
          }),
        });

        const data = await res.json();

        if (data.token && data._id) {
          setToken(data.token);
          localStorage.setItem("token", data.token);
          localStorage.setItem("userId", data._id);
          localStorage.setItem("userName", data.name || "");

          // Clear stored plan info after success
          localStorage.removeItem("planName");
          localStorage.removeItem("duration");
          localStorage.removeItem("amount");

          navigate("/");
        } else {
          setError("Google login failed at backend");
        }
      } catch (err) {
        console.error(err);
        setError("Google login error");
      }
    } else {
      setError("No credential received from Google");
    }
  };

  const handleGoogleError = () => {
    setError("Google login failed!");
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center relative px-4 sm:px-6"
      style={{
        backgroundImage:
          "url('https://png.pngtree.com/thumb_back/fh260/background/20241224/pngtree-a-fully-equipped-gym-with-dumbbells-weight-machines-and-cardio-equipment-image_16843660.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black/30"></div>

      <div className="relative z-10 bg-black/70 p-10 rounded-xl shadow-xl w-full max-w-md text-center text-white">
        <div className="flex justify-center mb-6">
          <img
            src="https://seeklogo.com/images/G/gym-logo-1F3A1D2D41-seeklogo.com.png"
            alt="Gym Logo"
            className="w-16 h-16"
          />
        </div>

        <h2 className="text-3xl font-extrabold mb-8">Welcome!</h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <input
            placeholder="Email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full p-4 rounded-lg bg-gray-900 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
            disabled={loading}
          />
          <input
            placeholder="Password"
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            required
            className="w-full p-4 rounded-lg bg-gray-900 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
            disabled={loading}
          />

          {error && <p className="text-red-400 text-sm mt-1">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className={`w-full p-4 bg-yellow-500 text-black font-semibold rounded-lg shadow-lg transition-transform duration-300 ${
              loading ? "opacity-60 cursor-not-allowed" : "hover:bg-yellow-600 hover:scale-105"
            }`}
          >
            {loading ? "Logging in..." : "LOGIN"}
          </button>
        </form>

        <div className="mt-8">
          <p className="text-gray-300 mb-4">Don’t have an account?</p>

          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center">
            <button
              onClick={() => navigate("/register")}
              className="px-6 py-3 bg-blue-600 rounded-lg text-white font-semibold shadow hover:bg-blue-700 transition"
              disabled={loading}
            >
              Register
            </button>

            <GoogleLogin
              onSuccess={handleGoogleSuccess}
              onError={handleGoogleError}
              useOneTap
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;


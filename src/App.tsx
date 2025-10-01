import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import PlanSuccess from "./components/plans/PlanSuccess";

import Home from "./pages/Home";
import Services from "./pages/Services";
import Pricing from "./pages/Pricing";
import Trainers from "./pages/Trainers";
import Schedule from "./pages/Schedule";
import Contact from "./pages/Contact";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import About from "./pages/About";

// ScrollToTop Component
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();
  useEffect(() => window.scrollTo(0, 0), [pathname]);
  return null;
};

const App: React.FC = () => {
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken && storedToken !== "") setToken(storedToken);
    setLoading(false);
  }, []);

  useEffect(() => {
    const handleStorageChange = () => {
      const storedToken = localStorage.getItem("token");
      setToken(storedToken && storedToken !== "" ? storedToken : null);
    };
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  if (loading) return <p className="text-center mt-10">Loading...</p>;

  return (
    <Router>
      <ScrollToTop />
      {/* Navbar हमेशा दिखेगा */}
      <Navbar setToken={setToken} token={token} />
      <div className="flex flex-col min-h-screen w-full">
        <main className="flex-grow">
          <Routes>
            {!token ? (
              <>
                <Route path="/" element={<Login setToken={setToken} />} />
                <Route path="/register" element={<Register />} />
                {/* अगर login नहीं है तो Home वगैरह access ना कर पाए */}
                <Route path="*" element={<Navigate to="/" />} />
              </>
            ) : (
              <>
                <Route path="/" element={<Home />} />
                <Route path="/services" element={<Services />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/trainers" element={<Trainers />} />
                <Route path="/schedule" element={<Schedule />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/profile" element={<Profile token={token} />} />
                <Route path="/about" element={<About />} />
                <Route
                  path="/plan/success/:plan"
                  element={<PlanSuccess setToken={setToken} token={token} />}
                />
                <Route path="*" element={<Navigate to="/" />} />
              </>
            )}
          </Routes>
        </main>
        {/* Footer हमेशा दिखेगा */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;

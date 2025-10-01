import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaUserCircle, FaBars, FaTimes } from "react-icons/fa";
import { IoLogOutOutline } from "react-icons/io5";
import axios from "axios";
// import gymlogo from "../assets/gymlogo.png";

interface NavbarProps {
  setToken: React.Dispatch<React.SetStateAction<string | null>>;
  token: string | null;   // 🔥 यह लाइन add करो
}


interface User {
  name: string;
  email: string;
  city?: string;
  paymentStatus: string;
  plan?: string;
  paymentAmount?: number;
  planDuration?: number;
  planStartDate?: string;
  planEndDate?: string;
  avatar?: string;
}

// ✅ Strongly typed axios call
const getProfile = (token: string) =>
  axios.get<User>("http://localhost:5000/api/users/profile", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });


const Navbar: React.FC<NavbarProps> = ({ setToken }) => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const profileBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const fetchProfile = async () => {
      const savedToken = localStorage.getItem("token");
      if (!savedToken) {
        setUser(null);
        return;
      }
      try {
        const res = await getProfile(savedToken);
        setUser(res.data);
      } catch {
        setUser(null);
        localStorage.removeItem("token");
        navigate("/login");
      }
    };
    fetchProfile();
  }, [location, navigate]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        profileBtnRef.current &&
        !profileBtnRef.current.contains(event.target as Node)
      ) {
        setIsProfileOpen(false);
      }
    };
    if (isProfileOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isProfileOpen]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    localStorage.removeItem("userName");
    setToken(null);
    setUser(null);
    navigate("/login");
  };

  const navLinks = [
    { name: "Home", to: "/" },
    { name: "Services", to: "/services" },
    { name: "Pricing", to: "/pricing" },
    { name: "Trainers", to: "/trainers" },
    { name: "Schedule", to: "/schedule" },
    { name: "Contact", to: "/contact" },
    { name: "About", to: "/about" },
  ];

  return (
    <nav className=" text-white fixed w-full top-0 left-0 z-50">
      <div className="max-w-8xl mx-auto px-3 sm:px-6 py-2 sm:py-3 flex  justify-around items-center">
        {/* Logo --- */}
        <div className="flex items-center gap-2">
          <img
            src="https://themewagon.github.io/gymlife/img/logo.png"
            alt="GYM Logo"
            className="h-10 w-auto sm:h-10 object-contain mt-2 "
            style={{ minWidth: 54 }} // forced min width if needed
            onClick={() => navigate("/")}
          />
          {/* Only show site name (optional) */}
        </div>

        {/* Hamburger (Mobile) */}
        <button
          className="text-3xl md:hidden px-1"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Links */}
        <ul
  className={`${
    mobileMenuOpen
      ? "flex flex-col absolute top-16 left-0 w-full bg-black p-5 space-y-4 z-40"
      : "hidden"
  } md:flex md:flex-row md:space-x-8 md:static md:p-0 md:space-y-0 md:bg-transparent font-bold text-base tracking-wide overflow-hidden`}
>

          {navLinks.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                className={`
                  relative
                  px-2 py-1
                  hover:text-orange-500
                  hover:after:absolute hover:after:left-0 hover:after:-bottom-1 hover:after:w-full
                  hover:after:h-1 hover:after:bg-orange-500 transition-all
                  ${
                    location.pathname === link.to
                      ? "text-orange-500 border-b-2 border-orange-500 font-bold"
                      : "text-white"
                  }
                `}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Profile (mobile/desktop) */}
        <div className="flex items-center gap-3 sm:gap-6 relative">
          <button
            ref={profileBtnRef}
            onClick={() => setIsProfileOpen((prev) => !prev)}
            className="text-3xl cursor-pointer hover:text-orange-400 focus:outline-none"
          >
            {user?.avatar ? (
              <img
                src={user.avatar}
                alt={user.name}
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border-2 border-orange-500 object-cover shadow-md"
              />
            ) : (
              <FaUserCircle className="text-3xl sm:text-4xl text-gray-300" />
            )}
          </button>
          {isProfileOpen && (
            <div
              ref={dropdownRef}
              className="absolute   right-0 top-14 w-64 sm:w-80 bg-gradient-to-b from-gray-900 to-black text-gray-200 rounded-xl shadow-2xl border border-gray-700 z-[9999] overflow-hidden animate-fadeIn"
            >
              {user ? (
                <>
                  <div className="p-4 border-b border-gray-700 flex items-center gap-3 bg-gray-800">
                    {user.avatar ? (
                      <img
                        src={user.avatar}
                        alt={user.name}
                        className="w-12 h-12 rounded-full border-2 border-orange-500 object-cover shadow"
                      />
                    ) : (
                      <div className="w-12 h-12 min-w-[3rem] min-h-[3rem] bg-orange-500 flex items-center justify-center rounded-full text-xl font-bold shadow overflow-hidden">
                        {user.name.charAt(0).toUpperCase()}
                      </div>
                    )}
                    <div>
                      <h3 className="font-semibold text-lg">{user.name}</h3>
                      <p className="text-sm text-gray-400">{user.email}</p>
                    </div>
                  </div>
                  <div className="p-4 space-y-2 border-b border-gray-700 text-sm bg-gray-900">
                    {user.city && (
                      <p>
                        <span className="font-semibold text-orange-500">
                          City:
                        </span>{" "}
                        {user.city}
                      </p>
                    )}
                    <p>
                      <span className="font-semibold text-orange-500">
                        Plan:
                      </span>{" "}
                      {user.plan || "Not Assigned"}
                    </p>
                    <p>
                      <span className="font-semibold text-orange-500">
                        Payment:
                      </span>{" "}
                      <span
                        className={`px-2 py-1 rounded-full text-white text-xs ${
                          user.paymentStatus === "Paid"
                            ? "bg-green-600"
                            : "bg-orange-500"
                        }`}
                      >
                        {user.paymentStatus}
                      </span>
                    </p>
                    {user.planStartDate && (
                      <p>
                        <span className="font-semibold text-orange-500">
                          Start:
                        </span>{" "}
                        {new Date(user.planStartDate).toLocaleDateString()}
                      </p>
                    )}
                    {user.planEndDate && (
                      <p>
                        <span className="font-semibold text-orange-500">
                          End:
                        </span>{" "}
                        {new Date(user.planEndDate).toLocaleDateString()}
                      </p>
                    )}
                    {user.paymentAmount && (
                      <p>
                        <span className="font-semibold text-orange-500">
                          Amount:
                        </span>{" "}
                        ${user.paymentAmount}
                      </p>
                    )}
                  </div>
                  <div className="p-4 flex flex-col gap-3 bg-gray-800">
                    <button
                      onClick={handleLogout}
                      className="flex-1 flex items-center justify-center gap-2 bg-orange-600 hover:bg-orange-700 text-white py-2 rounded-lg shadow-lg transition duration-300"
                    >
                      <IoLogOutOutline /> Logout
                    </button>
                  </div>
                </>
              ) : (
                <div className="p-4 flex flex-col gap-3 bg-gray-800">
                  <p className="text-gray-400">You are not logged in</p>
                  <button
                    onClick={() => {
                      setIsProfileOpen(false);
                      navigate("/login");
                    }}
                    className="bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg shadow-lg transition"
                  >
                    Login
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

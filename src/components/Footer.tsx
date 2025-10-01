import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaClock,
  FaEnvelope,
} from "react-icons/fa";

function Footer() {
  // ऑटो अपडेट current year निकालना
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-white select-none">
      {/* Top Social Bar */}
      <div className="bg-gradient-to-r from-red-600 to-black py-3 px-6 flex flex-wrap justify-between items-center gap-4">
        <span className="text-sm sm:text-base font-semibold whitespace-nowrap">
          Stay strong, stay fit! Follow us:
        </span>
        <div className="flex space-x-6 text-xl">
          <a
            href="#"
            aria-label="Facebook"
            className="hover:text-gray-200 transition-colors"
          >
            <FaFacebookF />
          </a>
          <a
            href="#"
            aria-label="Twitter"
            className="hover:text-gray-200 transition-colors"
          >
            <FaTwitter />
          </a>
          <a
            href="#"
            aria-label="Instagram"
            className="hover:text-gray-200 transition-colors"
          >
            <FaInstagram />
          </a>
          <a
            href="#"
            aria-label="YouTube"
            className="hover:text-gray-200 transition-colors"
          >
            <FaYoutube />
          </a>
        </div>
      </div>

      {/* Main Footer */}
      <div className="bg-gray-900 py-16 px-6 sm:px-10 md:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 text-lg">
          {/* About Gym */}
          <div>
            <h3 className="text-2xl font-bold text-red-500 mb-6 border-b border-red-500 pb-2">
              ABOUT US
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Our mission is to transform lives through fitness. Join our gym to
              achieve strength, discipline, and motivation.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-red-500 mb-6 border-b border-red-500 pb-2">
              QUICK LINKS
            </h3>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a href="/about" className="hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="/services" className="hover:text-white transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="/trainers" className="hover:text-white transition-colors">
                  Our Trainers
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="/schedule" className="hover:text-white transition-colors">
                  Schedule
                </a>
              </li>
              <li>
                <a href="/profile" className="hover:text-white transition-colors">
                  Profile
                </a>
              </li>
            </ul>
          </div>

          {/* Membership */}
          <div>
            <h3 className="text-xl font-bold text-red-500 mb-6 border-b border-red-500 pb-2">
              MEMBERSHIP
            </h3>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a href="/pricing" className="hover:text-white transition-colors">
                  Basic Plan
                </a>
              </li>
              <li>
                <a href="/pricing" className="hover:text-white transition-colors">
                  Premium Plan
                </a>
              </li>
              <li>
                <a href="/pricing" className="hover:text-white transition-colors">
                  Personal Training
                </a>
              </li>
              <li>
                <a href="/pricing" className="hover:text-white transition-colors">
                  Group Classes
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold text-red-500 mb-6 border-b border-red-500 pb-2">
              CONTACT
            </h3>
            <ul className="space-y-6 text-gray-400 leading-relaxed">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="mt-1 text-red-600" />
                <span>
                  E-301, Aagam Vivianna, Opp. Florence Building, Vesu Road,
                  Surat, Gujarat 395007
                </span>
              </li>
              <li className="flex items-center gap-3">
                <FaPhoneAlt className="text-red-600" /> <span>+91 6232469432</span>
              </li>
              <li className="flex items-center gap-3">
                <FaClock className="text-red-600" /> <span>Mon-Sun: 6 AM - 10 PM</span>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-red-600" />
                <a
                  href="mailto:chandrabhan870829@gmail.com"
                  className="hover:text-white transition-colors"
                >
                  chandrabhan870829@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-black text-center py-5 text-gray-400 text-sm sm:text-base">
        © {currentYear} GymSite | Train Hard, Stay Fit 
      </div>
    </footer>
  );
}

export default Footer;

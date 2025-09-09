import { NavLink } from "react-router-dom";
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white p-6">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Left Section - About */}
        <div>
          <h2 className="text-2xl font-bold">Real Computer</h2>
          <p className="mt-3 text-gray-200 text-sm">
            Building careers with quality education and practical skills.  
            Join us to shape your future with industry experts.
          </p>
        </div>

        {/* Middle Section - Quick Links */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-2">
            <li>
              <NavLink to="/" className="hover:text-yellow-400 transition">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/courses" className="hover:text-yellow-400 transition">
                Courses
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className="hover:text-yellow-400 transition">
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="hover:text-yellow-400 transition">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Right Section - Contact Info */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
          <p className="text-gray-200">📍 Imarti Road, Mirzapur</p>
          <p className="text-gray-200">📞 +91 8303405046</p>
          <p className="text-gray-200">✉️ info@myinstitute.com</p>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-yellow-400 transition"
            >
              <FaFacebook size={22} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-yellow-400 transition"
            >
              <FaInstagram size={22} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-yellow-400 transition"
            >
              <FaLinkedin size={22} />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-yellow-400 transition"
            >
              <FaGithub size={22} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="text-center text-gray-300 mt-8 border-t border-gray-500 pt-4 text-sm">
        © {new Date().getFullYear()} RealComputer. All Rights Reserved. <br />
        <span>
        Created and Developed by{" "}
        <a 
        href="https://profile-imran.vercel.app" 
        target="_blank" 
          rel="noopener noreferrer"
        style={{ color: "#ffffff", textDecoration: "none", fontWeight: "bold", }}
        >
         ImranCode's
        </a>
</span>
      </div>
    </footer>
  );
}

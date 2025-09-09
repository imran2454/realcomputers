import React, { useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) setIsLoggedIn(true);
    else setIsLoggedIn(false);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/admin"); // redirect after logout
  };

  const links = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/courses", label: "Courses" },
    { to: "/result", label: "Result" },
    { to: "/admission", label: "Admission" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <nav className="bg-cyan-400 text-gray-900 shadow-md sticky top-0 z-50 font-bold">
      <div className="container mx-auto flex justify-between items-center px-4 py-3">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold">
          Real Computer
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                isActive ? "font-bold underline" : ""
              }
            >
              {link.label}
            </NavLink>
          ))}

          {!isLoggedIn ? (
            <NavLink
              to="/admin"
              className="bg-green-500 hover:bg-green-700 hover:text-white px-3 py-1 rounded font-bold cursor-pointer"
            >
              Login
            </NavLink>
          ) : (
            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-600 hover:text-white px-3 py-1 rounded font-bold cursor-pointer"
            >
              Logout
            </button>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded-lg bg-cyan-400 hover:bg-cyan-500 transition"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-cyan-400"
          >
            <div className="flex flex-col px-4 py-3 space-y-2">
              {links.map((link, i) => (
                <motion.div
                  key={link.to}
                  initial={{ x: -10, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <NavLink
                    to={link.to}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `block px-3 py-2 rounded ${
                        isActive
                          ? "bg-blue-500 font-bold"
                          : "hover:bg-cyan-500"
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                </motion.div>
              ))}

              {!isLoggedIn ? (
                <NavLink
                  to="/admin"
                  onClick={() => setOpen(false)}
                  className="block bg-yellow-500 px-3 py-2 rounded text-center font-medium font-bold"
                >
                  Admin
                </NavLink>
              ) : (
                <button
                  onClick={() => {
                    handleLogout();
                    setOpen(false);
                  }}
                  className="block bg-red-500 px-3 py-2 rounded text-center font-medium"
                >
                  Logout
                </button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

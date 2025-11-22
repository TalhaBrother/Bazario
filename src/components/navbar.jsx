import React, { useState, useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { Link } from "react-router";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  let { theme, setTheme } = useContext(ThemeContext);

  return (
    <nav
      className={`sticky top-0 z-50 shadow-md ${
        theme === "dark" ? "bg-slate-900" : "bg-white"
      }`}
    >
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <img
              src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=blue"
              alt="Your Company"
              className="h-8 w-auto"
            />
            <span
              className={`ml-2 text-lg font-semibold ${
                theme === "dark" ? "text-white" : "text-slate-900"
              }`}
            >
              Bazario
            </span>
          </div>

          <div>
            <button
              onClick={() => {
                theme === "light" ? setTheme("dark") : setTheme("light");
              }}
              className={`px-3 py-1 rounded-md font-medium border transition ${
                theme === "dark"
                  ? "bg-slate-700 text-white border-slate-600 hover:bg-slate-600"
                  : "bg-blue-500 text-white border-blue-600 hover:bg-blue-600"
              }`}
            >
              {theme === "dark" ? "Light" : "Dark"}
            </button>
          </div>

          <div className="hidden sm:flex space-x-6">
            <Link
              to="/home"
              className={`font-medium ${
                theme === "dark"
                  ? "text-slate-100 hover:text-blue-400"
                  : "text-slate-900 hover:text-blue-600"
              }`}
            >
              Home
            </Link>
            <Link
              to="/seller"
              className={`font-medium ${
                theme === "dark"
                  ? "text-slate-100 hover:text-blue-400"
                  : "text-slate-900 hover:text-blue-600"
              }`}
            >
              Become a Seller
            </Link>
            <Link
              to="/login"
              className={`font-medium ${
                theme === "dark"
                  ? "text-slate-100 hover:text-blue-400"
                  : "text-slate-900 hover:text-blue-600"
              }`}
            >
              Login
            </Link>
            <Link
              to="/register"
              className={`font-medium ${
                theme === "dark"
                  ? "text-slate-100 hover:text-blue-400"
                  : "text-slate-900 hover:text-blue-600"
              }`}
            >
              Register
            </Link>
          </div>

          <div className="sm:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`px-3 py-1 rounded-md font-medium border transition ${
                theme === "dark"
                  ? "text-white border-slate-600 hover:bg-slate-700"
                  : "text-slate-900 border-slate-300 hover:bg-slate-100"
              }`}
            >
              ☰
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div
          className={`sm:hidden px-4 py-3 space-y-2 shadow-md ${
            theme === "dark" ? "bg-slate-900 text-slate-100" : "bg-white text-slate-900"
          }`}
        >
          <Link to="/home" className="block font-medium hover:text-blue-500">
            Home
          </Link>
          <Link to="/seller" className="block font-medium hover:text-blue-500">
            Become a Seller
          </Link>
          <Link to="/login" className="block font-medium hover:text-blue-500">
            Login
          </Link>
          <Link to="/register" className="block font-medium hover:text-blue-500">
            Register
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

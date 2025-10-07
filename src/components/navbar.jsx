import React, { useState,useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { Link } from "react-router"; // ✅ still using react-router

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  let {theme,setTheme}=useContext(ThemeContext)

  return (
    <nav className="bg-black shadow-md sticky top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=white"
              alt="Your Company"
              className="h-8 w-auto"
            />
            <span className="ml-2 text-lg font-semibold text-white">
              Bazario
            </span>
          </div>
          <div>
            <button onClick={()=>{
              (theme==='light')? setTheme('dark'):setTheme('light')
            }}>
              {(theme==="dark")? "light":"dark"}
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden sm:flex space-x-6">
            <Link to="/home" className="font-medium">Home</Link>
            <Link to="/seller" className="font-medium">Become a Seller</Link>
            <Link to="/login" className="font-medium">Login</Link>
            <Link to="/register" className="font-medium">Register</Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="sm:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white hover:text-gray-300 focus:outline-none"
            >
              ☰
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-black px-4 py-3 space-y-2 shadow-md">
          <Link to="/home" className="block font-medium">Home</Link>
          <Link to="/seller" className="block font-medium">Become a Seller</Link>
          <Link to="/login" className="block font-medium">Login</Link>
          <Link to="/register" className="block font-medium">Register</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

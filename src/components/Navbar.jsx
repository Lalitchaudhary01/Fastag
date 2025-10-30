import React, { useState } from "react";
import { Wallet, Menu, X, User } from "lucide-react";

// Navbar Component
function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-teal-700 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
              <div className="w-6 h-6 bg-teal-700 rounded"></div>
            </div>
            <span className="text-2xl font-bold">Logiclead</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="hover:text-teal-200 transition">
              Home
            </a>
            <a href="#" className="hover:text-teal-200 transition">
              Services
            </a>
            <a href="#" className="hover:text-teal-200 transition">
              About
            </a>
            <a href="#" className="hover:text-teal-200 transition">
              Contact
            </a>
          </div>

          {/* Right Side Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="flex items-center space-x-2 px-4 py-2 bg-teal-600 hover:bg-teal-800 rounded-lg transition">
              <Wallet className="w-5 h-5" />
              <span>Wallet</span>
            </button>
            <button className="w-10 h-10 bg-orange-500 hover:bg-orange-600 rounded-full flex items-center justify-center transition">
              <User className="w-6 h-6" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg hover:bg-teal-600 transition"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-teal-800 border-t border-teal-600">
          <div className="px-4 py-3 space-y-3">
            <a href="#" className="block py-2 hover:text-teal-200 transition">
              Home
            </a>
            <a href="#" className="block py-2 hover:text-teal-200 transition">
              Services
            </a>
            <a href="#" className="block py-2 hover:text-teal-200 transition">
              About
            </a>
            <a href="#" className="block py-2 hover:text-teal-200 transition">
              Contact
            </a>
            <button className="w-full flex items-center justify-center space-x-2 px-4 py-2 bg-teal-600 hover:bg-teal-900 rounded-lg transition mt-3">
              <Wallet className="w-5 h-5" />
              <span>Wallet</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
export default Navbar;

// Home Component

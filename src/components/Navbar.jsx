import React, { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-md">
      <div className="max-w-[1440px] mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-10 py-4">
        <div className="flex items-center">
          <img src="/logo.svg" alt="DoList Logo" className="w-[140px] h-auto sm:w-[170px]" />
        </div>

        <ul className="hidden lg:flex gap-10 text-base font-medium text-[#0A1B39]">
          <li className="cursor-pointer hover:text-red-500">About Us</li>
          <li className="cursor-pointer hover:text-red-500">Features</li>
          <li className="cursor-pointer hover:text-red-500">More Option</li>
          <li className="cursor-pointer hover:text-red-500">Contact</li>
        </ul>

        <div className="hidden lg:flex gap-3">
          <button className="px-5 py-2 border border-red-400 text-red-500 rounded-md hover:bg-red-50">
            Log In
          </button>
          <button className="px-5 py-2 bg-red-500 text-white rounded-md hover:bg-red-600">
            Sign Up
          </button>
        </div>

        <div className="lg:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-[#0A1B39] text-2xl focus:outline-none"
          >
            {isMenuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 px-4 py-4">
          <ul className="flex flex-col gap-4 text-base font-medium text-[#0A1B39] mb-4">
            <li className="cursor-pointer hover:text-red-500">About Us</li>
            <li className="cursor-pointer hover:text-red-500">Features</li>
            <li className="cursor-pointer hover:text-red-500">More Option</li>
            <li className="cursor-pointer hover:text-red-500">Contact</li>
          </ul>
          <div className="flex flex-col gap-2">
            <button className="w-full px-5 py-2 border border-red-400 text-red-500 rounded-md hover:bg-red-50">
              Log In
            </button>
            <button className="w-full px-5 py-2 bg-red-500 text-white rounded-md hover:bg-red-600">
              Sign Up
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

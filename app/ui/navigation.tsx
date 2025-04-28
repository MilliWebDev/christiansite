'use client';
import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white  fixed flex justify-center w-full z-10">
      <div className="max-w-7xl rounded-full border-4 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-2xl font-bold text-indigo-600">MyBrand</span>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-8 items-center">
            <a href="#" className="text-gray-600 hover:text-indigo-600 transition">Home</a>
            <a href="#" className="text-gray-600 hover:text-indigo-600 transition">About</a>
            <a href="#" className="text-gray-600 hover:text-indigo-600 transition">Services</a>
            <a href="#" className="text-gray-600 hover:text-indigo-600 transition">Contact</a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-indigo-600 focus:outline-none"
            >
              {isOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white px-4 pt-2 pb-4 space-y-2 shadow">
          <a href="#" className="block text-gray-600 hover:text-indigo-600">Home</a>
          <a href="#" className="block text-gray-600 hover:text-indigo-600">About</a>
          <a href="#" className="block text-gray-600 hover:text-indigo-600">Services</a>
          <a href="#" className="block text-gray-600 hover:text-indigo-600">Contact</a>
        </div>
      )}
    </nav>
  );
}

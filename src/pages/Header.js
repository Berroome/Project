import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Floating Button */}
      <div className="fixed top-6 right-6 z-50">
        <button
          onClick={handleToggle}
          aria-label="Toggle menu"
          className="inline-flex items-center justify-center h-10 w-10 rounded-md bg-white/90 hover:bg-white border-0 shadow-lg backdrop-blur-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 text-sm font-medium"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Slide-out Menu Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transition-transform z-40 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } transform duration-300 ease-in-out`}
      >
        <div className="p-6">
          <h2 className="text-lg font-semibold mb-4">Menu</h2>
          <ul className="space-y-4">
            <li><a href="#" className="hover:text-blue-600">Home</a></li>
            <li><a href="#" className="hover:text-blue-600">About</a></li>
            <li><a href="#" className="hover:text-blue-600">Services</a></li>
            <li><a href="/contact" className="hover:text-blue-600">Contact</a></li>
          </ul>
        </div>
      </div>

      {/* Optional: Click outside to close */}
      {isOpen && (
        <div
          onClick={handleToggle}
          className="fixed inset-0 bg-black/30 z-30 backdrop-blur-sm"
        />
      )}
    </>
  );
};

export default HamburgerMenu;

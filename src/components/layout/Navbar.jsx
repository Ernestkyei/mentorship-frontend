import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, UserPlus } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              MentorPath
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-purple-600 transition font-medium">Home</Link>
            <Link to="/courses" className="text-gray-700 hover:text-purple-600 transition font-medium">Courses</Link>
            <Link to="/course/1" className="text-gray-700 hover:text-purple-600 transition font-medium">Course Player</Link>
            <Link to="/progress" className="text-gray-700 hover:text-purple-600 transition font-medium">My Progress</Link>
            <Link to="/signup">
              <button className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-5 py-2 rounded-lg font-medium hover:shadow-lg transition flex items-center gap-2">
                <UserPlus className="w-4 h-4" />
                Sign Up
              </button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col space-y-3">
              <Link to="/" onClick={() => setIsOpen(false)} className="text-gray-700 hover:text-purple-600 transition py-2">Home</Link>
              <Link to="/courses" onClick={() => setIsOpen(false)} className="text-gray-700 hover:text-purple-600 transition py-2">Courses</Link>
              <Link to="/course/1" onClick={() => setIsOpen(false)} className="text-gray-700 hover:text-purple-600 transition py-2">Course Player</Link>
              <Link to="/progress" onClick={() => setIsOpen(false)} className="text-gray-700 hover:text-purple-600 transition py-2">My Progress</Link>
              <Link to="/signup" onClick={() => setIsOpen(false)}>
                <button className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-5 py-2 rounded-lg font-medium w-full">
                  Sign Up
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
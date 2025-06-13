import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // for dropdown toggle

  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      {/* Logo */}
      <Link to="/" className="text-xl font-bold text-blue-600">InterviewPrep</Link>

      {/* Navigation Links */}
      <div className="flex items-center space-x-6">
        {/* Dropdown menu for Interview */}
        <div className="relative">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 hover:text-blue-600"
          >
            Interview
          </button>
          {isOpen && (
            <div className="absolute top-full left-0 bg-white shadow-md rounded mt-2 w-48 z-10">
              <Link to="/interview/aptitude" className="block px-4 py-2 hover:bg-gray-100">Aptitude</Link>
              <Link to="/interview/technical" className="block px-4 py-2 hover:bg-gray-100">Technical</Link>
              <Link to="/interview/coding" className="block px-4 py-2 hover:bg-gray-100">Coding</Link>
              <Link to="/interview/full" className="block px-4 py-2 hover:bg-gray-100">Full Mock Interview</Link>
            </div>
          )}
        </div>

        {/* Buttons */}
        <Link to="/login">
          <Button text="Login" variant="outline" size="sm" />
        </Link>
        <Link to="/signup">
          <Button text="Sign Up" variant="primary" size="sm" />
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const [showSignupDropdown, setShowSignupDropdown] = useState(false);
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowSignupDropdown(false);
      }
    }
    if (showSignupDropdown) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showSignupDropdown]);

  const handleSignupClick = () => {
    setShowSignupDropdown((prev) => !prev);
  };

  const handleRoleSelect = (role) => {
    setShowSignupDropdown(false);
    navigate(`/signup?role=${role}`);
  };

  const handleLoginClick = () => {
    navigate("/login");
  };

  const handleLogoClick = () => {
    navigate("/");
  };

  return (
    <nav className="flex justify-between items-center p-4 bg-white shadow">
      {/* Logo or left nav items */}
      <div
        className="text-xl font-bold text-blue-700 cursor-pointer select-none"
        onClick={handleLogoClick}
        title="Go to Home"
      >
        InterviewPrep
      </div>
      {/* Right nav items */}
      <div className="flex items-center gap-4">
        <button
          className="bg-white border border-blue-500 text-blue-700 px-6 py-2 rounded-full shadow hover:bg-blue-50 transition font-semibold"
          onClick={handleLoginClick}
        >
          Login
        </button>
        <div className="relative" ref={dropdownRef}>
          <button
            className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-6 py-2 rounded-full shadow hover:from-blue-600 hover:to-blue-800 transition font-semibold"
            onClick={handleSignupClick}
          >
            Sign up
            <svg
              className={`inline-block ml-2 w-4 h-4 transition-transform ${showSignupDropdown ? "rotate-180" : ""}`}
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {showSignupDropdown && (
            <div className="absolute right-0 mt-2 w-48 bg-white border border-blue-100 rounded-xl shadow-lg z-20 animate-fade-in">
              <button
                className="block w-full px-5 py-3 text-left text-blue-700 hover:bg-blue-50 hover:text-blue-900 rounded-t-xl transition"
                onClick={() => handleRoleSelect("admin")}
              >
                Sign up as Admin
              </button>
              <button
                className="block w-full px-5 py-3 text-left text-blue-700 hover:bg-blue-50 hover:text-blue-900 rounded-b-xl transition"
                onClick={() => handleRoleSelect("candidate")}
              >
                Sign up as Candidate
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
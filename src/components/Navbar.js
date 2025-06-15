import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const [showSignupDropdown, setShowSignupDropdown] = useState(false);
  const [showLoginDropdown, setShowLoginDropdown] = useState(false);
  const [showProfileCard, setShowProfileCard] = useState(false);
  const [editingUsername, setEditingUsername] = useState(false);
  const [newUserName, setNewUserName] = useState("");
  const loginDropdownRef = useRef(null);
  const signupDropdownRef = useRef(null);
  const profileCardRef = useRef(null);
  const navigate = useNavigate();

  // Track login state
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === "true"
  );
  const [userName, setUserName] = useState(localStorage.getItem("userName"));

  // Listen for login changes (optional, for logout from other tabs)
  useEffect(() => {
    const onStorage = () => {
      setUserName(localStorage.getItem("userName"));
      setIsLoggedIn(localStorage.getItem("isLoggedIn") === "true");
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        showLoginDropdown &&
        loginDropdownRef.current &&
        !loginDropdownRef.current.contains(event.target)
      ) {
        setShowLoginDropdown(false);
      }
      if (
        showSignupDropdown &&
        signupDropdownRef.current &&
        !signupDropdownRef.current.contains(event.target)
      ) {
        setShowSignupDropdown(false);
      }
      if (
        showProfileCard &&
        profileCardRef.current &&
        !profileCardRef.current.contains(event.target)
      ) {
        setShowProfileCard(false);
      }
    }
    if (showLoginDropdown || showSignupDropdown || showProfileCard) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showLoginDropdown, showSignupDropdown, showProfileCard]);

  // Logout handler
  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
    navigate("/");
  };

  // Mock function to simulate user name update
  const updateUserName = async (newName) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        localStorage.setItem("userName", newName);
        resolve();
      }, 1000);
    });
  };

  return (
    <nav className="flex justify-between items-center p-4 bg-white shadow">
      <div
        className="text-xl font-bold text-blue-700 cursor-pointer select-none"
        onClick={() => navigate("/")}
        title="Go to Home"
      >
        InterviewPrep
      </div>
      <div className="flex items-center gap-4">
        {!isLoggedIn && (
          <>
            {/* Login Dropdown */}
            <div className="relative" ref={loginDropdownRef}>
              <button
                className="bg-white border border-blue-500 text-blue-700 px-6 py-2 rounded-full shadow hover:bg-blue-50 transition font-semibold"
                onClick={() => setShowLoginDropdown((prev) => !prev)}
              >
                Login
                <svg
                  className={`inline-block ml-2 w-4 h-4 transition-transform ${showLoginDropdown ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {showLoginDropdown && (
                <div className="absolute right-0 mt-2 w-48 bg-white border border-blue-100 rounded-xl shadow-lg z-20 animate-fade-in">
                  <button
                    className="block w-full px-5 py-3 text-left text-blue-700 hover:bg-blue-50 hover:text-blue-900 rounded-t-xl transition"
                    onClick={() => {
                      setShowLoginDropdown(false);
                      navigate("/login?role=admin");
                    }}
                  >
                    Login as Admin
                  </button>
                  <button
                    className="block w-full px-5 py-3 text-left text-blue-700 hover:bg-blue-50 hover:text-blue-900 rounded-b-xl transition"
                    onClick={() => {
                      setShowLoginDropdown(false);
                      navigate("/login?role=candidate");
                    }}
                  >
                    Login as Candidate
                  </button>
                </div>
              )}
            </div>
            {/* Sign up Dropdown */}
            <div className="relative" ref={signupDropdownRef}>
              <button
                className="bg-blue-600 text-white px-6 py-2 rounded-full shadow hover:bg-blue-700 transition font-semibold"
                onClick={() => setShowSignupDropdown((prev) => !prev)}
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
                    onClick={() => {
                      setShowSignupDropdown(false);
                      navigate("/signup?role=admin");
                    }}
                  >
                    Sign up as Admin
                  </button>
                  <button
                    className="block w-full px-5 py-3 text-left text-blue-700 hover:bg-blue-50 hover:text-blue-900 rounded-b-xl transition"
                    onClick={() => {
                      setShowSignupDropdown(false);
                      navigate("/signup?role=candidate");
                    }}
                  >
                    Sign up as Candidate
                  </button>
                </div>
              )}
            </div>
          </>
        )}
        {isLoggedIn && (
          <div className="relative" ref={profileCardRef}>
            
            <button
              className="bg-gray-100 text-blue-700 px-6 py-2 rounded-full shadow font-semibold"
              onClick={() => setShowProfileCard((prev) => !prev)}
            >
              Profile
            </button>
            <button
              className="ml-2 bg-red-500 text-white px-4 py-2 rounded-full shadow font-semibold"
              onClick={handleLogout}
            >
              Logout
            </button>
            {showProfileCard && (
              <div className="absolute right-0 mt-2 w-64 bg-white border border-blue-100 rounded-xl shadow-lg z-30 p-4 animate-fade-in">
                <div className="font-bold text-blue-700 mb-2">Profile</div>
                <div className="mb-2">
                  <span className="font-semibold">User Name:</span> {userName || "Unknown"}
                </div>
                {/* Inline Change Username */}
                {!editingUsername ? (
                  <button
                    className="w-full text-left text-blue-600 hover:underline mt-2"
                    onClick={() => {
                      setEditingUsername(true);
                      setNewUserName(userName);
                    }}
                  >
                    Change Username
                  </button>
                ) : (
                  <form
                    onSubmit={async (e) => {
                      e.preventDefault();
                      if (!newUserName.trim()) return;
                      try {
                        await updateUserName(newUserName);
                        localStorage.setItem("userName", newUserName);
                        setUserName(newUserName);
                        setEditingUsername(false);
                      } catch {
                        // handle error
                      }
                    }}
                    className="flex flex-col gap-2 mt-2"
                  >
                    <input
                      type="text"
                      value={newUserName}
                      onChange={e => setNewUserName(e.target.value)}
                      className="border rounded px-2 py-1"
                      autoFocus
                    />
                    <div className="flex gap-2">
                      <button type="submit" className="bg-green-600 text-white px-2 py-1 rounded">Save</button>
                      <button type="button" className="bg-gray-400 text-white px-2 py-1 rounded" onClick={() => setEditingUsername(false)}>Cancel</button>
                    </div>
                  </form>
                )}
                <button
                  className="w-full text-left text-blue-600 hover:underline mt-2"
                  onClick={() => {
                    setShowProfileCard(false);
                    navigate("/change-password");
                  }}
                >
                  Change Password
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
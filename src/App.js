// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

// Import components and pages
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Interview from './pages/Interview';
import Login from './pages/Login';
import Signup from "./pages/Signup";
import ForgotPassword from './pages/ForgotPassword';
import ChangePassword from './pages/ChangePassword';
import Profile from "./pages/Profile";
import About from "./pages/About";
import Contact from "./pages/Contact";

// Wrapper component to conditionally show Navbar
// What: This component wraps all routes
// Why: So we can check the current route
// When: Needed to hide navbar on login/signup pages
const AppWrapper = () => {
  const location = useLocation(); // Get current URL path
  const hideNavbarOn = []; // Routes where Navbar should be hidden
  const showNavbar = !hideNavbarOn.includes(location.pathname); // If not in the hide list, show navbar

  return (
    <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-gray-900">
      {showNavbar && <Navbar />} {/* Show Navbar only on selected routes */}
      <div className="flex-1 flex flex-col">
        <Routes>
          <Route path="/" element={<Home />} /> {/* Home page */}
          <Route path="/interview/:type" element={<Interview />} /> {/* Dynamic Interview page */}
          <Route path="/login" element={<Login />} /> {/* Login page */}
          <Route path="/signup" element={<Signup />} /> {/* Signup page */}
          <Route path="/forgot-password" element={<ForgotPassword />} /> {/* Forgot Password page */}
          <Route path="/change-password" element={<ChangePassword />} /> {/* Change Password page */}
          <Route path="/profile" element={<Profile />} /> {/* Profile page */}
          <Route path="/about" element={<About />} /> {/* About page */}
          <Route path="/contact" element={<Contact />} /> {/* Contact page */}
        </Routes>
      </div>
      <Footer /> {/* Footer is always shown */}
    </div>
  );
};

// Main App component
// What: Wraps routes in Router
// Why: Needed to enable routing
// When: Always required in React apps using react-router
function App() {
  return (
    <Router>
      <AppWrapper />
    </Router>
  );
}

export default App;

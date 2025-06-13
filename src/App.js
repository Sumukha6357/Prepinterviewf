// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

// Import components and pages
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Interview from './pages/Interview';
import Login from './pages/Login';
import Signup from './pages/Signup';

// Wrapper component to conditionally show Navbar
// What: This component wraps all routes
// Why: So we can check the current route
// When: Needed to hide navbar on login/signup pages
const AppWrapper = () => {
  const location = useLocation(); // Get current URL path
  const hideNavbarOn = ['/login', '/signup']; // Routes where Navbar should be hidden
  const showNavbar = !hideNavbarOn.includes(location.pathname); // If not in the hide list, show navbar

  return (
    <>
      {showNavbar && <Navbar />} {/* Show Navbar only on selected routes */}
      <Routes>
        <Route path="/" element={<Home />} /> {/* Home page */}
        <Route path="/interview/:type" element={<Interview />} /> {/* Dynamic Interview page */}
        <Route path="/login" element={<Login />} /> {/* Login page */}
        <Route path="/signup" element={<Signup />} /> {/* Signup page */}
      </Routes>
    </>
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

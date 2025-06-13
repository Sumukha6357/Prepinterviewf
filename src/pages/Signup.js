// Signup.js
import React from 'react';

function Signup() {
  return (
    // Page container with full screen height and center content
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      
      {/* Signup Card Container */}
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center">Register</h2>

        {/* Signup Form */}
        <form>
          {/* Full Name input */}
          <input
            type="text"
            placeholder="Full Name"
            className="w-full mb-3 p-2 border rounded"
          />

          {/* Email input */}
          <input
            type="email"
            placeholder="Email"
            className="w-full mb-3 p-2 border rounded"
          />

          {/* Password input */}
          <input
            type="password"
            placeholder="Password"
            className="w-full mb-3 p-2 border rounded"
          />

          {/* Submit button */}
          <button type="submit" className="w-full bg-green-600 text-white py-2 rounded">
            Register
          </button>

          {/* Link to login */}
          <p className="text-center text-sm mt-4">
            Already registered? <a href="/login" className="text-green-600 underline">Login</a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Signup;

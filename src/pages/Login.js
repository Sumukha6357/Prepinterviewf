// Login.js
import React from 'react';

function Login() {
  return (
    // Page container with full screen height and center content
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      
      {/* Login Card Container */}
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>

        {/* Login Form */}
        <form>
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

          {/* Forgot password link */}
          <div className="text-right mb-3 text-sm text-blue-500 hover:underline cursor-pointer">
            Forgot password?
          </div>

          {/* Submit button */}
          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded">
            Login
          </button>

          {/* Link to signup */}
          <p className="text-center text-sm mt-4">
            Don't have an account? <a href="/signup" className="text-blue-600 underline">Sign up</a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;

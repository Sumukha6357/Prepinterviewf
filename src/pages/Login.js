// Login.js
import React, { useState } from "react";
import { login } from "../api/userApi";

function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    setError("");
    try {
      const response = await login(formData.email, formData.password);
      setMessage(response.data.message || "Login successful!");
      // Optionally, save user info/token here
    } catch (err) {
      setError(
        err.response?.data?.message ||
          "Login failed. Please check your credentials."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    // Page container with full screen height and center content
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      
      {/* Login Card Container */}
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>

        {/* Login Form */}
        <form onSubmit={handleLogin}>
          {/* Email input */}
          <input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full mb-3 p-2 border rounded"
            required
          />

          {/* Password input */}
          <input
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            className="w-full mb-3 p-2 border rounded"
            required
          />

          {/* Submit button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded font-semibold"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>

          {/* Message and error display */}
          {message && (
            <div className="mt-4 text-green-600 text-center">{message}</div>
          )}
          {error && (
            <div className="mt-4 text-red-600 text-center">{error}</div>
          )}

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

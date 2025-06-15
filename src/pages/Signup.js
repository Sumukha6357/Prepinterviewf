import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { registerCandidate, registerAdmin } from "../api/userApi";

function Signup() {
  // Get role from URL query parameter
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const role = params.get("role") || "candidate"; // default to candidate

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    setError("");
    try {
      let response;
      if (role === "admin") {
        response = await registerAdmin(formData);
      } else {
        response = await registerCandidate(formData);
      }
      setMessage(response.data.message || "Registration successful!");
    } catch (err) {
      setError(
        err.response?.data?.message ||
          "Registration failed. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center">
          Sign Up as {role.charAt(0).toUpperCase() + role.slice(1)}
        </h2>
        <form onSubmit={handleRegister}>
          {/* Username */}
          <input
            name="userName"
            value={formData.userName}
            onChange={handleChange}
            placeholder="UserName"
            className="w-full mb-3 p-2 border rounded"
            required
          />
          {/* Email */}
          <input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full mb-3 p-2 border rounded"
            required
          />
          {/* Password */}
          <input
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            className="w-full mb-3 p-2 border rounded"
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded font-semibold"
            disabled={loading}
          >
            {loading ? "Registering..." : "Register"}
          </button>
          {message && (
            <div className="mt-4 text-green-600 text-center">{message}</div>
          )}
          {error && (
            <div className="mt-4 text-red-600 text-center">{error}</div>
          )}
        </form>
      </div>
    </div>
  );
}

export default Signup;
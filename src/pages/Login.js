import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { loginAdmin, loginCandidate } from "../api/userApi";

function Login() {
  const location = useLocation();
  const navigate = useNavigate();
  const params = new URLSearchParams(location.search);
  const role = params.get("role") || "candidate";

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
      let response;
      if (role === "admin") {
        response = await loginAdmin(formData.email, formData.password);
      } else {
        response = await loginCandidate(formData.email, formData.password);
      }
      setMessage(response.data.message || "Login successfull!");
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("userName", response.data.data.userName || formData.userName);
      window.dispatchEvent(new Event("storage"));
      navigate("/"); // <--- Always redirect to home page
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
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center">
          Login as {role.charAt(0).toUpperCase() + role.slice(1)}
        </h2>
        <form onSubmit={handleLogin}>
          <input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full mb-3 p-2 border rounded"
            required
          />
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
            {loading ? "Logging in..." : "Login"}
          </button>
          {message && (
            <div className="mt-4 text-green-600 text-center">{message}</div>
          )}
          {error && (
            <div className="mt-4 text-red-600 text-center">{error}</div>
          )}
          <div className="mt-4">
            <button
              type="button"
              className="text-blue-600 hover:underline"
              onClick={() => navigate("/forgot-password")}
            >
              Forgot Password?
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
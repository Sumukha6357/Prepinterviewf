import React, { useState } from "react";
import { generateOtp, forgotPassword } from "../api/userApi";

function ForgotPassword() {
  const [userName, setUserName] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [otp, setOtp] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [otpSent, setOtpSent] = useState(false);

  const handleGenerateOtp = async () => {
    setMessage("");
    setError("");
    try {
      await generateOtp(userName);
      setOtpSent(true);
      setMessage("OTP sent to your email.");
    } catch (err) {
      setError("Failed to send OTP. Please check your username.");
    }
  };

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");
    try {
      await forgotPassword(userName, newPassword, otp);
      setMessage("Password updated successfully!");
    } catch (err) {
      setError("Failed to update password. Please check your details and OTP.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center">Forgot Password</h2>
        <form onSubmit={handleForgotPassword}>
          <input
            name="userName"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            placeholder="Username or Email"
            className="w-full mb-3 p-2 border rounded"
            required
          />
          <button
            type="button"
            className="w-full bg-blue-500 text-white py-2 rounded mb-3"
            onClick={handleGenerateOtp}
            disabled={!userName}
          >
            Generate OTP
          </button>
          {otpSent && (
            <>
              <input
                name="otp"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                placeholder="Enter OTP"
                className="w-full mb-3 p-2 border rounded"
                required
              />
              <input
                name="newPassword"
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder="New Password"
                className="w-full mb-3 p-2 border rounded"
                required
              />
              <button
                type="submit"
                className="w-full bg-green-600 text-white py-2 rounded"
              >
                Change Password
              </button>
            </>
          )}
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

export default ForgotPassword;
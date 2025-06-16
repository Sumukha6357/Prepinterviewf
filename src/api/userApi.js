import axios from "axios";

axios.defaults.withCredentials = true;

const API_BASE = "http://localhost:8080";

// Register endpoints
export const registerCandidate = (userData) =>
  axios.post(`${API_BASE}/users/register-candidate`, userData);

export const registerAdmin = (userData) =>
  axios.post(`${API_BASE}/users/register-admin`, userData);

// Login endpoints
export const loginAdmin = (email, password) =>
  axios.post(`${API_BASE}/user/admin-login`, { email, password });

export const loginCandidate = (email, password) =>
  axios.post(`${API_BASE}/user/candidate-login`, { email, password });

// Update username
export const updateUserName = (newUserName) =>
  axios.put(`${API_BASE}/user/changeusername`, null, {
    params: { newUsername: newUserName },
    withCredentials: true,
  });

// Update password
export const updatePassword = (newPassword) =>
  axios.put(`${API_BASE}/user/changepassword`, null, { params: { newPassword } });

// Generate OTP
export const generateOtp = (username) =>
  axios.get(`${API_BASE}/user/generateotp`, { params: { username } });

// Forgot password
export const forgotPassword = (userName, newPassword, otp) =>
  axios.put(`${API_BASE}/user/forgotpassword`, null, {
    params: { userName, newPassword, otp },
  });


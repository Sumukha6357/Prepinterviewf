import axios from "axios";

const API_BASE = "http://localhost:8080"; // Change if your backend runs elsewhere

export const registerCandidate = (userData) =>
  axios.post(`${API_BASE}/users/registercandidate`, userData);

export const registerAdmin = (userData) =>
  axios.post(`${API_BASE}/users/registeradmin`, userData);

export const updateUserName = (newUserName) =>
  axios.put(`${API_BASE}/user/changeusername`, null, { params: { newUserName } });

export const updatePassword = (newPassword) =>
  axios.put(`${API_BASE}/user/changepassword`, null, { params: { newPassword } });

export const generateOtp = (username) =>
  axios.get(`${API_BASE}/user/generateotp`, { params: { username } });

export const forgotPassword = (userName, newPassword, otp) =>
  axios.put(`${API_BASE}/user/forgotpassword`, null, {
    params: { userName, newPassword, otp },
  });

export const login = (email, password) =>
  axios.post(`${API_BASE}/login`, { email, password });
import axios from "axios";

// const BACKEND_URL = import.meta.env.VITE_BACKEND;

const BACKEND_URL = "http://localhost:5000";
export const API_URL = `${BACKEND_URL}/api/users`;

// Register user
const register = async (userData) => {
  const response = await axios.post(`${API_URL}/register`, userData, {
    withCredentials: true,
  });
  return response.data;
};

// Login user
const login = async (userData) => {
  const { data } = await axios.post(`${API_URL}/login`, userData);
  return data;
};

// Logout user
const logout = async () => {
  const response = await axios.post(`${API_URL}/logout`);
  return response.data.message;
};

// Check Login user status
const getLoginStatus = async () => {
  const response = await axios.get(`${API_URL}/getLoginStatus`);
  return response.data;
};

// Get user
const getUser = async () => {
  const response = await axios.get(`${API_URL}/getUser`);
  return response.data;
};

// Update user profile
const updateUser = async (userData) => {
  const response = await axios.patch(`${API_URL}/updateuser`, userData);
  return response.data;
};

// Update user ProfileImage
const updatePhoto = async (userData) => {
  const response = await axios.patch(`${API_URL}/updatePhoto`, userData);
  return response.data;
};

const authService = {
  register,
  login,
  logout,
  getLoginStatus,
  getUser,
  updateUser,
  updatePhoto,
};
export default authService;

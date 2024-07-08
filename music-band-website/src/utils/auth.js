import axios from 'axios';

const API_URL = 'https://api.musicband.com';

const auth = {
  login: async (email, password) => {
    try {
      const response = await axios.post(`${API_URL}/login`, { email, password });
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  },
  register: async (email, password, name) => {
    try {
      const response = await axios.post(`${API_URL}/register`, { email, password, name });
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  },
  logout: async () => {
    try {
      const response = await axios.post(`${API_URL}/logout`);
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  },
  getUserInfo: async () => {
    try {
      const response = await axios.get(`${API_URL}/user`);
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  },
};

export default auth;
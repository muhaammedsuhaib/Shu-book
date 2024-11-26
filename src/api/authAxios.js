import axios from "axios";

const authAxios = axios.create({
  baseURL: "https://todolistify-backend.onrender.com/api/auth/",
  headers: {
    "Content-Type": "application/json",
  },
});
authAxios.interceptors.response.use(
  (response) => response,
  (error) => {
    return Promise.reject(error);
  }
);

export default authAxios;

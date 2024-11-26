import axios from "axios";

const getToken = () => {
  const token = localStorage.getItem("token");
  return token ? token.replace(/"/g, "") : null;
};

const userAxios = axios.create({
  baseURL: "https://todolistify-backend.onrender.com/api/",
  timeout: 5000,
});

userAxios.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default userAxios;

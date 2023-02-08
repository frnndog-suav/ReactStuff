import axios from "axios";

export const http = axios.create({
  baseURL: "http://localhost:8000",
  headers: {
    Accept: "application/json",
    Content: "application/json",
  },
});

http.interceptors.request.use(
  (config) => {
    const token = sessionStorage.getItem("token");
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

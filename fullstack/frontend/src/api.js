import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000",
  withCredentials: true,
});

// Response interceptor for API calls
api.interceptors.response.use(
  (response) => {
    return response;
  },
  async (err) => {
    const originalConfig = err.config;
    if (err.response.status === 403 && !originalConfig._retry) {
      originalConfig._retry = true;
      try {
        await api.post("/auth/refresh-token", {
          refreshToken: localStorage.getItem("refreshToken"), // Take refreshToken from local storage
        });

        return api(originalConfig);
      } catch (_error) {
        return Promise.reject(_error);
      }
    }
    return Promise.reject(err);
  }
);

export default api;

import { createContext, useState, useContext, useEffect } from "react";
import api from "./api";

const AuthContext = createContext(null);

export const AuthProvider = (props) => {
  const [auth, setAuth] = useState({
    email: "",
    isLoggedIn: false,
  });
  const [loading, setLoading] = useState(true);

  // During startup, load from localStorage
  useEffect(() => {
    const email = localStorage.getItem("email");
    if (email) setAuth({ email, isLoggedIn: true });
    setLoading(false);
  }, []);

  const register = async (name, email, password) => {
    await api.post("/auth/register", {
      name,
      email,
      password,
    });
  };

  const login = async (email, password) => {
    await api.post("/auth/login", { email, password });

    // If succeed, set auth state and save it into localStorage
    setAuth({
      email,
      isLoggedIn: true,
    });
    localStorage.setItem("email", email);
  };

  const logout = async () => {
    // Make a request
    await api.post("http://localhost:8000/auth/logout", {});
    // Reset state and remove email from localStorage
    setAuth({ email: "", isLoggedIn: false });
    localStorage.removeItem("email");
  };

  return (
    <AuthContext.Provider value={{ auth, login, register, logout }}>
      {!loading && props.children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

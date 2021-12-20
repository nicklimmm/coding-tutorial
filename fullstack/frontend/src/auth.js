import { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";

const AuthContext = createContext(null);

export const AuthProvider = (props) => {
  const [auth, setAuth] = useState({ email: "", isLoggedIn: false });
  const [loading, setLoading] = useState(true);

  // During startup, load user from localStorage
  useEffect(() => {
    const email = localStorage.getItem("email");
    if (email) setAuth({ email, isLoggedIn: true });
    setLoading(false);
  }, []);

  const register = async (name, email, password) => {
    await axios.post("http://127.0.0.1:8000/auth/register", {
      name,
      email,
      password,
    });
  };

  const login = async (email, password) => {
    // Make a request
    await axios.post("http://127.0.0.1:8000/auth/login", {
      email,
      password,
    });

    // If succeed, set auth state and save it into localStorage
    setAuth({
      email: email,
      isLoggedIn: true,
    });
    localStorage.setItem("email", email);
  };

  const logout = () => {
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

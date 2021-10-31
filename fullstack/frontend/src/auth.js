import { createContext, useState, useContext } from "react";

const AuthContext = createContext(null);

export const AuthProvider = (props) => {
  const [auth, setAuth] = useState({ name: "", email: "", isLoggedIn: false });

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

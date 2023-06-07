import { createContext, useState, useEffect } from "react";
import axios from "axios";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [loggedUser, setLoggedUser] = useState(
    JSON.parse(localStorage.getItem("loggedUser")) || null
  );

  useEffect(() => {
    localStorage.setItem("loggedUser", JSON.stringify(loggedUser)); // loggedUser is an object, but values need to be string in local storage
  }, [loggedUser]);

  const login = async (input) => {
    // get loggedUser info from backend and set it with 'setLoggedUser'
    const res = await axios.post("http://localhost:4500/auth/login", input, {
      withCredentials: true,
    });
    setLoggedUser(res.data);
  };

  return (
    <AuthContext.Provider value={{ loggedUser, login }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;

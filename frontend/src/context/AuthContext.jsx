import { createContext, useState, useEffect } from "react";
import axios from "axios";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [loggedUser, setLoggedUser] = useState(
    JSON.parse(localStorage.getItem("loggedUser")) || null
  );
  const [isLoggedIn, setIsLoggedIn] = useState(false); //check if loggedIn for dropdown menu change

  useEffect(() => {
    localStorage.setItem("loggedUser", JSON.stringify(loggedUser)); // loggedUser is an object, but values need to be string in local storage
  }, [loggedUser]);

  const login = async (input) => {
    // get loggedUser info from backend and set it with 'setLoggedUser'
    const res = await axios.post("http://localhost:4500/auth/login", input, {
      withCredentials: true,
    });
    setLoggedUser(res.data);
    setIsLoggedIn(true);
  };

  const logout = async () => {
    try {
      await axios.post("http://localhost:4500/auth/logout", null, {
        withCredentials: true,
      });
      setLoggedUser(null);
      localStorage.removeItem("loggedUser");
      setIsLoggedIn(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AuthContext.Provider value={{ loggedUser, login, logout, isLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;

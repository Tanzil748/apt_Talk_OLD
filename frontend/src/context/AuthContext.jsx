import { createContext, useState, useEffect } from "react";
import axios from "axios";

const AuthContext = createContext();

// loggedUser keeps track if user has a token
// isLoggedIn keeps track of the user logged status (prevents dropdown menu from resetting on refresh)

export const AuthContextProvider = ({ children }) => {
  // make sure null is not read as a string or it wont work
  const [loggedUser, setLoggedUser] = useState(
    JSON.parse(localStorage.getItem("loggedUser")) || null
  );
  const [isLoggedIn, setIsLoggedIn] = useState(
    JSON.parse(localStorage.getItem("menuChange")) || false
  );

  useEffect(() => {
    localStorage.setItem("loggedUser", JSON.stringify(loggedUser)); // loggedUser values need to be string in local storage
    localStorage.setItem("menuChange", JSON.stringify(isLoggedIn));
  }, [loggedUser, isLoggedIn]);

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

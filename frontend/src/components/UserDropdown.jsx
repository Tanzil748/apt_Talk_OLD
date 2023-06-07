import { useContext } from "react";
import css from "../styles/userDropdown.module.css";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";

const UserDropdown = () => {
  const { loggedIn, logOut } = useContext(AuthContext);
  return (
    <div className={css.layout}>
      <ul className={css.menu}>
        {loggedIn ? (
          <Link to="/login" className={css.link} onClick={() => logOut()}>
            Log Out
          </Link>
        ) : (
          <>
            <Link to="/register" className={css.link}>
              Register
            </Link>
            <Link to="/login" className={css.link}>
              Log In
            </Link>
          </>
        )}
      </ul>
    </div>
  );
};

export default UserDropdown;

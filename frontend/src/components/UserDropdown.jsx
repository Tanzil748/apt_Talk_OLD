import { useContext } from "react";
import css from "../styles/userDropdown.module.css";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";

const UserDropdown = () => {
  const { logout, isLoggedIn } = useContext(AuthContext);
  return (
    <div className={css.layout}>
      <ul className={css.menu}>
        {isLoggedIn ? (
          <Link to="/login" className={css.link} onClick={() => logout()}>
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

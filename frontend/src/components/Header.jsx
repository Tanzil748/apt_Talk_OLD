import { useContext, useState } from "react";
import css from "../styles/header.module.css";
import { Link } from "react-router-dom";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import ApartmentRoundedIcon from "@mui/icons-material/ApartmentRounded";
import UserDropdown from "./UserDropdown";
import AuthContext from "../context/AuthContext";

const Header = () => {
  const { loggedUser } = useContext(AuthContext);
  const [userDrop, setUserDrop] = useState(false);

  return (
    <div className={css.layout}>
      <div>
        <Link to="/" className={css.left}>
          <ApartmentRoundedIcon style={{ fontSize: "1.8rem" }} />
          <div>
            Apt<span style={{ color: "red" }}>Talk</span>
          </div>
        </Link>
      </div>
      <div className={css.right}>
        {loggedUser !== null ? (
          <Link
            to="/profile/:id"
            style={{ color: "black", textDecoration: "none" }}
          >
            Profile
          </Link>
        ) : null}
        <div
          className={css.userProfile}
          onClick={() => setUserDrop((prev) => !prev)}
        >
          <AccountCircleRoundedIcon style={{ fontSize: "1.8rem" }} />
          <span>{loggedUser?.others.username}</span>
          {userDrop && <UserDropdown />}
        </div>
      </div>
    </div>
  );
};

export default Header;

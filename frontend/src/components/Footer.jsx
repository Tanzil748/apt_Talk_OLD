import React from "react";
import css from "../styles/footer.module.css";
import { MdMapsHomeWork } from "react-icons/md";

const Footer = () => {
  return (
    <div className={css.layout}>
      <div className={css.top}>
        <MdMapsHomeWork size={20} />
        <div style={{ fontSize: "1em" }}>
          Apt<span style={{ color: "red" }}>Talk</span>
        </div>
      </div>
      <p className={css.bottom}>Discuss real estate with the world!</p>
    </div>
  );
};

export default Footer;

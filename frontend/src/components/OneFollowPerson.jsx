import React from "react";
import css from "../styles/oneFollowPerson.module.css";
import { BiUserCircle } from "react-icons/bi";
import { SlUserFollow, SlUserFollowing, SlUserUnfollow } from "react-icons/sl";

const OneFollowPerson = () => {
  return (
    <div className={css.personItem}>
      <div className={css.left}>
        <BiUserCircle size={40} />
        <span>Username</span>
      </div>
      <div className={css.right}>
        <button className={css.followButton}>
          <SlUserFollowing size={20} />
          <span>Following</span>
        </button>
      </div>
    </div>
  );
};

export default OneFollowPerson;

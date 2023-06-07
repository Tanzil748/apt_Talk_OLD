import React from "react";
import css from "../styles/followList.module.css";
import OneFollowPerson from "./OneFollowPerson";

const FollowList = () => {
  return (
    <div className={css.layout}>
      <h3 className={css.listHeader}>Follow List</h3>
      <hr className={css.listHeaderBorder} />
      <OneFollowPerson />
      <OneFollowPerson />
      <OneFollowPerson />
      <OneFollowPerson />
      <OneFollowPerson />
      <OneFollowPerson />
      <OneFollowPerson />
      <OneFollowPerson />
      <OneFollowPerson />
      <OneFollowPerson />
      <OneFollowPerson />
      <OneFollowPerson />
      <OneFollowPerson />
      <OneFollowPerson />
      <OneFollowPerson />
      <OneFollowPerson />
      <OneFollowPerson />
    </div>
  );
};

export default FollowList;

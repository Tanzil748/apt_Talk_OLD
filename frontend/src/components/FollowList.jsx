import React from "react";
import css from "../styles/followList.module.css";
import OneFollowPerson from "./OneFollowPerson";

const FollowList = ({ followsData }) => {
  return (
    <div className={css.layout}>
      <h3 className={css.listHeader}>Follow List</h3>
      <hr className={css.listHeaderBorder} />
      {followsData.map((oneFollower, index) => (
        <OneFollowPerson key={index} oneFollower={oneFollower} />
      ))}
    </div>
  );
};

export default FollowList;

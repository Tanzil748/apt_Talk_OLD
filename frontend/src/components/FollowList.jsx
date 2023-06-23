import React from "react";
import css from "../styles/followList.module.css";
// import OneFollowPerson from "./OneFollowPerson";
import { SlUserFollowing } from "react-icons/sl";

const FollowList = () => {
  return (
    <div className={css.layout}>
      <h3 className={css.listHeader}>Follow List</h3>
      <hr className={css.listHeaderBorder} />
      {/* temporary condition until future version adds follower capability*/}
      <div>
        <div className={css.personItem}>
          <div className={css.left}>
            <span>@Username</span>
          </div>
          <div className={css.right}>
            <button className={css.followButton}>
              <SlUserFollowing size={20} />
              <span>Following</span>
            </button>
          </div>
        </div>
        <div
          className={css.personItem}
          style={{ color: "red", fontWeight: "bold" }}
        >
          NOTE: User followers will be added in future version of application.
          Above is a mock example of how it would look like.
        </div>
      </div>
      {/* {followsData.length === 0 ? (
        <div>
          <div className={css.personItem}>
            <div className={css.left}>
              <span>@Username</span>
            </div>
            <div className={css.right}>
              <button className={css.followButton}>
                <SlUserFollowing size={20} />
                <span>Following</span>
              </button>
            </div>
          </div>
          <div
            className={css.personItem}
            style={{ color: "red", fontWeight: "bold" }}
          >
            NOTE: User followers will be added in future version of application.
            Above is a mock example of how it would look like.
          </div>
        </div>
      ) : (
        followsData.map((oneFollower, index) => (
          <OneFollowPerson key={index} oneFollower={oneFollower} />
        ))
      )} */}
    </div>
  );
};

export default FollowList;

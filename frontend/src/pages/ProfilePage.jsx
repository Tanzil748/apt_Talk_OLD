import React, { useContext } from "react";
import css from "../styles/profile.module.css";
import AuthContext from "../context/AuthContext";
import { SlUserFollow, SlUserFollowing, SlUserUnfollow } from "react-icons/sl";
import UserPost from "../components/UserPost";

const ProfilePage = () => {
  const userPosts = [
    {
      id: 1,
      username: "Tanzil Hassan",
      userId: 1,
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi tempore ducimus ullam rerum? Optio soluta ullam dolores nihil placeat aspernatur velit totam. Sapiente voluptatem alias ipsam illum amet dolore vitae.",
      picture:
        "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXBhcnRtZW50fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1400&q=60",
    },
  ];
  const { loggedUser } = useContext(AuthContext);
  return (
    <div className={css.layout}>
      <div className={css.header}>
        <h2 className={css.title}>{loggedUser.username} Activity</h2>
        <button className={css.followButton}>
          <SlUserFollow size={20} />
          <span>Follow User</span>
        </button>
      </div>

      {userPosts.map((post) => (
        <UserPost post={post} key={post.id} />
      ))}
    </div>
  );
};

export default ProfilePage;

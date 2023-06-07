import React, { useState } from "react";
import css from "../styles/userPost.module.css";
import { BiUpvote, BiDownvote, BiChat } from "react-icons/bi";
import CommentSection from "./CommentSection";

const UserPost = ({ post }) => {
  const [openComment, setOpenComment] = useState(false);

  return (
    <div key={post.id} className={css.postCard}>
      <div className={css.topRow}>
        <div style={{ display: "flex", gap: "5px" }}>
          <p>{post.username}</p>|<span>Time</span>
        </div>
        <button className={css.followButton}>Follow</button>
      </div>
      <div className={css.content}>
        <p>{post.text}</p>
        <img src={post.picture} alt="" className={css.pic} />
      </div>
      <div className={css.feedback}>
        <div className={css.reactButton}>
          <BiUpvote size={20} />
          <span>Upvote</span>
        </div>
        <div className={css.reactButton}>
          <BiDownvote size={20} />
          <span>Downvote</span>
        </div>
        <div
          className={css.reactButton}
          onClick={() => setOpenComment(!openComment)}
        >
          <BiChat size={20} />
          <span>Comments</span>
        </div>
      </div>
      {openComment && <CommentSection />}
    </div>
  );
};

export default UserPost;

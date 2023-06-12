import React, { useState } from "react";
import css from "../styles/userPost.module.css";
import { BiUpvote, BiDownvote, BiChat } from "react-icons/bi";
import CommentSection from "./CommentSection";

const UserPost = ({ post }) => {
  const [openComment, setOpenComment] = useState(false);

  return (
    <div key={post.id} className={css.postCard}>
      <div className={css.topRow}>
        <div style={{ color: "gray", fontSize: "0.8rem" }}>
          <p>Posted by @{post.username}</p>
        </div>
        <button className={css.followButton}>Follow</button>
      </div>
      <h3>{post.title}</h3>
      <div className={css.content}>
        <p>{post.postcontent}</p>
        {post?.picture ? (
          <div className={css.picContainer}>
            <img src={"./upload/" + post.picture} alt="" className={css.pic} />
          </div>
        ) : null}
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

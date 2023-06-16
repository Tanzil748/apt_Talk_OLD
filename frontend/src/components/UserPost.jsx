import React, { useContext, useState } from "react";
import css from "../styles/userPost.module.css";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import ChatRoundedIcon from "@mui/icons-material/ChatRounded";
import CommentSection from "./CommentSection";
import { SlUserFollow } from "react-icons/sl";
import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import { apiRequests } from "../axios.js";
import AuthContext from "../context/AuthContext";

const UserPost = ({ post }) => {
  const { loggedUser } = useContext(AuthContext);
  const [openComment, setOpenComment] = useState(false);

  const { isLoading, data } = useQuery(["bookmarks", post.id], () =>
    apiRequests.get("/bookmark?postId=" + post.id).then((res) => res.data)
  );

  // console.log(data); // used this for testing bookmark output

  const queryClient = useQueryClient();

  const mutation = useMutation(
    (bookmarked) => {
      if (bookmarked) {
        return apiRequests.delete("/bookmark?postId=" + post.id);
      } else {
        return apiRequests.post("/bookmark", { postId: post.id });
      }
    },
    {
      onSuccess: () => {
        // Invalidate and refetch
        queryClient.invalidateQueries({ queryKey: ["bookmarks"] });
      },
    }
  );

  const bookmarkHandler = () => {
    mutation.mutate(data.includes(loggedUser.others.id));
  };

  return (
    <div key={post.id} className={css.postCard}>
      <div className={css.topRow}>
        <div style={{ color: "gray", fontSize: "0.8rem" }}>
          <p>Posted by @{post.username}</p>
        </div>
        <button className={css.followButton}>
          <SlUserFollow /> <span>Follow</span>
        </button>
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
        {data && data.includes(loggedUser.others.id) ? (
          <div className={css.reactButton}>
            <BookmarkIcon onClick={bookmarkHandler} />
            <span>
              {data && data.length !== undefined ? data.length : null} Bookmark
            </span>
          </div>
        ) : (
          <div className={css.reactButton}>
            <BookmarkBorderIcon onClick={bookmarkHandler} />
            <span>
              {data && data.length !== undefined ? data.length : null} Bookmark
            </span>
          </div>
        )}
        <div
          className={css.reactButton}
          onClick={() => setOpenComment(!openComment)}
        >
          <ChatRoundedIcon style={{ marginRight: "6px" }} />
          <span>Comments</span>
        </div>
      </div>
      {openComment && <CommentSection postId={post.id} />}
    </div>
  );
};

export default UserPost;

import { useState } from "react";
import css from "../styles/commentSection.module.css";
import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import { apiRequests } from "../axios.js";
import { FaEllipsisH } from "react-icons/fa";

const CommentSection = ({ postId }) => {
  const [commentContent, setCommentContent] = useState("");

  const { isLoading, data } = useQuery(["comments"], () =>
    apiRequests.get("/comment?postId=" + postId).then((res) => res.data)
  );

  const queryClient = useQueryClient();

  const mutation = useMutation(
    (newComment) => {
      return apiRequests.post("/comment/addComment", newComment);
    },
    {
      onSuccess: () => {
        // Invalidate and refetch
        queryClient.invalidateQueries({ queryKey: ["comments"] });
      },
    }
  );

  const submitHandler = async (e) => {
    e.preventDefault();
    if (commentContent.trim() === "") {
      // Check if commentContent is empty or contains only whitespace
      return;
    }
    mutation.mutate({ commentContent, postId });
    setCommentContent("");
  };

  return (
    <div>
      <form className={css.commentInput} onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Enter a comment"
          value={commentContent}
          onChange={(e) => setCommentContent(e.target.value)}
        />
        <button type="submit">Post</button>
      </form>
      {isLoading ? (
        "Comments Loading..."
      ) : Array.isArray(data) && data.length > 0 ? (
        data.map((comment) => (
          <div key={comment.id} className={css.commentContainer}>
            <div>
              <div className={css.topRow}>
                <div style={{ fontWeight: "500" }}>@{comment.username}</div>
              </div>
              <div className={css.content}>
                <div style={{ fontSize: "0.8rem" }}>
                  {comment.commentcontent}
                </div>
              </div>
            </div>
            <div className={css.right}>
              <FaEllipsisH />
            </div>
          </div>
        ))
      ) : (
        <span style={{ display: "flex", justifyContent: "center" }}>
          No comments...
        </span>
      )}
    </div>
  );
};

export default CommentSection;

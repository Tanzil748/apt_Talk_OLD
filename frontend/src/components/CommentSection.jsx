import { useContext } from "react";
import css from "../styles/commentSection.module.css";
import AuthContext from "../context/AuthContext";

const CommentSection = () => {
  const { loggedUser } = useContext(AuthContext);
  const fakeComments = [
    {
      id: 1, //comment id
      username: "tanzil333",
      userid: 1,
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae cumque ex ratione doloribus omnis blanditiis totam accusantium consectetur iure porro!",
    },
    {
      id: 2, //comment id
      username: "bob1537",
      userid: 55,
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae cumque ex ratione doloribus omnis blanditiis totam accusantium consectetur iure porro!",
    },
    {
      id: 3, //comment id
      username: "fake111",
      userid: 3,
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae cumque ex ratione doloribus omnis blanditiis totam accusantium consectetur iure porro!",
    },
  ];
  return (
    <div>
      <div className={css.commentInput}>
        <input type="text" placeholder="Enter a comment" />
        <button>Post</button>
      </div>
      {fakeComments.map((comment) => (
        <div key={comment.id}>
          <div className={css.topRow}>
            <div style={{ fontWeight: "600" }}>@{comment.username}</div>
            <div style={{ color: "lightgray" }}>|</div>
            <div style={{ color: "gray", fontSize: "12px" }}>Time</div>
          </div>
          <div className={css.content}>
            <div style={{ fontSize: "0.9rem" }}>{comment.message}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CommentSection;

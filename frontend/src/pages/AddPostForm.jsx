import { useState, useContext } from "react";
import css from "../styles/addPost.module.css";
import { useNavigate } from "react-router-dom";
import { useQueryClient, useMutation } from "@tanstack/react-query";
import { apiRequests } from "../axios.js";
import AuthContext from "../context/AuthContext";

const AddPostForm = () => {
  const { loggedUser } = useContext(AuthContext);

  const [title, setTitle] = useState("");
  const [postContent, setPostContent] = useState("");
  const [file, setFile] = useState(null);

  const navigate = useNavigate();

  const queryClient = useQueryClient();

  const mutation = useMutation(
    (newPost) => {
      return apiRequests.post("/post/addPost", newPost);
    },
    {
      onSuccess: () => {
        // Invalidate and refetch
        queryClient.invalidateQueries({ queryKey: ["posts"] });
      },
    }
  );

  const postAuthorId =
    loggedUser && loggedUser.others ? loggedUser.others.id : null;

  const submitHandler = async (e) => {
    e.preventDefault();
    mutation.mutate({ title, postContent, postAuthorId });
    navigate("/");
  };

  return (
    <div className={css.backdrop}>
      <form className={css.container} onSubmit={submitHandler}>
        <p style={{ textAlign: "center", fontSize: "2rem" }}>Create a post!</p>
        <label style={{ fontSize: "1.1rem" }}>Title:</label>
        <input
          type="text"
          placeholder="Thoughts on rent in Elmhurst?"
          className={css.titleInput}
          onChange={(e) => setTitle(e.target.value)}
        />
        <div className={css.contentContainer}>
          <label style={{ fontSize: "1.1rem" }}>Post Content:</label>
          <textarea
            cols="30"
            rows="10"
            placeholder="I've been looking for an apartment..."
            className={css.contentInput}
            onChange={(e) => setPostContent(e.target.value)}
          ></textarea>
        </div>
        <input type="file" className={css.fileInput} />
        <div className={css.buttonContainer}>
          <button className={css.button}>Post Form</button>
        </div>
      </form>
    </div>
  );
};

export default AddPostForm;

import React from "react";
import css from "../styles/addPost.module.css";
import { useNavigate } from "react-router-dom";

const AddPostForm = () => {
  const navigate = useNavigate();
  const submitHandler = async (e) => {
    e.preventDefault();
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
        />
        <div className={css.contentContainer}>
          <label style={{ fontSize: "1.1rem" }}>Post Content:</label>
          <textarea
            cols="30"
            rows="10"
            placeholder="I've been looking for an apartment..."
            className={css.contentInput}
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

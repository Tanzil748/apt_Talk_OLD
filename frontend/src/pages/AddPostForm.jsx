import { useState } from "react";
import css from "../styles/addPost.module.css";
import { useNavigate } from "react-router-dom";
import { useQueryClient, useMutation } from "@tanstack/react-query";
import { apiRequests } from "../axios.js";

const AddPostForm = () => {
  const [title, setTitle] = useState("");
  const [postContent, setPostContent] = useState("");
  const [file, setFile] = useState(null);

  const upload = async () => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      const res = await apiRequests.post("/upload", formData);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };

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

  const submitHandler = async (e) => {
    e.preventDefault();
    let picUrl = "";
    if (file) {
      picUrl = await upload();
    }
    mutation.mutate({ title, postContent, picture: picUrl });
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
        <input
          type="file"
          className={css.fileInput}
          onChange={(e) => setFile(e.target.files[0])}
        />
        <div className={css.buttonContainer}>
          <button className={css.button}>Post Form</button>
        </div>
      </form>
    </div>
  );
};

export default AddPostForm;

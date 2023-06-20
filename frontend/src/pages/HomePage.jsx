import React from "react";
import css from "../styles/home.module.css";
import FollowList from "../components/FollowList";
import { BiMessageSquareAdd } from "react-icons/bi";
import UserPost from "../components/UserPost";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { apiRequests } from "../axios.js";

const HomePage = () => {
  const navigate = useNavigate();
  const { isLoading, data, error } = useQuery(["posts"], () =>
    apiRequests.get("/post").then((res) => res.data)
  );

  // console.log(data?.rows); //testing

  const {
    isLoading: followsLoading,
    data: followsData,
    error: followsError,
  } = useQuery(["follow"], () =>
    apiRequests.get("/follow").then((res) => res.data)
  );

  if (isLoading || followsLoading) return "Loading...";
  if (error || followsError)
    return "An error has occurred: " + (error || followsError).message;

  // console.log(followsData); // testing followsData output
  return (
    <div className={css.layout}>
      <div className={css.leftMenu}>
        <FollowList followsData={followsData} />
      </div>
      <div className={css.rightSide}>
        <div className={css.buttonWrapper}>
          <button
            className={css.addButton}
            onClick={() => navigate("/addPost/:id")}
          >
            <span>Add Post</span>
            <BiMessageSquareAdd size={20} />
          </button>
        </div>
        {data?.rows.map((post) => (
          <UserPost post={post} key={post.id} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;

import React from "react";
import css from "../styles/home.module.css";
import FollowList from "../components/FollowList";
import { BiMessageSquareAdd } from "react-icons/bi";
import UserPost from "../components/UserPost";

const HomePage = () => {
  const fakeData = [
    {
      id: 1,
      username: "Tanzil Hassan",
      userId: 1,
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi tempore ducimus ullam rerum? Optio soluta ullam dolores nihil placeat aspernatur velit totam. Sapiente voluptatem alias ipsam illum amet dolore vitae.",
      picture:
        "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXBhcnRtZW50fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1400&q=60",
    },
    {
      id: 2,
      username: "Bob Johnson",
      userId: 2,
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi tempore ducimus ullam rerum? Optio soluta ullam dolores nihil placeat aspernatur velit totam. Sapiente voluptatem alias ipsam illum amet dolore vitae.",
      picture:
        "https://images.unsplash.com/photo-1515263487990-61b07816b324?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YXBhcnRtZW50fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1400&q=60",
    },
    {
      id: 3,
      username: "John Jones",
      userId: 3,
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi tempore ducimus ullam rerum? Optio soluta ullam dolores nihil placeat aspernatur velit totam. Sapiente voluptatem alias ipsam illum amet dolore vitae.",
      // picture:
      //   "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1400&q=60",
    },
  ];

  return (
    <div className={css.layout}>
      <div className={css.leftMenu}>
        <FollowList />
      </div>
      <div className={css.rightSide}>
        <div className={css.buttonWrapper}>
          <button className={css.addButton}>
            <span>Add Post</span>
            <BiMessageSquareAdd size={20} />
          </button>
        </div>
        {fakeData.map((post) => (
          <UserPost post={post} key={post.id} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;

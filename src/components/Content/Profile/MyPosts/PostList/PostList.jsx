import React from "react";
import style from "./PostList.module.css";
import Post from "../Post/Post";

const PostList = (props) => {
  let postElements = props.posts.map((p) => (
    <Post message={p.message} N={p.id} like={p.like} dislike={p.dislike} />
  ));

  return (
    <div>
      <div className="postList">{postElements}</div>
    </div>
  );
};

export default PostList;

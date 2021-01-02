import React from "react";
import style from "./MyPosts.module.css";
import "./MyPosts.css";
import Post from "./Post/Post";
import { Link } from "react-router-dom";

const MyPosts = (props) => {
  let postElements = props.posts.map((p) => (
    <Post
      message={p.message}
      N={p.id}
      like={p.like}
      dislike={p.dislike}
      key={p.id}
    />
  ));

  let newPostElement = React.createRef();

  let onAddPost = () => {
    props.addPost();
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  };

  return (
    <div className={style.myPost}>
      <h1 className={style.title}>My Posts</h1>
      <div className="postForm">
        <textarea
          onChange={onPostChange}
          ref={newPostElement}
          value={props.newPostText}
        />
        <br />
        <button onClick={onAddPost} className={style.btn_red}>
          Send Message
        </button>
        <Link to="#">More</Link>
      </div>
      <div className="panel"></div>
      <div className="postList">{postElements}</div>
    </div>
  );
};

export default MyPosts;

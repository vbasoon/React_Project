import React from "react";
import "./Profile.css";
import style from "./Profile.module.css";
import MyPostsContainer from "./MyPosts/MyPostsContainer.jsx";
import MyInfo from "./MyPosts/MyInfo/MyInfo.jsx";

const Profile = (props) => {
  return (
    <div className="container">
      ================ Hero Scrreen ===========================
      <div className="hero">
        <img
          src="https://it-black.ru/wp-content/uploads/2019/04/nasledovanie_css.png"
          alt="empty"
        />
      </div>
      ==========================================================
      <div className="myProfile">
        <div className={style.container}>
          <h1 className="title">My Profile</h1>
          <MyInfo />
          +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
          <MyPostsContainer />
          ===========================================
          {/* <PostList posts={props.postPages.posts} /> */}
          ===============================================
        </div>
        <button>Add Your File!</button>
      </div>
    </div>
  );
};
export default Profile;

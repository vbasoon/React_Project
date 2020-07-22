import React from 'react';
import './Profile.css'
import style from './Profile.module.css'
import PostList from './MyPosts/PostList/PostList.jsx';
import MyPost from './MyPosts/MyPosts.jsx';
import MyInfo from './MyPosts/MyInfo/MyInfo.jsx';

const Profile = () => {
   return (
      <div className="main">
         <div className="container">
            <div className="content">
               ================ Hero Scrreen ===========================
               <div className="hero">
                  <img src="https://it-black.ru/wp-content/uploads/2019/04/nasledovanie_css.png" alt="empty" />
               </div>
               ==========================================================
               <div className="myProfile">
                  <h1 className="title">My Profile</h1>
                  <MyInfo />
                  +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
                  <MyPost />
                  ===========================================
                  <PostList />
                  ===============================================
               </div>
               <button>Add Your File!</button>
            </div>
         </div>
      </div>
   )
}
export default Profile

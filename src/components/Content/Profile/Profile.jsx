import React from 'react';
import './Profile.css'
import PostList from '../PostList';
import MyPost from './MyPosts/Post/MyPost';
import Avatar from '../Avatar/Avatar';

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
                  <Avatar />
                  +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
                  <MyPost />
                  ===========================================
                  <PostList />
                  ===============================================
               </div>
            </div>
         </div>
      </div>
   )
}
export default Profile

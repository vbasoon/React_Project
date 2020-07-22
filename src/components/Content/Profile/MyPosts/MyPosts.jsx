import React from 'react';
import style from './MyPosts.module.css';
import './MyPosts.css';
const MyPosts = () => {
   return (
      <div className="myPost">
         <h1 className={style.title}>My Posts</h1>
         <h1 className="title">My Posts</h1>
         <div className="postForm">
            <textarea></textarea>
            <br />
            <button className={style.btn_red}>Send Message</button>
            <a href="#">More</a>
         </div>
         <div className="panel">

         </div>
      </div>
   )
}

export default MyPosts
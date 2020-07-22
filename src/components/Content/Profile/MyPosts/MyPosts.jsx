import React from 'react';
import style from './MyPosts.module.css';

const MyPosts = () => {
   return (
      <div className="myPost">
         <h1 className="title">My Posts</h1>

         <div className="postForm">

            <input className="inputPost" type="text" placeholder="Input text here">

            </input><br />
            <button className={style.btn_red}>Send Message</button>
            <a href="#">More</a>
         </div>
      </div>
   )
}

export default MyPosts
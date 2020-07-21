import React from 'react';
import style from './MyPost.module.css';

const MyPost = () => {
   return (
      <div className="myPost">
         <h1>My Posts</h1>

         <div className="postForm">

            <input type="text" placeholder="Input text here">

            </input><br />
            <button>Send Message</button>
         </div>
      </div>
   )
}

export default MyPost
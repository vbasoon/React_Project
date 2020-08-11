import React from 'react';
import style from './MyPosts.module.css';
import './MyPosts.css';
const MyPosts = (props) => {

   let newPostElement = React.createRef();

   let addPost = (props) => {
      let text = newPostElement.current.value;
      props.addPost(text)
   }

   debugger
   return (
      <div className={style.myPost}>
         <h1 className={style.title}>My Posts</h1>
         <div className="postForm">
            <textarea ref={newPostElement}></textarea>
            <br />
            <button onClick={props.addPost} className={style.btn_red}>Send Message</button>
            <a href="#">More</a>
         </div>
         <div className="panel">

         </div>
      </div>
   )
}

export default MyPosts
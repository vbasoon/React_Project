import React from 'react';
import style from './MyPosts.module.css';
import './MyPosts.css';
const MyPosts = (props) => {

   let newPostElement = React.createRef();

   let addPost = () => {
      let text = newPostElement.current.value;
      props.addPost(text)
      newPostElement.current.value = '';
   }

   let onPostChange = () => {
      let text = newPostElement.current.value;
      console.log(text)
   }

   return (
      <div className={style.myPost}>
         <h1 className={style.title}>My Posts</h1>
         <div className="postForm">
            <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} />
            <br />
            <button onClick={addPost} className={style.btn_red}>Send Message</button>
            <a href="#">More</a>
         </div>
         <div className="panel">

         </div>
      </div>
   )
}

export default MyPosts
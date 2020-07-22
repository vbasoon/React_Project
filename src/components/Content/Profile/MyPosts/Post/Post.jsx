import React from 'react'
import './Post.css'
import style from './Post.module.css'
import Avatar from '../MyInfo/Avatar/Avatar';

const Post = (props) => {
   return (
      <div>
         <div className={style.item}>
            ++++++++++++++++++++++++++++++
            <h3>Post {props.N}</h3>
            <div className={style.image_box}>
               <img className={style.img} src="./cat.png" alt="cat" /><span>{props.p}</span>
            </div>
            <span><i className="fa fa-thumbs-up like" ></i>{props.like}</span><span><i className="fa fa-thumbs-down dislike">{props.dislike}</i></span>
         </div>
      </div>
   )
}

export default Post

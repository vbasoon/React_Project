import React from 'react'
import style from './Post.module.css'
import Avatar from '../MyInfo/Avatar/Avatar';

function Post() {
   return (
      <div>
         <div className={style.item}>
            ++++++++++++++++++++++++++++++
            <h3>Post N</h3>
            <div className={style.image_box}>
               <img className={style.img} src="./cat.png" alt="cat" /><span> post</span>
            </div>

         </div>
      </div>
   )
}

export default Post

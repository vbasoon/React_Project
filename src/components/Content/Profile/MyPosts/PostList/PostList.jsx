import React from 'react'
import style from './PostList.module.css'
import Post from '../Post/Post'


const PostList = () => {
   return (
      <div>
         <div className={style.postList}>
            <Post />
            <Post />
            <Post />
            <Post />
         </div>
      </div>
   )
}

export default PostList

import React from 'react'
import style from './PostList.module.css'
import Post from '../Post/Post'


const PostList = (props) => {
   return (
      <div>
         <div className="postList">
            <Post p="Hello!" N="1" like="4" dislike="0" />
            <Post p="Hi!" N="2" like="4" dislike="0" />
            <Post p="How are u?" N="3" like="4" dislike="0" />
            <Post p="Здоровенькі були!" N="4" like="4" dislike="0" />
         </div>
      </div>
   )
}

export default PostList

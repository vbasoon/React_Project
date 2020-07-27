import React from 'react'
import style from './PostList.module.css'
import Post from '../Post/Post'


const PostList = (props) => {

   let PostsData = [
      { id: 1, message: "Hello!", like: 4, dislike: 0 },
      { id: 2, message: "Hi!", like: 4, dislike: 0 },
      { id: 3, message: "How are u?!", like: 3, dislike: 0 },
      { id: 4, message: "Здоровенькі були!!", like: 42, dislike: 0 }

   ]

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

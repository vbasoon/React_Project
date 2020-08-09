import React from 'react'
import style from './PostList.module.css'
import Post from '../Post/Post'


const PostList = (props) => {

   let posts = [
      { id: 1, message: "Hello!", like: 4, dislike: 0 },
      { id: 2, message: "Hi!", like: 4, dislike: 0 },
      { id: 3, message: "How are u?!", like: 3, dislike: 0 },
      { id: 4, message: "Здоровенькі були!!", like: 42, dislike: 0 },
      { id: 5, message: "How are u?!", like: 3, dislike: 0 },
      { id: 6, message: "Здоровенькі були!!", like: 42, dislike: 0 }
   ]

   let postElements = props.posts
      .map(p => <Post message={p.message} N={p.id} like={p.like} dislike={p.dislike} />);

   return (
      <div>
         <div className="postList">

            {
               postElements
            }
            {/* <Post message={PostsData[0].message} N={PostsData[0].id} like={PostsData[0].like} dislike={PostsData[0].dislike} />
            <Post message={PostsData[1].message} N={PostsData[1].id} like={PostsData[1].like} dislike={PostsData[1].dislike} />
            <Post message={PostsData[2].message} N={PostsData[2].id} like={PostsData[2].like} dislike={PostsData[2].dislike} />
            <Post message={PostsData[3].message} N={PostsData[3].id} like={PostsData[3].like} dislike={PostsData[3].dislike} /> */}
         </div>
      </div>
   )
}

export default PostList

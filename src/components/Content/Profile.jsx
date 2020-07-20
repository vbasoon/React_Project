import React from 'react';
import Post from './Post';
import './Profile.css'

const Profile = () => {
   return (
      <div className="main">
         <div className="container">
            <div className="content">
               <img src="https://it-black.ru/wp-content/uploads/2019/04/nasledovanie_css.png" alt="empty" />
               <div>
                  <Post />
               </div>
               <div>
                  My Post
              </div>
               <div>
                  My Post
              </div>
               <div>
                  New Post
              </div>
               <div>
                  Post1
              </div>
               <div>
                  Post2
              </div>
               <div>
                  Post3
              </div>
            </div>
         </div>
      </div>
   )
}
export default Profile

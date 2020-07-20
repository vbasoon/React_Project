import React from 'react';

const Sidebar = () => {
   return (
      <aside className="sidebar">Sidebar
         <nav>
            <div className="container">
               <ul>
                  <li><a href="">Profile</a></li>
                  <li><a href="">Message</a></li>
                  <li><a href="">News</a></li>
                  <li><a href="">Music</a></li>
                  <hr />
                  <li><a href="">Settings</a></li>
               </ul>
            </div>
         </nav>
      </aside>
   )
}
export default Sidebar

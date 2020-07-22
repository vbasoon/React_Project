import React from 'react';
import style from './Sidebar.module.css'
import './Sidebar.css'
const Sidebar = () => {
   return (
      <aside className="sidebar">Sidebar
         <nav>
            <div className="container">
               <ul className="nav-menu">
                  <li className={style.item}><a href="" className="active">Profile</a></li>
                  <li className={style.item}><a href="">Message</a></li>
                  <li className={style.item}><a href="">News</a></li>
                  <li className={style.item}><a href="" className="disabled"> Music</a></li>
                  <hr />
                  <li className={style.item}><a href="">Settings</a></li>
               </ul>
            </div>
         </nav >
      </aside >
   )
}
export default Sidebar

import React from 'react';
import './Sidebar.css'
import s from './Sidebar.module.css'

const Sidebar = () => {
   return (
      <aside className="sidebar">Sidebar
         <nav>
            <div className="container">
               <ul className="nav-menu">
                  <li className="item-menu"><a href="" className={s.active}>Profile</a></li>
                  <li className="item-menu"><a href="">Message</a></li>
                  <li className="item-menu"><a href="">News</a></li>
                  <li className="item-menu"><a href="" className={s.disabled}> Music</a></li>
                  <hr />
                  <li className="item-menu"><a href="">Settings</a></li>
               </ul>
            </div>
         </nav>
      </aside>
   )
}
export default Sidebar

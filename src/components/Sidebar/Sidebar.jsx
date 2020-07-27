import React from 'react';
import style from './Sidebar.module.css'
import './Sidebar.css'
import { NavLink } from 'react-router-dom';
const Sidebar = () => {
   return (
      <aside className="sidebar">
         <nav>
            <div className="container">
               <ul className="nav-menu">
                  <li className={style.item}><NavLink to="/profile" activeClassName={style.activeLink}>Profile</NavLink></li>
                  <li className={style.item}><NavLink to="/messages" activeClassName={style.activeLink}>Message</NavLink></li>
                  <li className={style.item}><NavLink to="/news" activeClassName={style.activeLink}>News</NavLink></li>
                  <li className={style.item}><NavLink to="/music" activeClassName={style.activeLink}> Music</NavLink></li>
                  <hr />
                  <li className={style.item}><NavLink to="/settings" activeClassName={style.activeLink}>Settings</NavLink></li>
               </ul>
            </div>
         </nav >
      </aside >
   )
}
export default Sidebar

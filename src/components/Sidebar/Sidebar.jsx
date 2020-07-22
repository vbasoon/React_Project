import React from 'react';
import s from './Sidebar.module.css'

const Sidebar = () => {
   return (
      <aside className="sidebar">Sidebar
         <nav>
            <div className="container">
               <ul className="nav-menu">
                  <li className={s.itemMenu}><a href="" className={s.active}>Profile</a></li>
                  <li className={s.itemMenu}><a href="">Message</a></li>
                  <li className={s.itemMenu}><a href="">News</a></li>
                  <li className={s.itemMenu}><a href="" className={s.disabled}> Music</a></li>
                  <hr />
                  <li className={s.itemMenu}><a href="">Settings</a></li>
               </ul>
            </div>
         </nav>
      </aside>
   )
}
export default Sidebar

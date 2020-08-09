import React from 'react';
import './Header.css'
import style from './Header.module.css'


const Header = () => {
   return (<header>
      <div className={style.header}>
         <div className="container">
            <img src="./logo.png" alt="loo" />
               Header
            </div>
      </div>
   </header>)
}

export default Header
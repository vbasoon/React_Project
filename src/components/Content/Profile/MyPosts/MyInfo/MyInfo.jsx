import React from 'react'
import style from './MyInfo.module.css'
import Avatar from './Avatar/Avatar'
import Info from './Info/Info'

const MyInfo = () => {
   return (
      <div>
         <div className="avatar">
            <div className={style.row}>
               <div className={style.image_box}>
                  <img src="./cat.png" alt="cat" />
               </div>
               <Avatar />
               <Info />
               <div className={style.info_box}>
                  <p>Date of Birth: </p>
                  <p>City: </p>
                  <p>Education: </p>
                  <p>WEB Site</p>
               </div>
            </div>
         </div>
      </div>
   )
}

export default MyInfo

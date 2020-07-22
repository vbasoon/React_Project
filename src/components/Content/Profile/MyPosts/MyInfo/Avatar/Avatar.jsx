import React from 'react'
import style from './Avatar.module.css'

const Avatar = () => {
   return (
      <div>
         <div className="avatar">
            <div className={style.image_box}>
               <img src="./cat.png" alt="cat" />
            </div>
         </div>
      </div>
   )
}

export default Avatar

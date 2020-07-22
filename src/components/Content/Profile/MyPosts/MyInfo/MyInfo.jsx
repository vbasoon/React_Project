import React from 'react'
import style from './MyInfo.module.css'
import Avatar from './Avatar/Avatar'
import Info from './Info/Info'

const MyInfo = () => {
   return (
      <div>
         <div className="avatar">
            <div className={style.row}>

               <Avatar />
               <Info />


            </div>
         </div>
      </div>
   )
}

export default MyInfo

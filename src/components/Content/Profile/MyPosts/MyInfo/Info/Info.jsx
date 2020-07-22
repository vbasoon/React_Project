import React from 'react'
import style from './Info.module.css'

const Info = () => {
   return (
      <div>
         <div className={style.info_box}>
            <p>Date of Birth: </p>
            <p>City: </p>
            <p>Education: </p>
            <p>WEB Site</p>
         </div>
      </div>
   )
}

export default Info

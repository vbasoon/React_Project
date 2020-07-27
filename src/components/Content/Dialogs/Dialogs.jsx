import React from 'react'
import style from './Dialogs.module.css'

const Dialogs = (props) => {
   return (
      <div className={style.dialogs}>
         <div className={style.dialogsItem}>
            <div className={style.dialog}>
               Dima
            </div>
            <div className={style.dialog}>
               Lena
            </div>
            <div className={style.dialog}>
               Sveta
            </div>
            <div className={style.dialog}>
               Roma
            </div>
            <div className={style.dialog}>
               Nataha
            </div>
            <div className={style.dialog}>
               Sasha
            </div>
         </div>
         <div className={style.messages}>

            <div className={style.message}>Hi</div>
            <div className={style.message}>How are u doing?</div>
            <div className={style.message}>Thanx</div>

         </div>
      </div>
   )
}

export default Dialogs
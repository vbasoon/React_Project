import React from 'react'
import style from './Dialogs.module.css'
meimport { NavLink } from 'react-router-dom';

const DialogItem = (props) => {

   let path = "/messages/" + props.id;

   return (
      <div className={style.dialog + ' ' + style.active}>
         <NavLink to={path}>{props.name}</NavLink>
      </div>
   )
}

const Message = (props) => {
   return (
      <div className={style.message}>{props.words}</div>
   )
}

const Dialogs = (props) => {
   return (
      <div className={style.dialogs}>
         <div className={style.dialogsItem}>
            <DialogItem name="Dima" id="1" />
            <DialogItem name="Lena" id="2" />
            <DialogItem name="Sveta" id="3" />
            <DialogItem name="Roma" id="4" />
            <DialogItem name="Nataha" id="5" />
            <DialogItem name="Sashata" id="6" />

            {/* <div className={style.dialog}>
               <NavLink to="/messages/{props.N}">Lena</NavLink>
            </div>
            <div className={style.dialog}>
               <NavLink to="/messages/3">Sveta</NavLink>
            </div>
            <div className={style.dialog}>
               <NavLink to="/messages/4" >Roma</NavLink>
            </div>
            <div className={style.dialog}>
               <NavLink to="/messages/5" >Nataha</NavLink>
            </div>
            <div className={style.dialog}>
               <NavLink to="/messages/6">Sasha</NavLink>
            </div> */}
         </div>
         <div className={style.messages}>
            <Message words="Hi!" />
            <Message words="How are u doing?" />
            <Message words="Thanx" />
         </div>
      </div>
   )
}

export default Dialogs
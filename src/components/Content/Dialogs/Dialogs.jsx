import React from 'react'
import style from './Dialogs.module.css'
import { NavLink } from 'react-router-dom';

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
      <div className={style.message}>{props.message}</div>
   )
}

const Dialogs = (props) => {

   let dialogsData = [
      { id: 1, name: "Dima" },
      { id: 2, name: "Lena" },
      { id: 3, name: "Sveta" },
      { id: 4, name: "Roma" },
      { id: 5, name: "Nataha" },
      { id: 6, name: "Sasha" }
   ]

   let messageData = [
      { id: 1, name: "Dima" },
      { id: 2, name: "Lena" },
      { id: 3, name: "Sveta" },
      { id: 4, name: "Roma" },
      { id: 5, name: "Nataha" },
      { id: 6, name: "Sasha" }
   ]

   return (
      <div className={style.dialogs}>
         <div className={style.dialogsItem}>
            <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
            <DialogItem name="Lena" id="2" />
            <DialogItem name="Sveta" id="3" />
            <DialogItem name="Roma" id="4" />
            <DialogItem name="Nataha" id="5" />
            <DialogItem name="Sasha" id="6" />

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
            <Message message="Hi!" />
            <Message message="How are u doing?" />
            <Message message="Thanx" />
         </div>
      </div>
   )
}

export default Dialogs
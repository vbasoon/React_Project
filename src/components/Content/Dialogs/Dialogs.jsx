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

   // Данні

   let users = [
      { id: 1, name: "Dima" },
      { id: 2, name: "Lena" },
      { id: 3, name: "Sveta" },
      { id: 4, name: "Roma" },
      { id: 5, name: "Nataha" },
      { id: 6, name: "Sasha" }
   ]

   let messages = [
      { id: 1, message: "Hi!" },
      { id: 2, message: "How are u doing?" },
      { id: 3, message: "Thanx" },
   ]

   //Перетворення (мапінґ)

   let dialogElements = users
      .map(d => <DialogItem name={d.name} id={d.id} />);


   let messageElements = messages
      .map(m => <Message message={m.message} />);

   // Відображення (рендерінґ)

   return (
      <div className={style.dialogs}>
         <div className={style.dialogsItem}>
            {
               dialogElements
            }
         </div>
         <div className={style.messages}>
            {
               messageElements
            }
         </div>
      </div>
   )
}

export default Dialogs
import React from 'react'
import style from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import { updateNewMessageTextActionCreator, sendMessageActionCreator } from '../../../redux/state'

const Dialogs = (props) => {


   let state = props.store.getState().dialogPages;

   //Перетворення (мапінґ)

   let dialogElements = state.users
      .map(d => <DialogItem name={d.name} id={d.id} />);


   let messageElements = state.messages
      .map(m => <Message message={m.message} />);

   let newMessageText = state.newMessageText


   let onSendMessageClick = () => {
      props.store.dispatch(sendMessageActionCreator());
   }

   let onNewMessageChange = (event) => {
      let newMessage = event.target.value;
      props.store.dispatch(updateNewMessageTextActionCreator(newMessage))
   }

   // Відображення (рендерінґ)

   return (
      <div className={style.dialogs}>
         <div className={style.dialogsItem}>
            {
               dialogElements
            }
         </div>
         <div className={style.messages}>

            <div>{messageElements}</div>
            <div>
               <div><textarea value={newMessageText}
                  onChange={onNewMessageChange}
                  placeholder="Введіть сюди текст "></textarea> </div>
               <div><button onClick={onSendMessageClick}>Send</button></div>
            </div>

         </div>
      </div>
   )
}

export default Dialogs
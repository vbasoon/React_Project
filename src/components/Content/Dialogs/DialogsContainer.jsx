import React from "react";
import {
  updateNewMessageTextActionCreator,
  sendMessageActionCreator,
} from "../../../redux/dialogReducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
  let state = props.store.getState().dialogPages;

  let onSendMessageClick = () => {
    props.store.dispatch(sendMessageActionCreator());
  };

  let onNewMessageChange = (newMessage) => {
    props.store.dispatch(updateNewMessageTextActionCreator(newMessage));
  };

  // Відображення (рендерінґ)

  return (
    <Dialogs
      updateNewMessageText={onNewMessageChange}
      sendMessage={onSendMessageClick}
      dialogPages={state}
    />
  );
};

export default DialogsContainer;

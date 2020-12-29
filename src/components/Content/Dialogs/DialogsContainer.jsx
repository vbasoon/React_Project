import React from "react";
import {
  updateNewMessageTextActionCreator,
  sendMessageActionCreator,
} from "../../../redux/dialogReducer";
import StoreContext from "../../../StoreContext";
import Dialogs from "./Dialogs";

const DialogsContainer = () => {

  // Відображення (рендерінґ)

  return (
    <StoreContext.Consumer>
      { store => {
        let state = store.getState().dialogPages;

        let onSendMessageClick = () => {
          store.dispatch(sendMessageActionCreator());
        }

        let onNewMessageChange = (newMessage) => {
          store.dispatch(updateNewMessageTextActionCreator(newMessage));
        }

        return < Dialogs
          updateNewMessageText={onNewMessageChange}
          sendMessage={onSendMessageClick}
          dialogPages={state}
        />
      }
      }
    </StoreContext.Consumer>
  )
}

export default DialogsContainer;

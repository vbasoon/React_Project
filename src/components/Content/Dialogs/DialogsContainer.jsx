import React from "react";
import {
  updateNewMessageTextActionCreator,
  sendMessageActionCreator,
} from "../../../redux/dialogReducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";


let mapStateToProps = (state) => {
  return {
    dialogPages: state.dialogPages
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    updateNewMessageText: () => {
      dispatch(sendMessageActionCreator());
    },
    sendMessage: (newMessage) => {
      dispatch(updateNewMessageTextActionCreator(newMessage));
    }
  }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;

import React from "react";
import {
  updateNewMessageTextActionCreator,
  sendMessageActionCreator,
} from "../../../redux/dialogReducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";


const mapStateToProps = (state) => {
  return {
    dialogPages: state.dialogPages
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: () => {
      dispatch(sendMessageActionCreator());
    },
    updateNewMessageText: (newMessage) => {
      dispatch(updateNewMessageTextActionCreator(newMessage));
    }
  }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;

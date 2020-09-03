const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'
const SEND_MESSAGE = 'SEND_MESSAGE'

const dialogReducer = (state, action) => {

   if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
      this._state.dialogPages.newMessageText = action.newMessage;

   } else if (action.type === SEND_MESSAGE) {
      let newMessage = this._state.dialogPages.newMessageText;
      this._state.dialogPages.newMessageText = '';
      this._state.dialogPages.messages.push({ id: 6, message: newMessage });

   }

   return state;
}
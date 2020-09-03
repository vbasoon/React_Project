const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'
const SEND_MESSAGE = 'SEND_MESSAGE'

const dialogReducer = (state, action) => {
   switch (action.type) {
      case UPDATE_NEW_MESSAGE_TEXT:
         state.newMessageText = action.newMessage;
         return state;
      case SEND_MESSAGE:
         let newMessage = state.newMessageText;
         state.newMessageText = '';
         state.messages.push({ id: 6, message: newMessage });
         return state;
      default:
         return state;
   }


}

export default dialogReducer; 
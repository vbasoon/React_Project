const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'
const SEND_MESSAGE = 'SEND_MESSAGE'

let initialState = {
   users: [
      { id: 1, name: "Dima" },
      { id: 2, name: "Lena" },
      { id: 3, name: "Sveta" },
      { id: 4, name: "Roma" },
      { id: 5, name: "Nataha" },
      { id: 6, name: "Sasha" }
   ],

   messages: [
      { id: 1, message: "Hi!" },
      { id: 2, message: "How are u doing?" },
      { id: 3, message: "Thanx" }
   ],

   newMessageText: ''
}

const dialogReducer = (state = initialState, action) => {

   switch (action.type) {
      case UPDATE_NEW_MESSAGE_TEXT:
         return {
            ...state,
            newMessageText: action.newMessage
         };

      case SEND_MESSAGE:
         let newMessage = state.newMessageText;
         return {
            ...state,
            newMessageText: '',
            messages: [...state.messages, { id: 6, message: newMessage }]
         };

      default:
         return state;
   }
}

export const updateNewMessageTextActionCreator = (message) =>
   ({ type: UPDATE_NEW_MESSAGE_TEXT, newMessage: message })
export const sendMessageActionCreator = () => ({ type: SEND_MESSAGE })

export default dialogReducer; 
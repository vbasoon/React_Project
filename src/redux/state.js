const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'
const SEND_MESSAGE = 'SEND_MESSAGE'

let store = {

   _state: {

      postPages: {
         posts: [
            { id: 1, message: "Hello!", like: 4, dislike: 0 },
            { id: 2, message: "Hi!", like: 4, dislike: 0 },
            { id: 3, message: "How are u?!", like: 3, dislike: 0 },
            { id: 4, message: "Здоровенькі були!!", like: 42, dislike: 0 },
            { id: 5, message: "How are u?!", like: 3, dislike: 0 },
            { id: 6, message: "Здоровенькі були!!", like: 42, dislike: 0 }
         ],
         newPostText: ''
      }
      ,
      dialogPages: {

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


      },
      sidebar: {}
   },
   _callSubscriber() {
      console.log('State was changed');
   },
   getState() {

      return this._state
   },

   // addPost() {

   //    let newPost = {
   //       id: 5,
   //       message: this._state.postPages.newPostText, //запит даних з state
   //       like: 0
   //    };
   //    this._state.postPages.posts.push(newPost);
   //    this._state.postPages.newPostText = ''; // Онулення textarea пысля ведення даних
   //    this._callSubscriber(this._state);
   // },
   // updateNewPostText(newText) {
   //    this._state.postPages.newPostText = newText;
   //    this._callSubscriber(this._state);
   // },
   subscribe(observer) {
      this._callSubscriber = observer;
   },
   dispatch(action) {
      if (action.type === ADD_POST) {
         let newPost = {
            id: 5,
            message: this._state.postPages.newPostText, //запит даних з state
            like: 0
         };
         this._state.postPages.posts.push(newPost);
         this._state.postPages.newPostText = ''; // Онулення textarea пысля ведення даних
         this._callSubscriber(this._state);
      } else if (action.type === UPDATE_NEW_POST_TEXT) {
         this._state.postPages.newPostText = action.newText;
         this._callSubscriber(this._state);
      } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
         this._state.dialogPages.newMessageText = action.newMessage;
         this._callSubscriber(this._state);
      } else if (action.type === SEND_MESSAGE) {
         let newMessage = this._state.dialogPages.newMessageText;
         this._state.dialogPages.newMessageText = '';
         this._state.dialogPages.messages.push({ id: 6, message: newMessage });
         this._callSubscriber(this._state);
      }
   }
}

export const addPostActionCreator = () => ({ type: ADD_POST })
export const updateNewPostTextActionCreator = (text) =>
   ({ type: UPDATE_NEW_POST_TEXT, newText: text })
export const updateNewMessageTextActionCreator = (message) =>
   ({ type: UPDATE_NEW_MESSAGE_TEXT, newMessage: message })
export const sendMessageActionCreator = () => ({ type: SEND_MESSAGE })

export default store;
window.store = store;
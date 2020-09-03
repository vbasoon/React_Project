const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

const postReducer = (state, action) => {

   if (action.type === ADD_POST) {
      let newPost = {
         id: 5,
         message: this._state.postPages.newPostText, //запит даних з state
         like: 0
      };
      state.posts.push(newPost);
      state.newPostText = ''; // Онулення textarea пысля ведення даних

   } else if (action.type === UPDATE_NEW_POST_TEXT) {
      state.newPostText = action.newText;
   }


   return state;
}
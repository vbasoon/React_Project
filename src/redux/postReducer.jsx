const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

const postReducer = (state, action) => {
   switch (action.type) {
      case ADD_POST:
         let newPost = {
            id: 5,
            message: state.newPostText, //запит даних з state
            like: 0
         };
         state.posts.push(newPost);
         state.newPostText = ''; // Онулення textarea пысля ведення даних
         return state;
      case UPDATE_NEW_POST_TEXT:
         state.newPostText = action.newText;
         return state;
      default:
         return state;
   }

}

export default postReducer
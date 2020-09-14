const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'


let initialState = {
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

const postReducer = (state = initialState, action) => {
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

export const addPostActionCreator = () => ({ type: ADD_POST })
export const updateNewPostTextActionCreator = (text) =>
   ({ type: UPDATE_NEW_POST_TEXT, newText: text })

export default postReducer
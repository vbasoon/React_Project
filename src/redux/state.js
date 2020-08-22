import { rerenderEntireTree } from '../rerender';

let state = {

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
      ]


   },
   sidebar: {}
}

window.state = state

export let addPost = () => {

   let newPost = {
      id: 5,
      message: state.postPages.newPostText, //запит даних з state
      like: 0
   };

   state.postPages.posts.push(newPost);
   state.postPages.newPostText = ''; // Онулення textarea пысля ведення даних
   rerenderEntireTree(state);
}

export let updateNewPostText = (newText) => {
   state.postPages.newPostText = newText;
   rerenderEntireTree(state);
}

export default state 
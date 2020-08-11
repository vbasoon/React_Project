import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import state from './redux/state.js';
import { addPost } from './redux/state.js';
import { BrowserRouter } from 'react-router-dom';

// let posts = [
//   { id: 1, message: "Hello!", like: 4, dislike: 0 },
//   { id: 2, message: "Hi!", like: 4, dislike: 0 },
//   { id: 3, message: "How are u?!", like: 3, dislike: 0 },
//   { id: 4, message: "Здоровенькі були!!", like: 42, dislike: 0 },
//   { id: 5, message: "How are u?!", like: 3, dislike: 0 },
//   { id: 6, message: "Здоровенькі були!!", like: 42, dislike: 0 }
// ]

// let users = [
//   { id: 1, name: "Dima" },
//   { id: 2, name: "Lena" },
//   { id: 3, name: "Sveta" },
//   { id: 4, name: "Roma" },
//   { id: 5, name: "Nataha" },
//   { id: 6, name: "Sasha" }
// ]

// let messages = [
//   { id: 1, message: "Hi!" },
//   { id: 2, message: "How are u doing?" },
//   { id: 3, message: "Thanx" },
// ]

// let posts = [
//    { id: 1, message: "Hello!", like: 4, dislike: 0 },
//    { id: 2, message: "Hi!", like: 4, dislike: 0 },
//    { id: 3, message: "How are u?!", like: 3, dislike: 0 },
//    { id: 4, message: "Здоровенькі були!!", like: 42, dislike: 0 },
//    { id: 5, message: "How are u?!", like: 3, dislike: 0 },
//    { id: 6, message: "Здоровенькі були!!", like: 42, dislike: 0 }
// ]

//addPost('BVM corp lets started')

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App state={state} addPost={addPost} />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

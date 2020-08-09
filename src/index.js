import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let posts = [
  { id: 1, message: "Hello!", like: 4, dislike: 0 },
  { id: 2, message: "Hi!", like: 4, dislike: 0 },
  { id: 3, message: "How are u?!", like: 3, dislike: 0 },
  { id: 4, message: "Здоровенькі були!!", like: 42, dislike: 0 },
  { id: 5, message: "How are u?!", like: 3, dislike: 0 },
  { id: 6, message: "Здоровенькі були!!", like: 42, dislike: 0 }
]

ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

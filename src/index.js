
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from '../src/redux/redux-store';
import * as serviceWorker from './serviceWorker';
// import { addPost, updateNewPostText, subscribe } from './redux/state.js';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

ReactDOM.render(
   <React.StrictMode>
      <BrowserRouter>
         <Provider store={store}>
            <App />
         </Provider>
      </BrowserRouter>
   </React.StrictMode >,
   document.getElementById('root')
);

serviceWorker.unregister();






import { combineReducers, createStore } from "redux";
import postReducer from "./postReducer";
import dialogReducer from "./dialogReducer";
import sidebarReducer from "./sidebarReducer";
import usersReducer from "./usersReduser";

let reducers = combineReducers({
   postPages: postReducer,
   dialogPages: dialogReducer,
   sidebar: sidebarReducer,
   userPages: usersReducer
});

let store = createStore(reducers);

window.store = store;

export default store;
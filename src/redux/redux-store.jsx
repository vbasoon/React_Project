import { combineReducers, createStore } from "redux";
import postReducer from "./postReducer";
import dialogReducer from "./dialogReducer";
import sidebarReducer from "./sidebarReducer";

let reducers = combineReducers({
   postPages: postReducer,
   dialogPages: dialogReducer,
   sidebar: sidebarReducer
});

let store = createStore(reducers);

export default store;
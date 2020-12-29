import React from "react";
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from "../../../../redux/postReducer";
import MyPosts from "./MyPosts.jsx";
import StoreContext from '../../../../StoreContext';

const MyPostsContainer = () => {
  return (
    <StoreContext.Consumer>
      {
        (store) => {
          let state = store.getState();

          let addPost = () => {
            store.dispatch(addPostActionCreator());
          };

          let onPostChange = (text) => {
            let action = updateNewPostTextActionCreator(text);
            store.dispatch(action);
          };

          return <MyPosts
            updateNewPostText={onPostChange}
            addPost={addPost}
            posts={state.postPages.posts}
            newPostText={state.postPages.newPostText}
          />
        }
      }
    </StoreContext.Consumer>
  );
};

export default MyPostsContainer;

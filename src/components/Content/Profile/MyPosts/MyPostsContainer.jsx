import React from "react";
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from "../../../../redux/postReducer";
import MyPosts from "./MyPosts.jsx";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    posts: state.postPages.posts,
    newPostText: state.postPages.newPostText
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => {
      dispatch(addPostActionCreator());
    },
    updateNewPostText: (text) => {
      let action = updateNewPostTextActionCreator(text);
      dispatch(action);
    }
  }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);


export default MyPostsContainer;

//import React from 'react';
import Users from './Users';
import { connect } from 'react-redux';
import { followActionCreator, unfollowActionCreator, setUsersActionCreator } from '../../../redux/usersReduser';

let mapStateToProps = (state) => {
   return {
      users: state.userPages.users
   }
}
let mapDispatchToProps = (dispatch) => {
   return {
      follow: (userId) => {
         dispatch(followActionCreator(userId));
      },
      unfollow: (userId) => {
         dispatch(unfollowActionCreator(userId));
      },
      setUsers: (users) => {
         dispatch(setUsersActionCreator(users));
      },
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);


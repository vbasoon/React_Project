import React from 'react';
import Users from './Users';
import { connect } from 'react-redux';
import { followActionCreator, unfollowActionCreator, setUsersActionCreator } from '../../../../redux/usersReduser';

let mapStateToProps = (state) => {
   return {
      users: state.usersPage.users
   }
}
let mapDispatchToProps = (state) => {
   return {
      follow: (userId) => {
         dispatch(followActionCreator(userId));
      },
      unfollow: (userId) => {
         dispatch(unfollowActionCreator(userId));
      },
      setUser: (user) => {
         dispatch(setUsersActionCreator(user));
      },
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);


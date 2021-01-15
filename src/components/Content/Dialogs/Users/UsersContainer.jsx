import React from 'react';
import Users from './Users';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
   return {
      users: state.usersPage.users
   }
}
let mapDispatchToProps = (state) => {
   return {

   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);


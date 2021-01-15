import React from 'react';
import Users from './Users';
import { connect } from 'react-redux';

let mapStateToProps = (state) = {}
let mapDispatchToProps = (state) = {}

export default connect(mapStateToProps, mapDispatchToProps)(Users);


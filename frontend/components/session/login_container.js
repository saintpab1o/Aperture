import { connect } from 'react-redux';
import React from 'react';
import { login } from '../../actions/session_actions';
import Signup from './signup';

const mapStateToProps = ({ errors }) => {
    return {
      errors: errors.session,
      formType: 'login',
     
    };
  };
  
  const mapDispatchToProps = dispatch => {
    return {
      processForm: (user) => dispatch(login(user)),
    };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(Signup);
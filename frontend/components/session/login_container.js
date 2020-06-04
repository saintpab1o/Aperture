import { connect } from 'react-redux';
import React from 'react';
import { login } from '../../actions/session_actions';
import LoginForm from './login';


// const mapStateToProps = ({ errors }) => {
//   return {
//     errors: errors.session,
//     formType: 'login',
//   };
// };
  
  const mapDispatchToProps = dispatch => {
    return {
      login: (user) => dispatch(login(user)),
    };
  };
  
  export default connect(null, mapDispatchToProps)(LoginForm);
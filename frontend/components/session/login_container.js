import { connect } from 'react-redux';
import React from 'react';
import { login } from '../../actions/session_actions';
import LoginForm from './login';


const mapStateToProps = state => ({
  
  demoUser: { username: 'pm', password: 'password' }
})
  
  const mapDispatchToProps = dispatch => {
    return {
      login: (user) => dispatch(login(user)),
    };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
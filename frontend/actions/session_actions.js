import * as SessionUtil from '../util/session';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS'
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

const receiveSessionErrors = (errors) => {
  return ({
    type: RECEIVE_SESSION_ERRORS,
    errors
  })
};

export const clearErrors = () => {
  return ({
    type: CLEAR_ERRORS,
  })
};

const receiveCurrentUser = user => ({
  type: RECEIVE_CURRENT_USER,
  user,
});

const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER,
});

export const createNewUser = user => dispatch => SessionUtil.signup(user)
  .then(user => dispatch(receiveCurrentUser(user)), 
  error => dispatch(receiveSessionErrors(error.responseJSON)));


export const login = (user) => dispatch => SessionUtil.login(user)
  .then(user => dispatch(receiveCurrentUser(user)), 
  error => dispatch(receiveSessionErrors(error.responseJSON)));


export const logout = () => dispatch => SessionUtil.logout()
  .then(() => dispatch(logoutCurrentUser()), 
  error => dispatch(receiveSessionErrors(error.responseJSON)));

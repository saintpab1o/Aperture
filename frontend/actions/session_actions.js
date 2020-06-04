import * as SessionUtil from '../util/session';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS'


const receiveCurrentUser = user => ({
  type: RECEIVE_CURRENT_USER,
  user,
});

const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER,
});

export const createNewUser = formUser => dispatch => SessionUtil.signup(formUser)
  .then(user => dispatch(receiveCurrentUser(user)));

export const login = formUser => dispatch => SessionUtil.login(formUser)
  .then(user => dispatch(receiveCurrentUser(user)));

export const logout = () => dispatch => SessionUtil.logout()
  .then(() => dispatch(logoutCurrentUser()));

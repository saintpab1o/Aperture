import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_PHOTO, RECEIVE_ALL_PHOTOS } from '../actions/photo_actions';

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, state, { [action.user.id]: action.user });

    case RECEIVE_PHOTO:
      return Object.assign({}, state, action.users)

    case RECEIVE_ALL_PHOTOS:
      return Object.assign({}, state, action.users)

    default:
      return state;
  }
};

export default usersReducer;

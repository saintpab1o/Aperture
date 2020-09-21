import { RECEIVE_ALL_PHOTOS, RECEIVE_PHOTO} from '../actions/photo_actions';
import { LOAD_PHOTOS } from "../actions/photo_actions";
import merge from 'lodash/merge';

const photosReducer  = (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_ALL_PHOTOS:
            return merge({}, state, action.photos);

        case RECEIVE_PHOTO: 
            return ({}, state, { [action.photo.photoUrl]: action.photo.photoURL });
         
         case LOAD_PHOTOS:
           return merge({}, state, action.photos);

        default:
            return state;
    }
}

export default photosReducer;
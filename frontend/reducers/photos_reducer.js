import { RECEIVE_ALL_PHOTOS, RECEIVE_PHOTO } from '../actions/photo_actions';



const photosReducer  = (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_ALL_PHOTOS:
            return action.photos

        case RECEIVE_PHOTO:
            return Object.assign({}, state, action.photos)

        default:
            return state;
    }
}

export default photosReducer;
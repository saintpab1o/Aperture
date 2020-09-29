import { combineReducers } from 'redux';
import photos from "./photos_reducer";

import entities from './entities_reducer';
import session from './session_reducer';
import errors from './errors_reducer';

const rootReducer = combineReducers({
    entities,
    session,
    errors,
    photos,
  });
  
  export default rootReducer;
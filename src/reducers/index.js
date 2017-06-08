import { combineReducers } from 'redux';
import FetchImages from './reducer_images';
import ActiveImage from './reducer_active_image';

const rootReducer = combineReducers({
  // state: (state = {}) => state
    images: FetchImages,
    active_image: ActiveImage
});

export default rootReducer;

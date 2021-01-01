import { combineReducers } from '@reduxjs/toolkit';
import imagesReducer from './features/image-comparer/reducer';

const rootReducer = combineReducers({
  images: imagesReducer,
});

export default rootReducer;

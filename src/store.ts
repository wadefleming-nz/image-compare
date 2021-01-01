import { configureStore } from '@reduxjs/toolkit';
import imageComparerReducer from './features/image-comparer/reducer';

const store = configureStore({
  reducer: {
    images: imageComparerReducer,
  },
});

export default store;

import { configureStore, Reducer } from '@reduxjs/toolkit';
import imagesReducer from './features/image-comparer/reducer';

const store = configureStore({
  reducer: {
    images: imagesReducer as Reducer<ReturnType<typeof imagesReducer>>, // cast prevents type errors
  },
});

export default store;

import imagesReducer, { ImagesState } from './features/image-comparer/reducer';

const initialState = {
  images: null as ImagesState,
};

export default function rootReducer(
  state = initialState,
  action: { payload: any; type: string }
) {
  return {
    images: imagesReducer(state.images, action),
  };
}

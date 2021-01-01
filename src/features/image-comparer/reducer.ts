import {
  BEFORE_IMAGE_CHANGED,
  AFTER_IMAGE_CHANGED,
  IMAGES_RESET,
  ImageActionTypes,
} from './actions';

const imageInitialState = {
  filename: '',
  url: '', // TODO use whitePlaceHolder
};

const initialState = {
  beforeImage: imageInitialState,
  afterImage: imageInitialState,
};

export type ImagesState = typeof initialState;

export default function imagesReducer(
  state = initialState,
  action: ImageActionTypes
) {
  switch (action.type) {
    case BEFORE_IMAGE_CHANGED: {
      return {
        ...state,
        beforeImage: action.payload,
      };
    }
    case AFTER_IMAGE_CHANGED: {
      return {
        ...state,
        afterImage: action.payload,
      };
    }
    case IMAGES_RESET: {
      return {
        ...state,
        beforeImage: imageInitialState,
        afterImage: imageInitialState,
      };
    }
    default:
      return state;
  }
}

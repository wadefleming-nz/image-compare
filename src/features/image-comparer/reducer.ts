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
  action: { payload: any; type: string }
) {
  switch (action.type) {
    case 'images/beforeImageChanged': {
      return {
        ...state,
        beforeImage: action.payload,
      };
    }
    case 'images/afterImageChanged': {
      return {
        ...state,
        afterImage: action.payload,
      };
    }
    case 'images/reset': {
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

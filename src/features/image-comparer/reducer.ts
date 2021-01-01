import { createSlice } from '@reduxjs/toolkit';

const imageInitialState = {
  filename: '',
  url: '', // TODO use whitePlaceHolder
};

const initialState = {
  beforeImage: imageInitialState,
  afterImage: imageInitialState,
};

type State = typeof initialState;

const slice = createSlice({
  name: 'images',
  initialState,
  reducers: {
    beforeImageChanged(state: State, action: { payload: any; type: string }) {
      state.beforeImage = action.payload;
    },
    afterImageChanged(state: State, action: { payload: any; type: string }) {
      state.afterImage = action.payload;
    },
  },
});

export const { beforeImageChanged, afterImageChanged } = slice.actions;

export default slice.reducer;

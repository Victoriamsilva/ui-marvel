import { createSlice } from '@reduxjs/toolkit';

export interface AppState {
  loading: {
    [key: string]: boolean;
  };
}

const initialState: AppState = {
  loading: {
    default: false,
  },
};

const appSlice = createSlice({
  name: 'application',
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading.default = action.payload;
    },
    setLoadingByKey: (state, action) => {
      state.loading[action.payload.key] = action.payload.value;
    },
  },
});

export const { setLoading, setLoadingByKey } = appSlice.actions;

export default appSlice.reducer;

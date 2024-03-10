import { configureStore } from '@reduxjs/toolkit';
import applicationReducer from './application/application-slice';
import charactersReducer from './characters/characters-slice';

export const store = configureStore({
  reducer: {
    application: applicationReducer,
    characters: charactersReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

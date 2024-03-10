import { ICharacter } from '../../../interfaces/character.interface';
import { createSlice } from '@reduxjs/toolkit';

export interface CharactersState {
  characters: ICharacter[];
  pagination: {
    page: number;
    totalPages: number;
  };
}

const initialState: CharactersState = {
  characters: [],
  pagination: {
    page: 1,
    totalPages: 1,
  },
};

const charactersSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {
    setCharacters: (state, action) => {
      state.characters = action.payload;
    },
    setPagination: (state, action) => {
      state.pagination = { ...state.pagination, ...action.payload };
    },
  },
});

export const { setCharacters, setPagination } = charactersSlice.actions;

export default charactersSlice.reducer;

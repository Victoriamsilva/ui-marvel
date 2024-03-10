import { ICharacter } from '../../../interfaces/character.interface';
import { createSlice } from '@reduxjs/toolkit';

export interface CharactersState {
  characters: ICharacter[];
  charactersPage: number;
}

const initialState: CharactersState = {
  characters: [],
  charactersPage: 1,
};

const charactersSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {
    setCharacters: (state, action) => {
      state.characters = action.payload;
    },
    setCharactersPage: (state, action) => {
      state.charactersPage = action.payload;
    },
  },
});

export const { setCharacters, setCharactersPage } = charactersSlice.actions;

export default charactersSlice.reducer;

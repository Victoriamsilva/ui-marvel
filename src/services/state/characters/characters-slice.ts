import { IComic } from '@/interfaces/comic.interface';
import { ICharacter } from '../../../interfaces/character.interface';
import { createSlice } from '@reduxjs/toolkit';
import { ISerie } from '@/interfaces/serie.interface';

export interface CharactersState {
  characters?: ICharacter[];
  character?: ICharacter;
  comics?: IComic[];
  series?: ISerie[];
  pagination: {
    page: number;
    totalPages: number;
  };
}

const initialState: CharactersState = {
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
    setCharacter: (state, action) => {
      state.character = action.payload;
    },
    setComics: (state, action) => {
      state.comics = action.payload;
    },
    setSeries: (state, action) => {
      state.series = action.payload;
    },
  },
});

export const { setCharacters, setPagination, setCharacter, setComics, setSeries } = charactersSlice.actions;

export default charactersSlice.reducer;

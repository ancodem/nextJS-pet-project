import { createSlice } from "@reduxjs/toolkit";
import { FullPokemonList } from "./types";

const initialState: FullPokemonList = [
  { name: '', url: '' },
]

const mainReducer = createSlice({
  name: 'mainReducer',
  initialState: initialState,
  reducers: {
    getFullPokemonList(state, action) {
      return {
        ...state,
        ...action.payload,
      }
    }
  }
})

export default mainReducer

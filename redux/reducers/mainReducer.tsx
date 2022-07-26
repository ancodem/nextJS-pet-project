import { createSlice } from '@reduxjs/toolkit'
import { PokemonData } from './types'

const initialState: PokemonData = {
  fullPokemonList: [{ name: null, url: null }],
  selectedPokemon: { name: null, url: null },
  selectedPokemonFullData: {},
}

const mainSlice = createSlice({
  name: 'mainReducer',
  initialState,
  reducers: {
    setFullPokemonList: (state, action) => {
      state.fullPokemonList = action.payload
    },
    setSelectedPokemon: (state, action) => {
      state.selectedPokemon = { ...action.payload }
    }
  }
})

export const { setFullPokemonList, setSelectedPokemon } = mainSlice.actions

export default mainSlice.reducer

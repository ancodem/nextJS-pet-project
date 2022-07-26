
export type FullPokemonList = Array<{ name: string, url: string }>

export enum mainActions {
  FETCH_FULL_POKEMON_LIST = 'FETCH_FULL_POKEMON_LIST',
  SET_SELECTED_POKEMON = 'SET_SELECTED_POKEMON',
  FETCH_SELECTED_POKEMON_INFO = 'FETCH_SELECTED_POKEMON_INFO',
}


export type Nullable<T> = T | null

export interface SinglePokemonInfo {
  name: Nullable<string>
  url: Nullable<string>
}

export interface PokemonData {
  fullPokemonList: Nullable<Array<SinglePokemonInfo>>
  selectedPokemon: Nullable<SinglePokemonInfo>
  selectedPokemonFullData: Nullable<object>

}


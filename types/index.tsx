import { Nullable } from "redux/reducers/types"


export type PokedexEntry = Nullable<{
  name: string
  url: string
}>

export interface PokedexEntries {
  pokedexEntries: Nullable<Array<PokedexEntry>>
}

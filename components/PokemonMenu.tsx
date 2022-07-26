import PokemonCard from "./PokemonCard"
import { PokedexEntry, PokedexEntries } from 'types'
import { RootState } from 'redux/store'
import { useSelector } from "react-redux";
import { setSelectedPokemon } from "redux/reducers/mainReducer";
import { SinglePokemonInfo } from "redux/reducers/types";
import { useCallback } from "react";
import { useAppDispatch } from "hooks/reduxHooks";

const PokemonNameMenu: React.FC<PokedexEntries> = ({ pokedexEntries }) => {

  const dispatch = useAppDispatch()
  const handleClick = (pokemon: SinglePokemonInfo) => {
    dispatch(setSelectedPokemon(pokemon))
  }

  return (
    <div className="my-auto border-black mx-10 grid grid-cols-4 gap-4">
      {pokedexEntries.map((pokedexEntry: PokedexEntry) =>
        <PokemonCard key={pokedexEntry.name} {...pokedexEntry} />
      )}
    </div>
  )
}

export default PokemonNameMenu

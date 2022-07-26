import { PokedexEntry } from "types"
import { setSelectedPokemon } from "redux/reducers/mainReducer";
import { SinglePokemonInfo } from "redux/reducers/types";
import { useAppDispatch, useAppSelector } from "hooks/reduxHooks";
import Link from "next/link";

const PokemonCard: React.FC<PokedexEntry> = ({ name, url }) => {
  const dispatch = useAppDispatch()
  const selectedPokemon = useAppSelector(
    state => state.main.selectedPokemon
  )

  const handleClick = (pokemon: SinglePokemonInfo) => {
    dispatch(setSelectedPokemon(pokemon))
  }

  return (
    <div
      onClick={() => handleClick({ name, url })}
      className="
            my-2 py-5 
            bg-purple-600 rounded aspect-square-md 
            text-sm text-white text-center uppercase
            hover:bg-purple-900">
      {name}
    </div>
  )
}

export default PokemonCard

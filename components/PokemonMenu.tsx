import PokemonCard from "./PokemonCard"
import { PokedexEntry, PokedexEntries } from 'types'

const PokemonNameMenu: React.FC<PokedexEntries> = ({ pokedexEntries }) => {


  return (
    <div className="my-auto border-black mx-10 grid grid-cols-4 gap-4">
      {pokedexEntries.map((pokedexEntry: PokedexEntry) =>
        <PokemonCard key={pokedexEntry.name} {...pokedexEntry} />
      )}
    </div>
  )
}

export default PokemonNameMenu

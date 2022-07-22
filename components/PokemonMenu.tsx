import PokemonCard from "./PokemonCard"

const PokemonNameMenu = ({ pokemonInfo }: any) => {
  return (
    <div className="my-auto border-black mx-10 columns-4 gap-4">
      {pokemonInfo.map((pokemon: any) =>
        <PokemonCard key={pokemon.name} pokemon={pokemon} />
      )}
    </div>
  )
}

export default PokemonNameMenu

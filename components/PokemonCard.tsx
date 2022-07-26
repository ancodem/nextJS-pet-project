import { PokedexEntry } from "types"

const PokemonCard: React.FC<PokedexEntry> = ({ name, url }) => {
  const handleClick = (url: string) => {
    alert(url)
  }

  return (
    <div
      onClick={() => handleClick(url)}
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

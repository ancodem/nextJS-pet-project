const PokemonCard = ({ pokemon }: any) => {
  const handleClick = (url: any) => {
    alert(url)
  }

  return (
    <div
      onClick={() => handleClick(pokemon.url)}
      className="
            my-4 py-5 
            bg-purple-600 rounded aspect-square-md 
            text-sm text-white text-center uppercase
            hover:bg-purple-900">
      {pokemon.name}
    </div>
  )
}

export default PokemonCard

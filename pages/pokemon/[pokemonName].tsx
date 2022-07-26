interface Abilities {
  ability: { name: string, url: string }
  isHidden: boolean
  slot: number
}

const Pokemon: React.FC<Array<Abilities>> = ({ abilities }) => {
  return (
    <ul>
      {abilities.map(
        (ab: Abilities) => <li key={ab.ability.name}>{ab.ability.name}</li>
      )}
    </ul>
  )
}

export const getStaticPaths = async () => {
  const res = await fetch(
    'https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0'
  )
  const pokemons = await res.json()
  const paths = await pokemons.results.map(pokemon => ({ params: { pokemonName: pokemon.name } }))
  return { paths, fallback: false }
}

export const getStaticProps = async (context: any) => {
  const pokemonName = context.params.pokemonName

  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
  const pokemonInfo = await res.json()

  return {
    props: {
      abilities: [...pokemonInfo.abilities] as Array<Abilities>
    }
  }
}

export default Pokemon

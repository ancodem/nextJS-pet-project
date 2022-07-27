interface Abilities {
  ability: { name: string, url: string }
  isHidden: boolean
  slot: number
}

interface PokemonProps {
  abilities: Array<Abilities>
  pokemonName: string
}

const Pokemon: React.FC<PokemonProps> = ({ abilities, pokemonName }) => {
  return (
    <>
      <h2 className="
        uppercase p-2 mx-auto rounded-t w-1/6 text-center  bg-purple-400
        ">{pokemonName}
      </h2>
      <ul
        className="flex bg-purple-300 p-5 rounded flex-col my-4 w-3/6 mx-auto"
      >
        <p className="uppercase border-b text-center">Abilities</p>
        {abilities.map(
          (ab: Abilities) =>
            <li
              className="text-center my-2"
              key={ab.ability.name}>
              {ab.ability.name}
            </li>
        )}
      </ul>
    </>
  )
}

export const getStaticPaths = async () => {
  const res = await fetch(
    'https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0'
  )
  const pokemonInformation = await res.json()
  type Response = typeof pokemonInformation

  const paths = await pokemonInformation.results.map(
    (item: Partial<Response>) => ({ params: { pokemonName: item.name } })
  )
  return { paths, fallback: false }
}

export const getStaticProps = async (context: any) => {
  const pokemonName = context.params.pokemonName

  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
  const pokemonInfo = await res.json()
  type Response = typeof pokemonInfo

  return {
    props: {
      abilities: [...pokemonInfo.abilities] as Response,
      pokemonName: pokemonName as string,
    }
  }
}

export default Pokemon

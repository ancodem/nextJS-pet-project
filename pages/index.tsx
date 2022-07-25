import { GetStaticProps } from "next";
import PokemonNameMenu from "../components/PokemonMenu";

// Types -------------------------------------------------------------------->
interface PokedexEntry {
  name: string
  url: string
}

interface PokedexEntries {
  pokedexEntries: Array<PokedexEntry>
}

// Component ---------------------------------------------------------------->
const Pokedex = ({ pokedexEntries }: PokedexEntries) => {
  return (
    <>
      <PokemonNameMenu pokedexEntries={pokedexEntries} />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(
    'https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0'
  )
  const pokedexEntries = await res.json()
  return {
    props: {
      pokedexEntries: pokedexEntries.results
    } as PokedexEntries
  }
}
export default Pokedex

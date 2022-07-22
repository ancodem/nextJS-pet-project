import { GetStaticProps } from "next";
import PokemonNameMenu from "../components/PokemonMenu";

const Pokedex = ({ pokemonInfo }: any) => {
  return (
    <>
      <h1
        className="
          py-4 mb-10
          bg-purple-400 
          font-bold text-white
          text-center antialised uppercase ">
        available pokemons
      </h1>
      <PokemonNameMenu pokemonInfo={pokemonInfo} />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
  const pokemonInfo = await res.json()
  return {
    props: {
      pokemonInfo: pokemonInfo.results
    }
  }
}
export default Pokedex

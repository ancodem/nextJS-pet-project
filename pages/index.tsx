import { GetStaticProps } from "next";
import PokemonNameMenu from "../components/PokemonMenu";
import { PokedexEntries } from 'types';
import Head from "next/head";

const Pokedex: React.FC<PokedexEntries> = ({ pokedexEntries }) => {
  return (
    <>
      <Head>
        <title>Pokedex</title>
      </Head>
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

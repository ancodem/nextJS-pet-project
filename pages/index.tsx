import { GetStaticProps } from "next";
import PokemonNameMenu from "../components/PokemonMenu";
import { PokedexEntries } from 'types';
import { setFullPokemonList } from "redux/reducers/mainReducer";
import { useAppDispatch, useAppSelector } from "hooks/reduxHooks";
import { useEffect } from "react";


const Pokedex: React.FC<PokedexEntries> = ({ pokedexEntries }) => {
  const dispatch = useAppDispatch()

  const fullPokemonList = useAppSelector(
    state => state.main.fullPokemonList
  )

  useEffect(() => {
    dispatch(setFullPokemonList(pokedexEntries))
  }, [pokedexEntries])

  return (
    <>
      <PokemonNameMenu pokedexEntries={fullPokemonList} />
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

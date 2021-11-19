import React from "react";
import { useState, useEffect, createContext } from "react";
import { getPokemon, getAllPokemon } from "../Services/pokemon";
import Card from "../Components/Card/Index";
import Grid from "@mui/material/Grid";

export const storeContext = createContext(null);

export default function Home() {
  const [pokemonData, setPokemonData] = useState([]);
  const [nextUrl, setNextUrl] = useState("");
  const [prevUrl, setPrevUrl] = useState("");
  const [loading, setLoading] = useState(true);
  const initialUrl = "https://pokeapi.co/api/v2/pokemon";

  useEffect(() => {
    async function fetchData() {
      let response = await getAllPokemon(initialUrl);
      setNextUrl(response.next);
      setPrevUrl(response.previous);
      await loadingPokemon(response.results);
      setLoading(false);
    }
    fetchData();
  }, []);

  const loadingPokemon = async (data) => {
    let _pokemonData = await Promise.all(
      data.map(async (pokemon) => {
        let pokemonRecord = await getPokemon(pokemon.url);
        return pokemonRecord;
      })
    );
    setPokemonData(_pokemonData);
  };

  const next = async () => {
    setLoading(true);
    let response = await getAllPokemon(nextUrl);
    await loadingPokemon(response.results);
    setNextUrl(response.next);
    setPrevUrl(response.previous);
    setLoading(false);
  };

  const prev = async () => {
    if (!prevUrl) {
      return;
    }
    setLoading(true);
    let response = await getAllPokemon(prevUrl);
    await loadingPokemon(response.results);
    setNextUrl(response.next);
    setPrevUrl(response.previous);
    setLoading(false);
  };

  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <div>
            <button onClick={prev}>Prev</button>
            <button onClick={next}>Next</button>
          </div>
          <Grid container spacing={0}>
            {pokemonData.map((pokemon, i) => {
              return <Card key={i} pokemon={pokemon} />;
            })}
          </Grid>
        </>
      )}
    </div>
  );
}

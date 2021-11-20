import React from "react";
import { useState, useEffect, createContext } from "react";
import { getPokemon, getAllPokemon } from "../../Services/pokemon";
import Card from "../../Components/Card/Index";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import "../style.css";

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
    console.log(_pokemonData);
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
          <Grid container spacing={0} sx={{ marginTop: "60px" }}>
            {pokemonData.map((pokemon, i) => {
              return <Card key={i} pokemon={pokemon} />;
            })}
          </Grid>
          <div className="nav__button">
            <div className="nav__button__prev">
              <Button variant="contained" onClick={prev}>
                Prev
              </Button>
            </div>
            <div className="nav__button__next">
              <Button variant="contained" onClick={next}>
                Next
              </Button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

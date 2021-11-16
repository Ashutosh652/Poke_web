import React, { useState, useEffect } from "react";
import { getAllPokemon, getPokemon } from "./Services/pokemon";
import Card from "./Components/Card";
// import Home, { loading } from "./Routes/Home";
import "./App.css";
import Grid from "@mui/material/Grid";

function App() {
  const [pokemonData, setPokemonData] = useState([]);
  const [nextUrl, setNextUrl] = useState("");
  const [prevUrl, setPrevUrl] = useState("");
  const [loading, setLoading] = useState(true);
  const initialUrl = "https://pokeapi.co/api/v2/pokemon";
  // const initialUrl = 'https://pokeapi.co/api/v2/pokemon/1/'; // for testing only

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

  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <>
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

export default App;

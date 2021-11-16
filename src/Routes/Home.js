// import React from "react";
// import { useState, useEffect } from "react";
// import { getPokemon, getAllPokemon } from "../Services/pokemon";
// import Card from "../Components/Card";
// import Grid from "@mui/material/Grid";

// let loading = true;

// export default function Home() {
//   const [pokemonData, setPokemonData] = useState([]);
//   const [nextUrl, setNextUrl] = useState("");
//   const [prevUrl, setPrevUrl] = useState("");
//   const [loadingPage, setLoadingPage] = useState(true);
//   const initialUrl = "https://pokeapi.co/api/v2/pokemon";

//   useEffect(() => {
//     async function fetchData() {
//       let response = await getAllPokemon(initialUrl);
//       setNextUrl(response.next);
//       setPrevUrl(response.previous);
//       await loadingPagePokemon(response.results);
//       setLoadingPage(false);
//     }
//     fetchData();
//   }, []);

//   const loadingPagePokemon = async (data) => {
//     let _pokemonData = await Promise.all(
//       data.map(async (pokemon) => {
//         let pokemonRecord = await getPokemon(pokemon.url);
//         return pokemonRecord;
//       })
//     );
//     setPokemonData(_pokemonData);
//     console.log(_pokemonData);
//   };

//   if(loadingPage == false){
//       loading = false;
//   }
//   else{
//       loading = true;
//   }

//   return (
//     <div>
//       <Grid container spacing={0}>
//         {pokemonData.map((pokemon, i) => {
//           return <Card key={i} pokemon={pokemon} />;
//         })}
//       </Grid>
//     </div>
//   );
// }

// export {loading};
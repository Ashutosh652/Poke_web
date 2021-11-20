import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import DetailCard from "../../Components/DetailCard/Index";
import { getPokemon } from "../../Services/pokemon";

export default function Detail() {
  const params = useParams();
  const [pokemonDetail, setPokemonDetail] = useState([]);
  const [loading, setLoading] = useState(true);
  const initialUrl = "https://pokeapi.co/api/v2/pokemon";

  useEffect(() => {
    async function fetchData() {
      await loadingPokemon();
      setLoading(false);
    }
    fetchData();
    // eslint-disable-next-line
  }, []);

  const loadingPokemon = async () => {
    let _pokemonDetail = await getPokemon(initialUrl + "/" + params.id);
    setPokemonDetail(_pokemonDetail);
  };

  return (
    <div>
      {loading ? <h1>Loading...</h1> : <DetailCard pokemon={pokemonDetail} />}
    </div>
  );
}

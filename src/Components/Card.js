import React from "react";
import "./style.css";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
// import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

export default function Card1({ pokemon }) {
  // return (
  //   <div className="Card">
  //     <div className="Card__img">
  //       <img src={pokemon.sprites.front_default} alt="" />
  //     </div>
  //     <div className="Card__name">{pokemon.name}</div>
  //     <div className="Card__types">
  //       {pokemon.types.map((type) => {
  //         return <div className="Card__type">{type.type.name}</div>;
  //       })}
  //     </div>
  //     <div className="Card__info">
  //       <div className="Card__data Card__data--weight">
  //         <p className="title">Weight</p>
  //         <p>{pokemon.weight}</p>
  //       </div>
  //       <div className="Card__data Card__data--height">
  //         <p className="title">Height</p>
  //         <p>{pokemon.height}</p>
  //       </div>
  //       <div className="Card__data Card__data--ability">
  //         <p className="title">Ability</p>
  //         {pokemon.abilities.map((ability) => {
  //           return <p>{ability.ability.name}</p>;
  //         })}
  //       </div>
  //     </div>
  //   </div>
  // );

  const pokemonName = pokemon.name;

  return (
    <Grid item xs={12} md={3} className="Card__block">
      <Card sx={{ maxWidth: 300, minHeight: 365 }}>
        <div className="Card__content">
          <CardHeader
            title={pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1)}
          />

          {/* <CardMedia className="Test"
          component="img"
          height="230"
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
        /> */}
          <div className="Card__img">
            <img src={pokemon.sprites.front_default} alt="" />
          </div>

          <CardContent>
            <Typography paragraph variant="body2">
              <strong>Type:</strong><br/>
              {pokemon.types.map((type) => {
                return <>{type.type.name}<br/></>;
              })}
            </Typography>
            <Typography paragraph variant="body2">
              <strong>Weight:</strong> {pokemon.weight}
            </Typography>
            <Typography paragraph variant="body2">
              <strong>Height:</strong> {pokemon.height}
            </Typography>
            <Typography paragraph variant="body2">
              <strong>Abilities:</strong>
              {pokemon.abilities.map((ability) => {
                return (
                  <>
                    {ability.ability.name}
                    <br />
                  </>
                );
              })}
            </Typography>
          </CardContent>
        </div>
      </Card>
    </Grid>
  );
}

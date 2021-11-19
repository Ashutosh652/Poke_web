import React from "react";
import "../style.css";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

export default function Card1({ pokemon }) {
  const pokemonName = pokemon.name;

  return (
    <Grid item xs={12} md={3} className="Card__block">
      <Card sx={{ maxWidth: 300, minHeight: 365 }}>
        <div className="Card__content">
          <CardHeader
            title={pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1)}
          />

          <div className="Card__img">
            <img src={pokemon.sprites.front_default} alt="" />
          </div>

          <CardContent>
            <Typography paragraph variant="body2">
              <strong>Type:</strong>
              <br />
              {pokemon.types.map((type) => {
                return (
                  <>
                    {type.type.name}
                    <br />
                  </>
                );
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

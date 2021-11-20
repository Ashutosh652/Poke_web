import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button, CardActions } from "@mui/material";

export default function DetailCard({ pokemon }) {
  // useEffect(() => {
  //   console.log(pokemon);
  // });

  return (
    <Card
      sx={{
        maxWidth: 1000,
        marginTop: "100px",
        marginLeft: "180px",
        backgroundColor: "#f95738",
      }}
    >
      <div className="Detail__Card">
        <img src={pokemon.sprites.other.dream_world.front_default} alt="" />
        <CardContent className="Detail__Card__Content">
          <Typography gutterBottom variant="h5" component="div">
            {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <strong>Height:</strong> {pokemon.height}
            <strong style={{ marginLeft: '5rem' }}>Weight:</strong> {pokemon.weight}<br/><br/>
            <strong>Stats:</strong><br/>
            {pokemon.stats.map((stat) => {
              return (
                <>
                  <strong style={{ marginLeft: '2rem' }}>{stat.stat.name}:</strong> {stat.base_stat}<br/>
                </>
              );
            })}<br/>
            <strong>Type:</strong><br/>
            {pokemon.types.map((type) => {
              return <span style={{ marginLeft: "2rem" }}>{type.type.name}<br/></span>;
            })}
          </Typography>
        </CardContent>
      </div>
      <div className="Detail__Card__imgs">
        <img src={pokemon.sprites.front_default} alt="" />
        <img src={pokemon.sprites.back_default} alt="" />
        <img src={pokemon.sprites.front_shiny} alt="" />
        <img src={pokemon.sprites.back_shiny} alt="" />
      </div>
      <CardActions>
        <Button size="small" sx={{ color: "green" }}>
          Add to Cart
        </Button>
      </CardActions>
    </Card>
  );
}

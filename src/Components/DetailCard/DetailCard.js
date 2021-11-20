import React from "react";
import { useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button, CardActions } from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import { display } from "@mui/system";
import { ClosedCaptionDisabledOutlined, NoEncryptionTwoTone } from "@mui/icons-material";
// import Grid from "@mui/material/Grid";

export default function DetailCard({ pokemon }) {
  // let pic;
  // useEffect(() => {
  //   if (1 > 0) {
  //     pic = (
  //       <img src={pokemon.sprites.other.dream_world.front_default} alt="" />
  //     );
  //   } else {
  //     pic = (
  //       <img src={pokemon.sprites.other.dream_world.front_default} alt="" />
  //     );
  //   }
  // });

  const DetailCard = styled("div")(({ theme }) => ({
    borderRadius: theme.shape.borderRadius,
    maxWidth: 1000,
    marginTop: "100px",
    marginLeft: "180px",
    [theme.breakpoints.down("lg")]: {
      marginLeft: "120px",
      maxWidth: 800,
    },
    [theme.breakpoints.down("md")]: {
      marginLeft: "0px",
      maxWidth: 750,
    },
    [theme.breakpoints.down("sm")]: {
      maxWidth: 500,
    },
  }));

  // const MainImage = styled("div")(({ theme }) => ({}));

  return (
    <DetailCard>
      <Card
        sx={{
          //   maxWidth: 1000,
          //   marginTop: "100px",
          //   marginLeft: "180px",
          backgroundColor: "#f95738",
        }}
        // className="Main__Detail__Card"
      >
        <div className="Detail__Card">
          {/* <MainImage sx={{ display: { xs: "none", md: "block" } }}> */}
          <img src={pokemon.sprites.other.dream_world.front_default} alt="" />
          {/* </MainImage> */}
          {/* {pic} */}
          <CardContent className="Detail__Card__Content">
            <Typography gutterBottom variant="h5" component="div">
              {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <strong>Height:</strong> {pokemon.height}
              <strong style={{ marginLeft: "5rem" }}>Weight:</strong>{" "}
              {pokemon.weight}
              <br />
              <br />
              <strong>Stats:</strong>
              <br />
              {pokemon.stats.map((stat) => {
                return (
                  <>
                    <strong style={{ marginLeft: "2rem" }}>
                      {stat.stat.name}:
                    </strong>{" "}
                    {stat.base_stat}
                    <br />
                  </>
                );
              })}
              <br />
              <strong>Type:</strong>
              <br />
              {pokemon.types.map((type) => {
                return (
                  <span style={{ marginLeft: "2rem" }}>
                    {type.type.name}
                    <br />
                  </span>
                );
              })}
            </Typography>
          </CardContent>
        </div>
        <div className="Detail__Card__imgs">
          <img src={pokemon.sprites.front_default} alt="" />
          <img src={pokemon.sprites.back_default} alt="" />
          <img src={pokemon.sprites.front_shiny} alt="" />
          <img src={pokemon.sprites.back_shiny} alt="" />
          <CardActions style={{ marginLeft: "200px" }}>
            <Button
              size="small"
              variant="contained"
              sx={{ backgroundColor: "green" }}
            >
              Add to Cart
            </Button>
          </CardActions>
        </div>
        {/* <CardActions>
        <Button size="small" sx={{ color: "green" }}>
          Add to Cart
        </Button>
      </CardActions> */}
      </Card>
    </DetailCard>
  );
}

import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const MovieItem = ({ title, releaseDate, posterUrl, id }) => {
  return (
    <Card
      sx={{
        margin: 2,
        width: 250,
        minHeight: 320,
        maxHeight: 420,
        borderRadius: 5,
        ":hover": {
          boxShadow: "10px 10px 20px #ccc",
        },
        marginRight: 6,
      }}
    >
      <img height={"55%"} width="100%" src={posterUrl} alt={title} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {new Date(releaseDate).toDateString()}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          variant="contained"
          fullWidth
          LinkComponent={Link}
          to={`/booking/${id}`}
          sx={{
            margin: "auto",
            bgcolor: "#2b2d42",
            ":hover": {
              bgcolor: "#121217",
            },
          }}
          size="small"
          // onClick={() => {console.log(id);}}
        >
          Book
        </Button>
      </CardActions>
    </Card>
  );
};

export default MovieItem;

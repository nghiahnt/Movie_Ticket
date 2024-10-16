import { Box, Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllMovies } from "../api-helpers/api-helpers";
import MovieItem from "./Movies/MovieItem";

import images from "../assets/images";
import "../css/HomePage.css";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    getAllMovies()
      .then((data) => setMovies(data.movies))
      .catch((err) => console.log(err));
  }, []);
  return (
    <Box width={"100%"} height="100%" margin="auto" marginTop={2}>
      <Box margin={"auto"} width="80%" height={"40vh"} padding={2}>
        <img
          src={images.thumbnail}
          alt="Brahmastra"
          width={"100%"}
          height={"100%"}
        />
      </Box>

      {/* Movie list  */}
      <Box className="home_title" margin="auto">
        <Typography variant="h4" textAlign={"center"}>
          Latest Releases
        </Typography>
      </Box>
      <hr className="hr" />

      {/* Preview movie list */}
      <Box margin={"auto"} marginTop={4}>
        <Typography
          margin={"auto"}
          variant="h4"
          padding={2}
          width="40%"
          bgcolor={"#900C3F"}
          color="white"
          textAlign={"center"}
        >
          All Movies
        </Typography>

        <Box
          width={"80%"}
          margin="auto"
          marginTop={5}
          // display={"flex"}
          // justifyContent={"center"}
          // flexWrap={"wrap"}
        >
          <div className="movies_list">
            {movies &&
              movies
                .slice(0, 4)
                .map((movie, index) => (
                  <MovieItem
                    key={index}
                    id={movie._id}
                    posterUrl={movie.posterUrl}
                    releaseDate={movie.releaseDate}
                    title={movie.title}
                  />
                ))}
          </div>
        </Box>
      </Box>

      {/* Show all */}
      <Box display="flex" padding={5} margin="auto">
        <Button
          LinkComponent={Link}
          to="/movies"
          variant="outlined"
          sx={{ margin: "auto", color: "#2b2d42" }}
        >
          View All Movies
        </Button>
      </Box>
    </Box>
  );
};

export default HomePage;

import React from "react";
import { Box, Typography } from "@mui/material";
import MovieCard from "./MovieCard";

const MovieRow = ({ title, movies }) => {
  if (!movies || movies.length === 0) return null;

  return (
    <Box sx={{ my: 4 }}>
      <Typography variant="h6" sx={{ color: "#fff", mb: 1, px: 2 }}>
        {title}
      </Typography>

      <Box
        sx={{
          display: "flex",
          overflowX: "auto",
          gap: 2,
          px: 2,
          py: 1,
          scrollbarWidth: "none",
          "&::-webkit-scrollbar": { display: "none" },
        }}
      >
        {movies.map((movie, idx) => (
          <MovieCard
            key={movie.id || idx}
            poster={movie.poster}
            title={movie.title}
            duration={movie.duration}
            seasons={movie.seasons}
            rating={movie.rating}
            progress={movie.progress}
          />
        ))}
      </Box>
    </Box>
  );
};

export default MovieRow;

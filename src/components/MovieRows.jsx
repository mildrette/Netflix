import React from "react";
import { Box, Typography } from "@mui/material";
import MovieCard from "./MovieCard";

const MovieRow = ({ title, posters }) => {
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
          "&::-webkit-scrollbar": {
            display: "none",
          },
        }}
      >
        {posters.map((src, idx) => (
          <MovieCard key={idx} poster={src} title={`${title} ${idx + 1}`} />
        ))}
      </Box>
    </Box>
  );
};

export default MovieRow;

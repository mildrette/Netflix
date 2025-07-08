import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import MovieCard from "./MovieCard";
import ExpandedMovieCard from "./ExpandedMovieCard";

const MovieRow = ({ title, posters }) => {
  const [expanded, setExpanded] = useState(null);

  return (
    <>
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
    {posters.map((src, idx) =>
  src ? (
    <MovieCard
      key={idx}
      poster={src}
      title={`${title} ${idx + 1}`}
      onHover={(info) => setExpanded(info)}
    />
  ) : null
)}

        </Box>
      </Box>

      {expanded && (
        <Box
          onMouseLeave={() => setExpanded(null)}
          sx={{
            position: "fixed",
            top: expanded.y - 260,
            left: expanded.x - 100,
            width: 360,
            zIndex: 9999,
            backgroundColor: "#141414",
            boxShadow: "0 0 30px rgba(0,0,0,0.8)",
            borderRadius: 2,
            backdropFilter: "blur(6px)",
            transition: "transform 0.3s ease",
          }}
        >
          <ExpandedMovieCard poster={expanded.poster} title={expanded.title} />
        </Box>
      )}
    </>
  );
};

export default MovieRow;

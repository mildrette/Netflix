import React from "react";
import { Box } from "@mui/material";

const MovieCard = ({ poster, title, onHover }) => {
  return (
    <Box
      onMouseEnter={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        onHover({
          poster,
          title,
          x: rect.left,
          y: rect.top,
          width: rect.width,
        });
      }}
      onMouseLeave={() => onHover(null)}
      sx={{
        width: 160,
        height: 240,
        borderRadius: 2,
        overflow: "hidden",
        cursor: "pointer",
        transition: "transform 0.3s",
        "&:hover": {
          transform: "scale(1.05)",
        },
      }}
    >
      <Box
        component="img"
        src={poster}
        alt={title}
        sx={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: 2 }}
      />
    </Box>
  );
};

export default MovieCard;

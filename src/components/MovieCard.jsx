import React from "react";
import { Box } from "@mui/material";

const MovieCard = ({ poster, title }) => {
  return (
    <Box
      component="img"
      src={poster}
      alt={title}
      sx={{
        width: { xs: 120, sm: 160, md: 200 },
        height: "auto",
        borderRadius: 2,
        flexShrink: 0,
        transition: "transform 0.3s",
        cursor: "pointer",
        "&:hover": {
          transform: "scale(1.05)",
        },
      }}
    />
  );
};

export default MovieCard;

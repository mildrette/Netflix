import React from "react";
import {
  Box,
  Typography,
  IconButton,
  LinearProgress
} from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import FavoriteIcon from "@mui/icons-material/Favorite";
import InfoIcon from "@mui/icons-material/Info";
import AddIcon from "@mui/icons-material/Add";

const ExpandedMovieCard = ({
  poster,
  title,
  duration = "1h 45m",
  seasons = 2,
  rating = "PG-13",
  progress = 60,
}) => {
  return (
    <Box sx={{ p: 2 }}>
      <Box
        component="img"
        src={poster}
        alt={title}
        sx={{ width: "100%", borderRadius: 2 }}
      />

      <Box sx={{ display: "flex", justifyContent: "space-between", mt: 1 }}>
        <IconButton color="primary">
          <PlayArrowIcon />
        </IconButton>
        <IconButton color="error">
          <FavoriteIcon />
        </IconButton>
        <IconButton color="info">
          <InfoIcon />
        </IconButton>
        <IconButton color="success">
          <AddIcon />
        </IconButton>
      </Box>

      <Typography variant="body2" sx={{ color: "#fff", mt: 1 }}>
        Duration: {duration} | Seasons: {seasons} | Rating: {rating}
      </Typography>

      <Box sx={{ mt: 1 }}>
        <LinearProgress
          variant="determinate"
          value={progress}
          sx={{ height: 8, borderRadius: 5 }}
        />
      </Box>
    </Box>
  );
};

export default ExpandedMovieCard;

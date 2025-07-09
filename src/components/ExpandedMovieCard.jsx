import React from "react";
import {
  Box,
  IconButton,
  Typography,
  LinearProgress,
} from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import FavoriteIcon from "@mui/icons-material/Favorite";
import InfoIcon from "@mui/icons-material/Info";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";

const ExpandedMovieCard = ({ movie }) => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        width: { xs: "90%", sm: 400 },
        backgroundColor: "#141414",
        borderRadius: 2,
        boxShadow: "0 0 20px rgba(0,0,0,0.8)",
        p: 2,
      }}
    >
      <Box
        component="img"
        src={movie.poster}
        alt={movie.title}
        sx={{ width: "100%", borderRadius: 2 }}
      />

      <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
        <IconButton color="primary">
          <PlayArrowIcon />
        </IconButton>
        <IconButton color="error">
          <FavoriteIcon />
        </IconButton>
        <IconButton color="info" onClick={() => navigate(`/movie/${movie.id}`)}>
          <InfoIcon />
        </IconButton>
        <IconButton color="success">
          <AddIcon />
        </IconButton>
      </Box>

      <Typography variant="body2" sx={{ mt: 1 }}>
        Duration: {movie.duration} | Seasons: {movie.seasons} | Rating:{" "}
        {movie.rating}
      </Typography>

      <Box sx={{ mt: 1 }}>
        <LinearProgress variant="determinate" value={movie.progress} />
        <Typography variant="caption">
          Watched: {movie.progress}%
        </Typography>
      </Box>
    </Box>
  );
};

export default ExpandedMovieCard;

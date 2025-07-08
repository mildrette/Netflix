import React from "react";
import { Box, Typography, Button } from "@mui/material";

const HeroBanner = () => {
  return (
    <Box
      sx={{
        height: { xs: "60vh", md: "75vh" },
        color: "#fff",
        display: "flex",
        alignItems: "flex-end",
        backgroundImage: `url("/posters/hero.jpeg")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
        px: 4,
        pb: 6,
      }}
    >
   
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to top, rgba(0,0,0,0.8) 20%, transparent 80%)",
          zIndex: 1,
        }}
      />

   
      <Box sx={{ position: "relative", zIndex: 2, maxWidth: "600px" }}>
        <Typography variant="h3" sx={{ fontWeight: "bold", mb: 2 }}>
          Random Movie Title
        </Typography>
        <Typography variant="body1" sx={{ mb: 3 }}>
          This is a short description of the featured movie or series. Watch now
          or learn more.
        </Typography>
        <Box sx={{ display: "flex", gap: 2 }}>
          <Button variant="contained" color="error">
            ▶ Play
          </Button>
          <Button variant="outlined" sx={{ color: "#fff", borderColor: "#fff" }}>
            ℹ More Info
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default HeroBanner;

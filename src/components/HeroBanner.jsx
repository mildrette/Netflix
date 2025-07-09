import React, { useEffect, useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

const movieList = [
  {
    background: "/1.jpeg",
    title: "Lupin",
    description:
      "A gentleman thief and master of disguise sets out to avenge his father’s death.",
  },
  {
    background: "/2.jpg",
    title: "Stranger Things",
    description:
      "A young boy vanishes, and a small town uncovers terrifying supernatural forces.",
  },
  {
    background: "/3.jpeg",
    title: "The Witcher",
    description:
      "Geralt of Rivia, a monster hunter, struggles to find his place in a world of beasts and betrayal.",
  },
  {
    background: "/4.jpeg",
    title: "Wednesday",
    description:
      "A twisted coming-of-age story following Wednesday Addams through school and secrets.",
  },
  {
    background: "/5.jpeg",
    title: "Money Heist",
    description:
      "A criminal mastermind recruits eight people to carry out a massive heist on Spain’s Royal Mint.",
  },
];

const HeroBanner = () => {
  const [currentIndex, setCurrentIndex] = useState(
    Math.floor(Math.random() * movieList.length)
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        let next;
        do {
          next = Math.floor(Math.random() * movieList.length);
        } while (next === prev);
        return next;
      });
    }, 120000);

    return () => clearInterval(interval);
  }, []);

  const { background, title, description } = movieList[currentIndex];

  return (
    <Box
      sx={{
        position: "relative",
        height: { xs: "60vh", sm: "70vh", md: "85vh" },
        color: "#fff",
        display: "flex",
        alignItems: "flex-end",
        p: { xs: 2, sm: 4, md: 8 },
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        transition: "background-image 1s ease-in-out",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          background: "linear-gradient(to top, rgba(20,20,20,1), rgba(20,20,20,0.4))",
          zIndex: 1,
        }}
      />

      <Box sx={{ position: "relative", zIndex: 2, maxWidth: "700px" }}>
        <Typography
          variant="h3"
          sx={{
            fontWeight: "bold",
            mb: 2,
            fontSize: { xs: "2rem", sm: "3rem", md: "4rem" },
          }}
        >
          {title}
        </Typography>

        <Typography
          variant="body1"
          sx={{
            mb: 3,
            fontSize: { xs: "0.9rem", sm: "1rem", md: "1.2rem" },
            maxWidth: "90%",
          }}
        >
          {description}
        </Typography>

        <Box sx={{ display: "flex", gap: 2 }}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#fff",
              color: "#000",
              "&:hover": { backgroundColor: "#e6e6e6" },
            }}
            startIcon={<PlayArrowIcon />}
          >
            Play
          </Button>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "rgba(109, 109, 110, 0.7)",
              color: "#fff",
              "&:hover": { backgroundColor: "rgba(109, 109, 110, 0.9)" },
            }}
            startIcon={<InfoOutlinedIcon />}
          >
            More Info
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default HeroBanner;

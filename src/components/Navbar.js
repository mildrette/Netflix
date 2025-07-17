import React, { useEffect, useState } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  InputBase,
  IconButton,
  Avatar,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const categories = [
    "Trending",
    "Marvel",
    "Harry Potter",
    "Star Wars",
    "Top Rated",
  ];

  const [profile, setProfile] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedProfile = localStorage.getItem("profile");
    if (storedProfile) {
      setProfile(JSON.parse(storedProfile));
    }
  }, []);

  const scrollToCategory = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleProfileClick = () => {
    navigate("/profiles");
  };

  return (
    <AppBar position="static" sx={{ background: "#141414", px: 2 }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <img
            src="https://assets.codepen.io/12394909/Netflix-Logo.wine.png"
            alt="Netflix"
            style={{ height: 40, cursor: "pointer" }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          />
          {categories.map((label) => {
            const id = label.toLowerCase().replace(/\s+/g, "-");
            return (
              <Button
                key={label}
                onClick={() => scrollToCategory(id)}
                color="inherit"
                sx={{
                  textTransform: "none",
                  fontSize: "14px",
                  "&:hover": {
                    backgroundColor: "red",
                    color: "white",
                  },
                }}
              >
                {label}
              </Button>
            );
          })}
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              backgroundColor: "#333",
              px: 1,
              borderRadius: "4px",
            }}
          >
            <SearchIcon sx={{ color: "white" }} />
            <InputBase
              placeholder="Search"
              sx={{ ml: 1, color: "white" }}
              inputProps={{ "aria-label": "search" }}
            />
          </Box>

          <IconButton color="inherit">
            <NotificationsIcon />
          </IconButton>

       <Avatar
  alt={profile?.name || "User"}
  src={profile?.avatar || ""}
  sx={{ cursor: "pointer" }}
  onClick={handleProfileClick}
>
  {!profile?.avatar && profile?.name?.charAt(0)}
</Avatar>

        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

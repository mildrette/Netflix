import React from "react";
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

const Header = () => {
  return (
    <AppBar position="static" sx={{ background: "#141414", px: 2 }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* Left Side: Logo + Navigation */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <img src="/logo.png" alt="Netflix" style={{ height: 40 }} />

          {/* Navigation Buttons */}
          {[
            "Home",
            "TV Shows",
            "Movies",
            "Games",
            "Latest",
            "My List",
            "Browse by Language",
          ].map((label) => (
            <Button
              key={label}
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
          ))}
        </Box>

        {/* Right Side: Search + Notification + Profile */}
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
            <SearchIcon />
            <InputBase placeholder="Search" sx={{ ml: 1, color: "white" }} />
          </Box>

          <IconButton color="inherit">
            <NotificationsIcon />
          </IconButton>

          <Avatar alt="Zoe" src="/profile.jpg" />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

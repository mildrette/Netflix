import React from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  InputBase,
  Avatar,
  IconButton,
  useMediaQuery,
  useTheme,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MenuIcon from "@mui/icons-material/Menu";

const navLinks = [
  "Home",
  "Tv Shows",
  "Movies",
  "Latest",
  "My List",
  "Browse by Language",
];

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: "#141414" }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <img src="/Netflix.png" alt="netflix" style={{ height: 40 }} />

            {!isMobile && (
              <Box sx={{ display: "flex", gap: 1 }}>
                {navLinks.map((label) => (
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
            )}
          </Box>

          {/* Right Side */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            {!isMobile && (
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  backgroundColor: "#333",
                  borderRadius: 1,
                  px: 1,
                }}
              >
                <SearchIcon sx={{ color: "white" }} />
                <InputBase
                  placeholder="Search"
                  sx={{ ml: 1, color: "white", fontSize: "14px" }}
                />
              </Box>
            )}

            <IconButton color="inherit">
              <NotificationsIcon />
            </IconButton>

            <Avatar alt="Profile" src="/Profile.png" />

            {isMobile && (
              <IconButton
                color="inherit"
                edge="end"
                onClick={toggleDrawer(true)}
              >
                <MenuIcon />
              </IconButton>
            )}
          </Box>
        </Toolbar>
      </AppBar>

      {/* Drawer for Mobile Menu */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        PaperProps={{ sx: { backgroundColor: "#1c1c1c", color: "white" } }}
      >
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            {navLinks.map((text) => (
              <ListItem button key={text}>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Header;
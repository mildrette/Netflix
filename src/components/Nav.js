import React from "react";
import { AppBar, Toolbar, Box, Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

const Nav = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <AppBar position="fixed" sx={{ background: "#141414", px: 2, top: 0 }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Link to="/">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
              alt="Netflix Logo"
              style={{ height: 40, cursor: "pointer" }}
            />
          </Link>
        </Box>
        <Box sx={{ display: "flex", gap: 2 }}>
          <Button
            component={Link}
            to="/home"
            color="inherit"
            sx={{ textTransform: "none" }}
          >
            Home
          </Button>
          {user ? (
            <>
              <Button
                component={Link}
                to="/profiles"
                color="inherit"
                sx={{ textTransform: "none" }}
              >
                Profiles
              </Button>
              <Button
                onClick={handleLogout}
                color="inherit"
                sx={{ textTransform: "none", backgroundColor: "#e50914" }}
              >
                Logout
              </Button>
            </>
          ) : (
            <>
              <Button
                component={Link}
                to="/login"
                color="inherit"
                sx={{ textTransform: "none" }}
              >
                Login
              </Button>
              <Button
                component={Link}
                to="/signup"
                color="inherit"
                sx={{ textTransform: "none" }}
              >
                Sign Up
              </Button>
            </>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Nav;

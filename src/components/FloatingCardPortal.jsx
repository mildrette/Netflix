import React from "react";
import ReactDOM from "react-dom";
import { Box } from "@mui/material";

const FloatingCardPortal = ({ children }) => {
  return ReactDOM.createPortal(
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        pointerEvents: "none",
        zIndex: 2000,
      }}
    >
      {children}
    </Box>,
    document.body
  );
};

export default FloatingCardPortal;

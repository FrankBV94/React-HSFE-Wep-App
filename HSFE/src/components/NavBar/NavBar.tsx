import { AppBar, Toolbar, Typography } from "@mui/material";
import React from "react";

export interface NavBarInterface {}

const NavBar: React.FC<NavBarInterface> = () => {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          News
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;

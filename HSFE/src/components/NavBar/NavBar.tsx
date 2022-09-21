import { AppBar, Button, IconButton, Toolbar, Typography } from "@mui/material";
import React from "react";
import { FavoriteModal } from "../FavoriteModal";
import { FavoriteTable } from "./FavoriteTable";
import Favorite from "@mui/icons-material/Favorite";
import { dialogOpenSubject$ } from "../FavoriteModal/FavoriteModal";
import { useSelector } from "react-redux";
import { AppStore } from "@/redux/store";

export interface NavBarInterface {}

const NavBar: React.FC<NavBarInterface> = () => {
  const statePeople = useSelector((store: AppStore) => store.favorites);
  const handleClick = () => {
    dialogOpenSubject$.setSubject = true;
  };

  return (
    <>
      <FavoriteModal>
        <FavoriteTable />
      </FavoriteModal>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Tak HSFE
          </Typography>
          <IconButton
            color="error"
            aria-label="favorites"
            component="label"
            onClick={handleClick}
          >
            <Favorite />
          </IconButton>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavBar;

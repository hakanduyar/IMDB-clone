import { Menu, MenuItem } from "@mui/material";
import React from "react";

const HeaderMenu = ({ open, handleClose }) => {
  const openMenu = Boolean(open);

  return (
    <Menu
      id="basic-menu"
      anchorEl={open}
      open={openMenu}
      onClose={handleClose}
      MenuListProps={{
        "aria-labelledby": "basic-button",
      }}
    >
      <MenuItem onClick={handleClose}>Populer</MenuItem>
      <MenuItem onClick={handleClose}>Top Rated</MenuItem>
      <MenuItem onClick={handleClose}>Upcoming</MenuItem>
    </Menu>
  );
};

export default HeaderMenu;

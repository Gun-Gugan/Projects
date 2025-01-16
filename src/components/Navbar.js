import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

export const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  const menuItems = ["Home", "About", "Pages", "Gallery", "Blog", "Contact"];

  return (
    <AppBar
      position="fixed"
      sx={{
        marginTop: "20px",
        borderRadius: "10px",
        backgroundColor: "rgba(37, 100, 235, 0.36)",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Toolbar className="flex justify-between">
        {/* Logo */}
        <Typography variant="h6" className="font-inter font-bold text-white">
          Amiso
        </Typography>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          {menuItems.map((item) => (

            <Button
              key={item}
              className="hidden md:flex text-white capitalize font-inter hover:text-blue-300"
              sx={{
                display: { sm: "none", md: "flex" },
                color: "#fff"
              }}
           >
              {item}
            </Button>
          ))}
        </div>

        {/* Mobile Menu Icon */}
        <IconButton
          edge="end"
          color="inherit"
          aria-label="menu"
          sx={{
            display: { xs: "flex", md: "none" },
          }}
          onClick={toggleDrawer(true)}
        >
          <MenuIcon />
        </IconButton>

        {/* Drawer for Mobile Menu */}
        <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
          <List
            sx={{
              width: "250px",
              backgroundColor: "#fff",
            }}
          >
            {menuItems.map((item) => (
              <ListItem
                button
                key={item}
                onClick={toggleDrawer(false)}
                sx={{
                  "&:hover": { backgroundColor: "#e3f2fd" },
                }}
              >
                <ListItemText
                  primary={item}
                  sx={{
                    fontFamily: "Inter, sans-serif",
                    color: "#424242",
                  }}
                />
              </ListItem>
            ))}
          </List>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};

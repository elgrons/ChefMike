import './App.css';
import React from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import { makeStyles } from '@material-ui/core';
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  navlinks: {
    marginLeft: theme.spacing(10),
    display: "flex",
  },
logo: {
    flexGrow: "1",
    cursor: "pointer",
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "20px",
    marginLeft: theme.spacing(20),
    "&:hover": {
      color: "yellow",
      borderBottom: "1px solid white",
    },
  },
}));

export const Header = () => {
  const classes = useStyles();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Link to="/" className={classes.link}>
          <Typography variant="h4" className={classes.logo}>
          Chef Mike
        </Typography>
        </Link>
          <div className={classes.navlinks}>
            <Link to="/why" className={classes.link}>
              The Why
            </Link>
            <Link to="/about" className={classes.link}>
              About
            </Link>
            <Link to="/menu" className={classes.link}>
              Sample Menus
            </Link>
            <Link to="/booking" className={classes.link}>
              Booking Info
            </Link>
            <Link to="/media" className={classes.link}>
            Media & Testimonials
            </Link>
            <Link to="/contact" className={classes.link}>
            Contact
            </Link>
            </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import { IconButton, Button } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const drawerWidth = 240;
const estilado = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('md')]:{
        display:'none'
    }

  },
 
  appBar: {
    
    [theme.breakpoints.up("md")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: `${drawerWidth}px`,
    },
   },
}));

const Navbar = (props) => {
  const classes = estilado();

  return (
    
    <AppBar className={classes.appBar}>
      <Toolbar>
        <IconButton
          color="inherit"
        aria-label="menu"
          className={classes.menuButton}
          onClick={() => props.AccionAbrir()}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{flexGrow:1}}>
          
        </Typography>
        <Button variant="text" color="inherit">
          login
        </Button>
      </Toolbar>
    </AppBar>
    
  );
};

export default Navbar;
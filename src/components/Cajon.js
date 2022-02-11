import { makeStyles } from '@mui/styles';
import { Divider, Drawer,Typography} from "@mui/material";
import React from "react";
import { Listas } from './Listas';
import logo from '../logo/logousfx.png';
import Carrusel from './Carrusel';




const styles = makeStyles(() => ({
  
  drawer: {
    width: 240,
    flexShrink: 0,
    backgroundColor:'transparent',
    
    
  },
  drawerPaper: {
    width: 240,
    borderTopRightRadius:35,
    borderBottomRightRadius:35,
    
  },
  center:{
    textAlign:'center',
  }
}
));
const Cajon = (props) => {
  const classes = styles();
  return (
    
      <Drawer
      
        className={classes.drawer}
        
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor='left'
        variant={props.variant}
        open={props.open}
        onClose={props.onClose ? props.onClose : null}
      >
          <div className={classes.toolbar} display='flex' >
      
      
      
              <Typography variant="h5"  color="initial"  sx={{ paddingLeft:'40px',paddingBottom:'10px', paddingRight:'10px' , width:'70px', display: 'inline' }}  >Fimee</Typography>
              <div style={{display:'inline-flex', margin:'15px'}} ><img src={logo} alt='usfx' width='24px'   /></div>
      
          </div>
          <Divider/>
           <Listas/>
           <Carrusel/>
      
      </Drawer>
   
  );
};


export default Cajon;

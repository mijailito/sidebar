import React  from "react";
import { makeStyles } from "@mui/styles";


import Cajon from "./Cajon";
import Navbar from "./Navbar";

const style = makeStyles((theme) => ({
  rooting: {
    display: "flex",
  },

  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
  sxDown: {
    "@media (max-width: 900px)": {
      display: "none",
    },
  },
  sxUp: {
      "@media (min-width: 1500px)": {
        display: "none",
      },
  },
}));

const Contenedor = () => {
  const classes = style();
  const [abrir,setAbrir]= React.useState(false);
  const AccionAbrir = () => {
    setAbrir(!abrir)
  };
  return (
    
      <div className={classes.rooting}>

        <Navbar AccionAbrir={AccionAbrir} />
       

        <div className={classes.sxDown}>
          <Cajon 
            variant='permanent'
            open={true}
          />
        </div>
        <div className={classes.sxUp}>
          <Cajon 
            variant='temporary'
            open={abrir}
            onClose={AccionAbrir}
          />
        </div>

        <div className={classes.content}>
        <div className={classes.toolbar}>  </div>;
          contenido
        </div>
      </div>
    
  );
};

export default Contenedor;

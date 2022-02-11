import React from "react";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
} from "@mui/material";

import Authority from "../logo/Autoridades";

import Biblioteca from "../logo/Library";
import Digitales from "../logo/Digitales";
import Proyecto from "../logo/Tesis";
import Humanidades from "../logo/Humanidades";
import Economia from "../logo/Economia";
import EngineeringIcon from "@mui/icons-material/Engineering";
import Juridica from "../logo/Judge";
import Idiomas from "../logo/Idiomas";
import Medicina from "../logo/Medicina";
import Fisic from "../logo/Fisico";

export const Listas = () => {
  return (
    <div>
      
        <List
          component="nav"
          subheader={
            <ListSubheader component="div" id="nested-list-subheader">
              Menú
            </ListSubheader>
          }
        >
          <ListItem button>
            <ListItemIcon>
              <Biblioteca />
            </ListItemIcon>
            <ListItemText primary="Biblioteca" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <Authority />
            </ListItemIcon>
            <ListItemText primary="Autoridades" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <Fisic />
            </ListItemIcon>
            <ListItemText primary="Libros Fisicos" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <Digitales />
            </ListItemIcon>
            <ListItemText primary="Libros Digitales" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <Proyecto />
            </ListItemIcon>
            <ListItemText primary="Tesis y Proyecto de Grado" />
          </ListItem>
        </List>
        <List
          component="nav"
          subheader={
            <ListSubheader component="div" id="nested-list-subheader">
              Categoria
            </ListSubheader>
          }
        >
          <ListItem button>
            <ListItemIcon>
              <Humanidades />
            </ListItemIcon>
            <ListItemText primary="Humanidades" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <Economia />
            </ListItemIcon>
            <ListItemText primary="Economia" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <EngineeringIcon sx={{ color: "#000" }} />
            </ListItemIcon>
            <ListItemText primary="Ingenieria" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <Juridica />
            </ListItemIcon>
            <ListItemText primary="Ciencias Juridicas" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <Idiomas />
            </ListItemIcon>
            <ListItemText primary="Idiomas" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <Medicina />
            </ListItemIcon>
            <ListItemText primary="Medicina" />
          </ListItem>
        </List>
      
    </div>
  );
};

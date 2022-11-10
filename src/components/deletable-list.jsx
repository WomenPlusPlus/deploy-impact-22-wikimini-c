import React from 'react';
import {
  ListItem,
  ListItemText,
  IconButton,
  Divider,
  List,
} from '@mui/material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const DeletableList = ({ items, itemName, style }) => (

  <List sx={{ ...style, flexGrow: 1 }} component="nav">
    {items.map((item) => (
      <div key={item.id}>
        <ListItem button>
          <ListItemText primary={item[itemName]} />
          <IconButton aria-label="delete">
            <DeleteOutlineIcon />
          </IconButton>
        </ListItem>
        <Divider variant="middle" />
      </div>
    ))}
  </List>

);

export default DeletableList;

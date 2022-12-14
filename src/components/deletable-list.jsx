import React from 'react';
import {
  ListItem,
  ListItemText,
  IconButton,
  Divider,
  List,
} from '@mui/material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import Tooltip from '@mui/material/Tooltip';
import './deletable-list.css';

const DeletableList = ({ items, itemName, style }) => (

  <List sx={{ ...style, flexGrow: 1 }} component="nav" disablePadding>
    {items.map((item) => (
      <div key={item.id}>
        <ListItem button>
          <ListItemText
            className="text"
            primary={item[itemName]}
          />
          <Tooltip title="Edit">
            <IconButton aria-label="edit">
              <ModeEditIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Delete">
            <IconButton aria-label="delete">
              <DeleteOutlineIcon />
            </IconButton>
          </Tooltip>
        </ListItem>
        <Divider variant="middle" />
      </div>
    ))}
  </List>
);

export default DeletableList;

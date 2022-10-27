import React from 'react';
import {
  ListItem,
  ListItemText,
  IconButton,
  Divider,
  Box,
  List,
} from '@mui/material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const DeletableList = ({ items, itemName, style }) => (
  <Box width="100%" border="1px solid black" borderRadius={1} mb={5}>
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: 290,
        overflow: 'hidden',
        overflowY: 'scroll',
        gap: 2,
      }}
    >
      <List sx={style} component="nav">
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
    </Box>
  </Box>
);

export default DeletableList;

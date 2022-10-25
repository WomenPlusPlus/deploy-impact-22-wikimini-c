import {
  Typography, Box, List, ListItem, ListItemText, Divider, IconButton,
} from '@mui/material';
import React from 'react';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import CreateIcon from '@mui/icons-material/Create';
import MainContainer from '../../components/main-container';

const style = {
  width: '100%',
  bgcolor: 'background.paper',
};

const tasks = [
  { task: 'Task1' },
  { task: 'Task2' },
  { task: 'Task3' },
  { task: 'Task4' },
  { task: 'Task5' },
  { task: 'Task6' },
  { task: 'Task7' },
  { task: 'Task8' },
  { task: 'Task9' },
  { task: 'Task10' },
  { task: 'Task11' },
];

const TasksPage = () => (
  <MainContainer>
    <Typography variant="h5" mb={3}>All tasks</Typography>
    {' '}
    <Box width="100%" border="1px solid black" borderRadius={1} mb={5}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
        }}
      >
        <List sx={style} component="nav">
          {tasks.map(({ task }) => (
            <>
              <ListItem>
                <ListItemText key={task} primary={task} />
                <IconButton>
                  <CreateIcon />
                </IconButton>
                <IconButton aria-label="delete">
                  <DeleteOutlineIcon />
                </IconButton>
              </ListItem>
              <Divider variant="middle" />
            </>
          ))}
        </List>
      </Box>
    </Box>
  </MainContainer>
);

export default TasksPage;

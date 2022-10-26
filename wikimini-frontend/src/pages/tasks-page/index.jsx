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
  { id: 1, task: 'Task1' },
  { id: 2, task: 'Task2' },
  { id: 3, task: 'Task3' },
  { id: 4, task: 'Task4' },
  { id: 5, task: 'Task5' },
  { id: 6, task: 'Task6' },
  { id: 7, task: 'Task7' },
  { id: 8, task: 'Task8' },
  { id: 9, task: 'Task9' },
  { id: 10, task: 'Task10' },
  { id: 11, task: 'Task11' },
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
          {tasks.map(({ id, task }) => (
            <div key={id}>
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
            </div>
          ))}
        </List>
      </Box>
    </Box>
  </MainContainer>
);

export default TasksPage;

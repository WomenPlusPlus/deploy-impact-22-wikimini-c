import React from 'react';
import {
  Typography, Box, List, ListItem, ListItemText, Divider, IconButton, Button,
} from '@mui/material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import CreateIcon from '@mui/icons-material/Create';
import { useNavigate } from 'react-router-dom';
import MainContainer from '../../components/main-container';
import DeletableList from '../../components/deletable-list';

const style = {
  width: '100%',
  bgcolor: 'background.paper',
};

const studentsTasksStatus = [
  { id: 1, studentName: 'Student1', task: 'Task1' },
  { id: 2, studentName: 'Student2', task: 'Task2' },
  { id: 3, studentName: 'Student3', task: 'Task3' },
  { id: 4, studentName: 'Student4', task: 'Task4' },
  { id: 5, studentName: 'Student5', task: 'Task5' },
  { id: 6, studentName: 'Student6', task: 'Task6' },
  { id: 7, studentName: 'Student7', task: 'Task7' },
  { id: 8, studentName: 'Student8', task: 'Task8' },
  { id: 9, studentName: 'Student9', task: 'Task9' },
  { id: 10, studentName: 'Student10', task: 'Task10' },
];

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

const DashboardPage = () => {
  const navigate = useNavigate();

  return (
    <MainContainer>
      <Typography variant="h5" mb={5}>Class 1</Typography>
      <Box display="flex" width="100%" gap={5}>
        <Box width="100%" display="flex" flexDirection="column" alignItems="center" justifyContent="center">
          <Box width="100%" display="flex" alignItems="flex-end" justifyContent="space-between" mb={3}>
            <Typography>Students</Typography>
            <Box display="flex" gap={3}>
              <Button
                sx={(theme) => ({ background: theme.palette.secondary.main })}
                variant="contained"
                size="small"
              >
                Add student

              </Button>
            </Box>
          </Box>
          <DeletableList items={studentsTasksStatus} itemName="studentName" style={style} />
        </Box>
        <Box width="100%" display="flex" flexDirection="column" alignItems="center" justifyContent="center">
          <Box width="100%" display="flex" alignItems="flex-end" justifyContent="space-between" mb={3}>
            <Typography>Recent tasks</Typography>
            <Box display="flex" gap={3}>
              <Button variant="contained" size="small" onClick={() => navigate('/create-task')}>Create task</Button>
              <Button variant="contained" size="small" onClick={() => navigate('/tasks')}>See all tasks</Button>
            </Box>
          </Box>
          <DeletableList items={tasks} itemName="task" style={style} />
        </Box>
      </Box>
      <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" width="100%">
        <Typography variant="h5" my={5}>Task status</Typography>
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
            <List sx={style} component="nav" aria-label="mailbox folders">

              {studentsTasksStatus.map(({ id, studentName, task }) => (
                <div key={id}>
                  <ListItem button>
                    <ListItemText primary={studentName} />
                    <ListItemText primary={task} />
                    <IconButton>
                      <CheckCircleOutlineIcon />
                    </IconButton>
                    <IconButton>
                      <HighlightOffIcon />
                    </IconButton>
                  </ListItem>
                  <Divider variant="middle" />
                </div>
              ))}
            </List>
          </Box>
        </Box>
      </Box>

      <Typography variant="h5" my={5}>Forum?</Typography>
      <Box width="100%" border="1px solid black" borderRadius={1}>
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
          <List sx={style} component="nav" aria-label="mailbox folders">
            <ListItem button>
              <IconButton aria-label="delete">
                <MailOutlineIcon />
              </IconButton>
              <ListItemText primary="Message" />
              <IconButton aria-label="delete">
                <CreateIcon />
              </IconButton>
              <IconButton aria-label="delete">
                <DeleteOutlineIcon />
              </IconButton>
            </ListItem>
            <Divider variant="middle" />
            <ListItem button>
              <IconButton aria-label="delete">
                <MailOutlineIcon />
              </IconButton>
              <ListItemText primary="Message" />
              <IconButton aria-label="delete">
                <CreateIcon />
              </IconButton>
              <IconButton aria-label="delete">
                <DeleteOutlineIcon />
              </IconButton>
            </ListItem>
            <Divider variant="middle" />
            <ListItem button>
              <IconButton aria-label="delete">
                <MailOutlineIcon />
              </IconButton>
              <ListItemText primary="Message" />
              <IconButton aria-label="delete">
                <CreateIcon />
              </IconButton>
              <IconButton aria-label="delete">
                <DeleteOutlineIcon />
              </IconButton>
            </ListItem>
            <Divider variant="middle" />
            <ListItem button>
              <IconButton aria-label="delete">
                <MailOutlineIcon />
              </IconButton>
              <ListItemText primary="Message" />
              <IconButton aria-label="delete">
                <CreateIcon />
              </IconButton>
              <IconButton aria-label="delete">
                <DeleteOutlineIcon />
              </IconButton>
            </ListItem>
            <Divider variant="middle" />
            <ListItem button>
              <IconButton aria-label="delete">
                <MailOutlineIcon />
              </IconButton>
              <ListItemText primary="Message" />
              <IconButton aria-label="delete">
                <CreateIcon />
              </IconButton>
              <IconButton aria-label="delete">
                <DeleteOutlineIcon />
              </IconButton>
            </ListItem>
            <Divider variant="middle" />
            <ListItem button>
              <IconButton aria-label="delete">
                <MailOutlineIcon />
              </IconButton>
              <ListItemText primary="Message" />
              <IconButton aria-label="delete">
                <CreateIcon />
              </IconButton>
              <IconButton aria-label="delete">
                <DeleteOutlineIcon />
              </IconButton>
            </ListItem>
            <Divider variant="middle" />
            <ListItem button>
              <IconButton aria-label="delete">
                <MailOutlineIcon />
              </IconButton>
              <ListItemText primary="Message" />
              <IconButton aria-label="delete">
                <CreateIcon />
              </IconButton>
              <IconButton aria-label="delete">
                <DeleteOutlineIcon />
              </IconButton>
            </ListItem>
            <Divider variant="middle" />
            <ListItem button>
              <IconButton aria-label="delete">
                <MailOutlineIcon />
              </IconButton>
              <ListItemText primary="Message" />
              <IconButton aria-label="delete">
                <CreateIcon />
              </IconButton>
              <IconButton aria-label="delete">
                <DeleteOutlineIcon />
              </IconButton>
            </ListItem>
            <Divider variant="middle" />
            <ListItem button>
              <IconButton aria-label="delete">
                <MailOutlineIcon />
              </IconButton>
              <ListItemText primary="Message" />
              <IconButton aria-label="delete">
                <CreateIcon />
              </IconButton>
              <IconButton aria-label="delete">
                <DeleteOutlineIcon />
              </IconButton>
            </ListItem>
            <Divider variant="middle" />
          </List>
        </Box>
      </Box>
    </MainContainer>
  );
};

export default DashboardPage;

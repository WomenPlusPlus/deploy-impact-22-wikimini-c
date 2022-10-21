import React from 'react';
import {
  Typography, Box, List, ListItem, ListItemText, Divider, IconButton,
} from '@mui/material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import CreateIcon from '@mui/icons-material/Create';
import MainContainer from '../../components/main-container';

const style = {
  width: '100%',
  bgcolor: 'background.paper',
};

const students = [
  { studentName: 'Student1' },
  { studentName: 'Student2' },
  { studentName: 'Student3' },
  { studentName: 'Student4' },
  { studentName: 'Student5' },
  { studentName: 'Student6' },
  { studentName: 'Student7' },
  { studentName: 'Student8' },
  { studentName: 'Student9' },
  { studentName: 'Student10' },
];

const studentsTasksStatus = [
  { studentName: 'Student1', task: 'Task1' },
  { studentName: 'Student2', task: 'Task2' },
  { studentName: 'Student3', task: 'Task3' },
  { studentName: 'Student4', task: 'Task4' },
  { studentName: 'Student5', task: 'Task5' },
  { studentName: 'Student6', task: 'Task6' },
  { studentName: 'Student7', task: 'Task7' },
  { studentName: 'Student8', task: 'Task8' },
  { studentName: 'Student9', task: 'Task9' },
  { studentName: 'Student10', task: 'Task10' },
];

const DashboardPage = () => (
  <MainContainer>
    <Box width="100%" display="flex" flexDirection="column" alignItems="center" justifyContent="center">
      <Box borderRadius={1} mt={5} py={3} px={7} backgroundColor="rgba(23, 183, 255, 0.56)">
        <Typography variant="h5">CLASS 1</Typography>
      </Box>
      <Typography variant="h5" my={5}>Sudents</Typography>
      <Box width="600px" border="1px solid black" borderRadius={1} mb={5}>
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
            {students.map(({ studentName }) => (
              <>
                <ListItem button>
                  <ListItemText key={studentName} primary={studentName} />
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
    </Box>
    <Box width="100%" display="flex" flexDirection="column" alignItems="center" justifyContent="center">
      <Typography variant="h5" my={5}>Pending approvals by students</Typography>
      <Box width="600px" border="1px solid black" borderRadius={1} mb={5}>
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

            {studentsTasksStatus.map(({ studentName, task }) => (
              <>
                <ListItem button>
                  <ListItemText key={studentName} primary={studentName} />
                  <ListItemText key={studentName} primary={task} />
                  <IconButton>
                    <CheckCircleOutlineIcon />
                  </IconButton>
                  <IconButton>
                    <HighlightOffIcon />
                  </IconButton>
                </ListItem>
                <Divider variant="middle" />
              </>
            ))}
          </List>
        </Box>
      </Box>
    </Box>
    <Box width="100%" display="flex" flexDirection="column" alignItems="center" justifyContent="center">
      <Typography variant="h5" my={5}>Forum?</Typography>
      <Box width="600px" border="1px solid black" borderRadius={1}>
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
    </Box>
  </MainContainer>
);

export default DashboardPage;

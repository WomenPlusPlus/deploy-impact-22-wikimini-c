import React from 'react';
import {
  Typography, Box, List, ListItem, ListItemText, Divider, IconButton, Button, Chip,
} from '@mui/material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import CreateIcon from '@mui/icons-material/Create';
import { useNavigate, useParams } from 'react-router-dom';
import DeletableList from '../../components/deletable-list';
import AddStudentModal from '../add-class-page/add-student-modal';
import './dashboard.css';
import StyledOutlinedEvaluateButton from '../../components/outlined-evaluate-button';
import { getClassDetailsService } from '../../services/classes';

const style = {
  width: '100%',
  bgcolor: 'background.paper',
};

const messages = [
  { id: 1, message: 'Message1' },
  { id: 2, message: 'Message2' },
  { id: 3, message: 'Message3' },
  { id: 4, message: 'Message4' },
  { id: 5, message: 'Message5' },
  { id: 6, message: 'Message6' },
  { id: 7, message: 'Message7' },
  { id: 8, message: 'Message8' },
  { id: 9, message: 'Message9' },
  { id: 10, message: 'Message10' },
];

const DashboardPage = () => {
  const navigate = useNavigate();
  const { id: classId } = useParams();
  const [students, setStudents] = React.useState([]);
  const [tasks, setTasks] = React.useState([]);
  const [studentsTasks, setStudentsTasks] = React.useState([]);
  const [ classTitle, setClassTitle ] = React.useState('');

  React.useEffect(() => {
    const fetchData = async () => {
      const data = await getClassDetailsService(classId);
      console.log(data);
      if (data) {
        setStudents(data.allStudents || []);
        setTasks(data.allTasks || []);
        setStudentsTasks(data.tasksPerStudent || []);
        setClassTitle(data.classInfo.class_name || '');
      }
    };

    fetchData();
  }, [classId]);

  return (
    <div className="dashboard-container">
      <Typography variant="h5" mt={5}>{classTitle}</Typography>
      <Box display="flex" width="100%" gap={5}>
        <Box width="100%" height="380px" display="flex" flexDirection="column" alignItems="center" justifyContent="center" backgroundColor="#D7EFA8" borderRadius={4}>
          <Box width="100%" display="flex" alignItems="flex-end" justifyContent="space-between" p={2}>
            <Typography>STUDENTS</Typography>
            <AddStudentModal classId={classId} />
          </Box>
          <Box width="100%" mb={4}>
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
              <DeletableList items={students} itemName="studentUsername" style={style} />
            </Box>
          </Box>
        </Box>

        <Box width="100%" height="380px" display="flex" flexDirection="column" alignItems="center" justifyContent="center" backgroundColor="#FEB1D0" borderRadius={4}>
          <Box width="100%" display="flex" alignItems="flex-end" justifyContent="space-between" p={2}>
            <Typography>RECENT TASKS</Typography>
            <Box>
              <Button
                sx={(theme) => ({
                  background: theme.palette.secondary.main,
                  ':hover': {
                    bgcolor: theme.palette.common.white,
                    color: theme.palette.secondary.main,
                    border: '2px solid #EB5757',
                  },
                })}
                variant="contained"
                size="small"
                onClick={() => navigate(`/class/${classId}/tasks`)}
                style={{
                  borderRadius: '10px',
                  border: '2px solid #EB5757',
                }}
              >
                See all

              </Button>
              <Button
                sx={(theme) => ({
                  background: theme.palette.secondary.main,
                  ml: 2,
                  ':hover': {
                    bgcolor: theme.palette.common.white,
                    color: theme.palette.secondary.main,
                    border: '2px solid #EB5757',
                  },
                })}
                variant="contained"
                size="small"
                onClick={() => navigate(`/class/${classId}/create-task`)}
                style={{
                  borderRadius: '10px',
                  border: '2px solid #EB5757',
                }}
              >
                Create task
              </Button>
            </Box>
            {/* <Box display="flex" gap={3} /> */}
          </Box>
          <Box width="100%" mb={4}>
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
              <DeletableList items={tasks} itemName="task" style={style} />
            </Box>
          </Box>
        </Box>

      </Box>

      <Box width="100%" display="flex" flexDirection="column" alignItems="center" justifyContent="center" backgroundColor="#FDC982" borderRadius={4}>
        <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" width="100%">
          <Typography py={2.5}>TASK STATUS</Typography>
          <Box width="100%" mb={5}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                height: 300,
                overflow: 'hidden',
                overflowY: 'scroll',
                gap: 2,
              }}
            >
              <List sx={{ ...style, flexGrow: 1 }} component="nav" aria-label="mailbox folders">

                {studentsTasks.map(({ id, studentUsername, task, taskStatus }) => (
                  <div key={id}>
                    <ListItem button>
                      <ListItemText primary={studentUsername} />
                      <ListItemText primary={task} />
                      <Chip
                        style={{
                          backgroundColor: 'white',
                          border: '2px solid #EB5757',
                          borderRadius: '10px',
                          color: '#EB5757',
                        }}
                        label={taskStatus}
                        variant="filled"
                      />
                      <StyledOutlinedEvaluateButton>Evaluate</StyledOutlinedEvaluateButton>
                    </ListItem>
                    <Divider variant="middle" />
                  </div>
                ))}
              </List>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box width="100%" display="flex" flexDirection="column" alignItems="center" justifyContent="center" backgroundColor="#87DED9" borderRadius={4}>
        <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" width="100%">
          <Typography py={2.5}>FORUM</Typography>
          <Box width="100%" mb={5}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                height: 293,
                overflow: 'hidden',
                overflowY: 'scroll',
                gap: 2,
              }}
            >
              <List sx={{ ...style, flexGrow: 1 }} component="nav" aria-label="mailbox folders">

                {messages.map(({ id, message }) => (
                  <div key={id}>
                    <ListItem button>
                      <IconButton aria-label="delete">
                        <MailOutlineIcon />
                      </IconButton>
                      <ListItemText primary={message} />
                      <IconButton aria-label="delete">
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
        </Box>
      </Box>

    </div>
  );
};

export default DashboardPage;

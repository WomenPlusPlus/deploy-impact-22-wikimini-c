import React from 'react';
import {
  Typography, Box, List, ListItem, ListItemText, Divider, Chip,
} from '@mui/material';
// import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
// import MailOutlineIcon from '@mui/icons-material/MailOutline';
// import CreateIcon from '@mui/icons-material/Create';
import { useNavigate, useParams } from 'react-router-dom';
import DeletableList from '../../components/deletable-list';
import AddStudentModal from '../add-class-page/add-student-modal';
import './dashboard.css';
import SmallOutlinedButton from '../../components/small-outlined-button';
import { getClassDetailsService } from '../../services/classes';
import SmallDashboardButton from './small-dashboard-button';
import SmallContainer from './small-container';
import BigContainer from './big-container';

const style = {
  width: '100%',
  bgcolor: 'background.paper',
};

// const messages = [
//   { id: 1, message: 'Message1' },
//   { id: 2, message: 'Message2' },
//   { id: 3, message: 'Message3' },
//   { id: 4, message: 'Message4' },
//   { id: 5, message: 'Message5' },
//   { id: 6, message: 'Message6' },
//   { id: 7, message: 'Message7' },
//   { id: 8, message: 'Message8' },
//   { id: 9, message: 'Message9' },
//   { id: 10, message: 'Message10' },
// ];

const DashboardPage = () => {
  const navigate = useNavigate();
  const { id: classId } = useParams();
  const [students, setStudents] = React.useState([]);
  const [tasks, setTasks] = React.useState([]);
  const [studentsTasks, setStudentsTasks] = React.useState([]);
  const [classTitle, setClassTitle] = React.useState('');

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
      <Typography variant="h4" mt={5}>{classTitle}</Typography>
      <Box
        display="flex"
        width="100%"
        gap={5}
        sx={{
          flexDirection:
          {
            lg: 'row',
            md: 'column',
            sm: 'column',
            xs: 'column',
          },
        }}
      >
        <SmallContainer
          title="STUDENT"
          color="#D7EFA8"
          modal={<AddStudentModal classId={classId} />}
        >
          <DeletableList items={students} itemName="studentUsername" style={style} />
        </SmallContainer>
        <SmallContainer
          title="RECENT TASKS"
          color="#FEB1D0"
          buttons={(
            <Box display="flex" gap={1}>
              <SmallDashboardButton clickHandler={() => { navigate(`/class/${classId}/tasks`); }}>
                All
              </SmallDashboardButton>
              <SmallDashboardButton clickHandler={() => { navigate(`/class/${classId}/create-task`); }}>
                Add
              </SmallDashboardButton>
            </Box>
)}
        >
          <DeletableList items={tasks} itemName="task" style={style} />
        </SmallContainer>
      </Box>
      <BigContainer color="#FDC982" title="TASK STATUS">
        <List sx={{ ...style, flexGrow: 1 }} component="nav" aria-label="mailbox folders">
          {studentsTasks.map(({
            id, studentUsername, task, taskStatus,
          }) => (
            <div key={id}>
              <ListItem button>
                <ListItemText primary={studentUsername} />
                <ListItemText
                  primary={task}
                  sx={{ display: { xs: 'none', sm: 'block', md: 'block' } }}
                />
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
                <SmallOutlinedButton handleClick={() => navigate('/student-task')}>Evaluate</SmallOutlinedButton>
              </ListItem>
              <Divider variant="middle" />
            </div>
          ))}
        </List>
      </BigContainer>
      <BigContainer color="#87DED9" title="FORUM">
        <Box sx={{ ...style, flexGrow: 1 }} component="nav">
          <Box height="120px" width="100%" border="2px solid blue">
            <Box>ff</Box>
            <Box>ff</Box>
            <Box>ff</Box>
          </Box>
          <Box height="500px" width="100%" border="2px solid red">fff</Box>

          {/* {messages.map(({ id, message }) => (
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
          ))} */}
        </Box>
      </BigContainer>
      <SearchElement />
    </div>
  );
};

export default DashboardPage;

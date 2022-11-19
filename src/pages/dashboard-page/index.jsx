import React from 'react';
import {
  Typography, Box, List, ListItem, ListItemText, Divider, Chip, Avatar, Fab,
} from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import ForumIcon from '@mui/icons-material/Forum';
import DeletableList from '../../components/deletable-list';
import AddStudentModal from './add-student-modal';
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
          title="STUDENTS"
          color="#D7EFA8"
          modal={<AddStudentModal classId={classId} />}
        >
          {students.length > 0 && (<DeletableList items={students} itemName="studentUsername" style={style} />)}
          {students.length === 0 && (
          <Box height="100%" backgroundColor="white" display="flex" justifyContent="center" alignItems="center">There are no students in this class. Click the ADD button to add them.</Box>
          )}
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
          {tasks.length > 0 && (<DeletableList items={tasks} itemName="task" style={style} />)}
          {tasks.length === 0 && (
          <Box height="100%" backgroundColor="white" display="flex" justifyContent="center" alignItems="center">There are no tasks in this class. Click the ADD button to add them.</Box>
          )}
        </SmallContainer>
      </Box>
      <BigContainer color="#FDC982" title="TASK STATUS" height="300px">
        {studentsTasks.length > 0 && (
        <List
          sx={{ ...style, flexGrow: 1 }}
          component="nav"
          style={{ display: 'flex', flexDirection: 'column' }}
        >
          {studentsTasks.map(({
            id, studentUsername, task, taskStatus,
          }) => (
            <div key={id}>
              <ListItem button>
                <ListItemText primary={studentUsername} />
                <ListItemText
                  primary={task}
                  sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }}
                />
                {taskStatus === 'Pending' && (
                  <>
                    <Chip
                      style={{
                        backgroundColor: '#FF4A3F',
                        borderRadius: '10px',
                        width: '82px',
                        fontSize: '11px',
                      }}
                      label={taskStatus}
                      variant="filled"
                    />
                    <Box width="88px" />
                  </>
                )}
                {taskStatus === 'Completed' && (
                  <>
                    <Chip
                      style={{
                        backgroundColor: '#7BB662',
                        borderRadius: '10px',
                        width: '82px',
                        fontSize: '11px',
                      }}
                      label={taskStatus}
                      variant="filled"
                    />
                    <SmallOutlinedButton handleClick={() => navigate('/student-task')}>Evaluate</SmallOutlinedButton>
                  </>
                )}
                {taskStatus === 'In Progress' && (
                  <>
                    <Chip
                      style={{
                        backgroundColor: '#FFD301',
                        borderRadius: '10px',
                        width: '82px',
                        fontSize: '11px',
                      }}
                      label={taskStatus}
                      variant="filled"
                    />
                    <Box width="88px" />
                  </>
                )}
              </ListItem>
              <Divider variant="middle" />
            </div>
          ))}
        </List>
        )}
        {studentsTasks.length === 0 && (
        <Box height="100%" padding={5} backgroundColor="white" display="flex" justifyContent="center" alignItems="center" textAlign="center">
          <Typography>
            Task status can be shown only when tasks are asigned to students.
            Create a task and assign a student or assign previously created
            task to a student to be able to see the task status here.
          </Typography>
        </Box>
        )}
      </BigContainer>
      <BigContainer color="#87DED9" title="CLASS CHAT" height="350px">
        <Box sx={{ ...style, flexGrow: 1 }} component="nav">
          <Box
            width="100%"
            display="flex"
            flexDirection="column"
            gap={1}
            px={3}
            py={2}
          >
            <Box display="flex">
              {' '}
              <Avatar alt="Image of a person" src="/Allan_avatar.png" />
              <Box pl={1}>
                <Typography fontSize={11} fontWeight="bold">c/012022</Typography>
                <Typography fontSize={11}>u/as2203 - 5h</Typography>
              </Box>
            </Box>
            <Box>
              <Typography>
                Hi Class! I don’t know how to accept a task. Can someone help me out?
              </Typography>
            </Box>
            <Box display="flex" justifyContent="space-between">
              <Box display="flex" gap={1}>
                <ForumIcon />
                <Typography fontSize={12}>3 comments</Typography>
              </Box>
              <Fab
                variant="extended"
                size="small"
                sx={(theme) => ({
                  background: theme.palette.secondary.main,
                  color: theme.palette.common.white,
                  fontSize: '12px',
                  ':hover': {
                    bgcolor: theme.palette.common.white,
                    color: theme.palette.secondary.main,
                    border: '2px solid',
                    borderColor: 'secondary.main',
                  },
                })}
              >
                Add a comment
              </Fab>
            </Box>
          </Box>
          <Divider variant="middle" />
          <Box width="100%" mt={1}>
            <Box
              width="100%"
              display="flex"
              flexDirection="column"
              gap={1}
              px={4}
              py={2}
              backgroundColor="#F8F8F8"
              mb={1}
            >
              <Box display="flex">
                {' '}
                <Avatar alt="Image of a person" src="/lynda.png" />
                <Box pl={1}>
                  <Typography fontSize={11}>u/teacherlynda - 3h</Typography>
                  <Typography>
                    Hi! Have you tried using the “I’d
                    like to take it” button on the yellow banner (up)?
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Box
              width="100%"
              display="flex"
              flexDirection="column"
              gap={1}
              px={4}
              py={2}
              backgroundColor="#F8F8F8"
              mb={1}
            >
              <Box display="flex">
                {' '}
                <Avatar alt="Image of a person" src="/girl.png" />
                <Box pl={1}>
                  <Typography fontSize={11}>u/teacherlynda - 3h</Typography>
                  <Typography>
                    Thanks teacher! I had the same doubt and now it’s solved. Thanks!
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </BigContainer>
    </div>
  );
};

export default DashboardPage;

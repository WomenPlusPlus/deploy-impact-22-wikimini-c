import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Box, List, ListItem, ListItemText, Divider, Typography, ListItemButton,
} from '@mui/material';
import { giveTask, listStudentsInClass, resetToInitialState } from '../../redux/reducers/student';
import './assign-student.css';
import FilledControlledWidthButton from '../../components/filled-controlled-width-button';

const style = {
  width: '100%',
  bgcolor: 'background.paper',
};

const AssignStudentPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const studentState = useSelector((state) => state.student);
  const { students } = studentState.data;
  const { id: taskId, classId } = useParams();
  const [student, setStudent] = React.useState(null);

  React.useEffect(() => {
    dispatch(listStudentsInClass(classId));
  }, [dispatch, classId]);

  React.useEffect(() => {
    if (studentState.status === 'task given') {
      navigate(`/class/${classId}/tasks`);
      dispatch(resetToInitialState());
    }
  }, [dispatch, studentState, navigate, classId]);

  const handleSubmit = () => {
    dispatch(giveTask({ studentId: student.id, taskId }));
  };

  return (
    <div className="assign-student-container">
      <Typography variant="h5" mt="20px">Assign to...</Typography>
      {' '}
      <Box
        mb={1}
        sx={{
          maxWidth: '100%',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignSelf: 'center',
            alignItems: 'center',
            gap: 2,
            paddingBottom: 8,
            px: '10px',
            backgroundColor: 'white',
            borderRadius: '20px',
            width:
          {
            lg: '600px',
            md: '600px',
            sm: '300px',
            xs: '300px',
          },
          }}
        >
          <List
            sx={style}
            component="nav"
            style={{
              borderRadius: '20px',
              paddingBottom: 5,
            }}
          >
            {students && students.map(({ id, username }) => (
              <div key={id}>
                <ListItem>
                  <ListItemButton
                    onClick={() => setStudent({ id, username })}
                    selected={id === student?.id}
                  >
                    <ListItemText key={username} primary={username} />
                  </ListItemButton>
                </ListItem>
                <Divider variant="middle" />
              </div>
            ))}
          </List>
        </Box>
      </Box>
      <Box display="flex" gap={3}>
        <FilledControlledWidthButton
          type="submit"
          onClick={() => { navigate(`/class/${classId}/tasks`); }}
          disabled={studentState.status === 'loading'}
        >
          Skip for now
        </FilledControlledWidthButton>
        <FilledControlledWidthButton
          type="submit"
          onClick={handleSubmit}
          disabled={!student}
        >
          Assign
        </FilledControlledWidthButton>
      </Box>
    </div>
  );
};

export default AssignStudentPage;

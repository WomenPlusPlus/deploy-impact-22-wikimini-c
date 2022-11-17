import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Box, List, ListItem, ListItemText, Divider, Typography, ListItemButton, Button,
} from '@mui/material';
import { giveTask, listStudentsInClass, resetToInitialState } from '../../redux/reducers/student';
import './assign-student.css';

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
      <Typography variant="h5">Assign to...</Typography>
      {' '}
      <Box width="100%" mb={5}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
          }}
        >
          <List sx={style} component="nav" style={{ borderRadius: '20px', paddingBottom: '-1px' }}>
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
        <Button
          type="submit"
          variant="contained"
          onClick={() => { navigate(`/class/${classId}/tasks`); }}
          disabled={studentState.status === 'loading'}
        >
          Skip for now
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmit}
          disabled={!student}
        >
          Assign
        </Button>
      </Box>
    </div>
  );
};

export default AssignStudentPage;

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Box, List, ListItem, ListItemText, Divider, Typography, ListItemButton, Button,
} from '@mui/material';
import MainContainer from '../../components/main-container';
import { giveTask, listStudentsInClass } from '../../redux/reducers/student';

const style = {
  width: '100%',
  bgcolor: 'background.paper',
};

const AssignStudentPage = () => {
  const dispatch = useDispatch();
  const students = useSelector((state) => state.student.data.students);
  const [student, setStudent] = React.useState(null);

  React.useEffect(() => {
    dispatch(listStudentsInClass(1));
  }, [dispatch]);

  const handleSubmit = () => {
    // TODO: ADD TASKID FROM URL PARAMS
    dispatch(giveTask({ studentId: student.id, taskId: 1 }));
  };

  return (
    <MainContainer>
      <Typography variant="h5">Select Students</Typography>
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
            {students.map(({ id, username }) => (
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
      <Button variant="contained" color="primary" onClick={handleSubmit} disabled={!student}>Assign</Button>
    </MainContainer>
  );
};

export default AssignStudentPage;

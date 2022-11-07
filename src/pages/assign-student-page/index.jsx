import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Box, List, ListItem, ListItemText, Divider, Typography,
} from '@mui/material';
import MainContainer from '../../components/main-container';
import { listStudentsInClass } from '../../redux/reducers/student';

const style = {
  width: '100%',
  bgcolor: 'background.paper',
};

const AssignStudentPage = () => {
  const dispatch = useDispatch();
  const students = useSelector((state) => state.student.data.students);
  console.log(students);
  React.useEffect(() => {
    dispatch(listStudentsInClass(1));
  }, [dispatch]);

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
                  <ListItemText key={username} primary={username} />
                </ListItem>
                <Divider variant="middle" />
              </div>
            ))}
          </List>
        </Box>
      </Box>

    </MainContainer>
  );
};

export default AssignStudentPage;

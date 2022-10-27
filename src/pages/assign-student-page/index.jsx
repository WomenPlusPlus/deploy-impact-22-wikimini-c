import React from 'react';
import {
  Box, List, ListItem, ListItemText, Divider, Typography,
} from '@mui/material';
import MainContainer from '../../components/main-container';

const style = {
  width: '100%',
  bgcolor: 'background.paper',
};

const students = [
  { id: 1, studentName: 'Student1' },
  { id: 2, studentName: 'Student2' },
  { id: 3, studentName: 'Student3' },
  { id: 4, studentName: 'Student4' },
  { id: 5, studentName: 'Student5' },
  { id: 6, studentName: 'Student6' },
  { id: 7, studentName: 'Student7' },
  { id: 8, studentName: 'Student8' },
  { id: 9, studentName: 'Student9' },
  { id: 10, studentName: 'Student10' },
];

const AssignStudentPage = () => (
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
          {students.map(({ id, studentName }) => (
            <div key={id}>
              <ListItem>
                <ListItemText key={studentName} primary={studentName} />
              </ListItem>
              <Divider variant="middle" />
            </div>
          ))}
        </List>
      </Box>
    </Box>

  </MainContainer>
);

export default AssignStudentPage;

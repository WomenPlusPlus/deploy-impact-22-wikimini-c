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
          {students.map(({ studentName }) => (
            <>
              <ListItem>
                <ListItemText key={studentName} primary={studentName} />
              </ListItem>
              <Divider variant="middle" />
            </>
          ))}
        </List>
      </Box>
    </Box>

  </MainContainer>
);

export default AssignStudentPage;

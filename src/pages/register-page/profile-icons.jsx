import React from 'react';
import { Box, CardMedia } from '@mui/material';

const ProfileIcons = () => (
  <Box display="flex" width="100%" justifyContent="space-around">
    <Box height="40px" width="40px">
      <CardMedia
        component="img"
        image="student.png"
        alt="student"
      />
    </Box>
    <Box height="40px" width="40px">
      <CardMedia
        component="img"
        image="teacher.png"
        alt="student"
      />
    </Box>
    <Box height="40px" width="40px">
      <CardMedia
        component="img"
        image="mother.png"
        alt="student"
      />
    </Box>
  </Box>
);

export default ProfileIcons;

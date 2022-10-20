import React from 'react';
import { Box } from '@mui/material';

const MainContainer = ({ children }) => (
  <Box display="flex" flexDirection="column" p={10}>{children}</Box>
);

export default MainContainer;

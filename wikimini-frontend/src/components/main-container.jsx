import React from 'react';
import { Box } from '@mui/material';

const MainContainer = ({ children }) => (
  <Box display="flex" flexDirection="column" p={15}>{children}</Box>
);

export default MainContainer;

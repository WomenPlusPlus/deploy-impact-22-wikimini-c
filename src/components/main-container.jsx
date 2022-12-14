import React from 'react';
import { Box } from '@mui/material';

const MainContainer = ({ children }) => (
  <Box display="flex" flexDirection="column" alignItems="center" px={40} py={5} mt="165px">{children}</Box>
);

export default MainContainer;

import React from 'react';
import { Box, Typography } from '@mui/material';

const SmallContainer = ({
  children, modal, title, color, buttons,
}) => (
  <Box
    width="100%"
    height="380px"
    display="flex"
    flexDirection="column"
    alignItems="center"
    justifyContent="center"
    backgroundColor={color}
    borderRadius={4}
  >
    <Box
      width="100%"
      display="flex"
      alignItems="flex-end"
      justifyContent="space-between"
      p={2}
    >
      <Typography variant="h6">{title}</Typography>
      {buttons}
      {modal}
    </Box>
    <Box width="100%" mb={4}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: 285,
          overflow: 'hidden',
          overflowY: 'scroll',
          gap: 2,
        }}
      >
        {children}
      </Box>
    </Box>
  </Box>
);
export default SmallContainer;

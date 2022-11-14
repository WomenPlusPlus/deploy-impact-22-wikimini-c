import React from 'react';
import { Box, Typography } from '@mui/material';

const BigContainer = ({
  children, color, title,
}) => (
  <Box
    width="100%"
    display="flex"
    flexDirection="column"
    alignItems="center"
    justifyContent="center"
    backgroundColor={color}
    borderRadius={4}
  >
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      width="100%"
    >
      <Typography variant="h6" py={2}>{title}</Typography>
      <Box width="100%" mb={5}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            height: 300,
            overflow: 'hidden',
            overflowY: 'scroll',
            gap: 2,
          }}
        >
          {children}
        </Box>
      </Box>
    </Box>
  </Box>

);
export default BigContainer;

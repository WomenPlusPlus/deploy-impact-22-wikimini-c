import React from 'react';
import { Button } from '@mui/material';

const StyledSubmitButton = ({ children }) => (
  <Button
    style={{
      borderRadius: '10px',
      border: '2px solid #EB5757',
    }}
    sx={(theme) => ({
      background: theme.palette.secondary.main,
      color: theme.palette.common.white,
      width: '100%',
      type: 'submit',
      variant: 'contained',
      size: 'large',
      py: 1.5,
      border: '2px solid theme.palette.secondary.main',
      ':hover': {
        bgcolor: theme.palette.common.white,
        color: theme.palette.secondary.main,
        border: '2px solid #EB5757',
      },
    })}
  >
    {children}
  </Button>
);

export default StyledSubmitButton;

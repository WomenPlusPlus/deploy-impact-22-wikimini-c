import React from 'react';
import { Button } from '@mui/material';

const OutlinedControlledWidthButton = ({ children, onClick }) => (
  <Button
    style={{
      borderRadius: '10px',
    }}
    sx={(theme) => ({
      background: theme.palette.common.white,
      color: theme.palette.secondary.main,
      variant: 'outlined',
      border: '2px solid',
      borderColor: 'secondary.main',
      size: 'large',
      width: '170px',
      py: 1.5,
      ':hover': {
        bgcolor: theme.palette.secondary.main,
        color: theme.palette.common.white,
      },
    })}
    onClick={onClick}
  >
    {children}
  </Button>
);
export default OutlinedControlledWidthButton;

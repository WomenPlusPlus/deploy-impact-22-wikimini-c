import React from 'react';
import { Button } from '@mui/material';

const SmallOutlinedButton = ({ children, handleClick }) => (
  <Button
    onClick={handleClick}
    style={{
      borderRadius: '10px',
    }}
    sx={(theme) => ({
      background: theme.palette.common.white,
      color: theme.palette.secondary.main,
      variant: 'outlined',
      border: '2px solid',
      borderColor: 'secondary.main',
      size: 'small',
      ml: '10px',
      py: '2px',
      ':hover': {
        bgcolor: theme.palette.secondary.main,
        color: theme.palette.common.white,
      },
    })}
  >
    {children}
  </Button>
);

export default SmallOutlinedButton;
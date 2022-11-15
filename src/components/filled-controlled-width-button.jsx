import React from 'react';
import { Button } from '@mui/material';

const FilledControlledWidthButton = ({
  children, type, onClick, disabled,
}) => (
  <Button
    style={{
      borderRadius: '10px',
    }}
    sx={(theme) => ({
      background: theme.palette.secondary.main,
      color: theme.palette.common.white,
      width: '170px',
      type: { type },
      variant: 'contained',
      size: 'large',
      py: 1.5,
      border: '2px solid',
      borderColor: 'secondary.main',
      ':hover': {
        bgcolor: theme.palette.common.white,
        color: theme.palette.secondary.main,
        border: '2px solid',
        borderColor: 'secondary.main',
      },
    })}
    onClick={onClick}
    disabled={disabled}
  >
    {children}
  </Button>
);

export default FilledControlledWidthButton;

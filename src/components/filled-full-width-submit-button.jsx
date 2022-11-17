import React from 'react';
import { Button } from '@mui/material';

const FilledFullWidthSubmitButton = ({ children, onClick }) => (
  <Button
    style={{
      borderRadius: '10px',
    }}
    sx={(theme) => ({
      background: theme.palette.secondary.main,
      color: theme.palette.common.white,
      width: '100%',
      type: 'submit',
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
  >
    {children}
  </Button>
);

export default FilledFullWidthSubmitButton;

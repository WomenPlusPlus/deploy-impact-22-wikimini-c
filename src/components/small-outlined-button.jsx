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
      color: theme.palette.secondary.additional,
      variant: 'outlined',
      border: '2px solid',
      borderColor: theme.palette.secondary.additional,
      size: 'small',
      ml: '10px',
      py: '4px',
      fontSize: '11px',
      ':hover': {
        bgcolor: theme.palette.secondary.additional,
        color: theme.palette.common.white,
      },
    })}
  >
    {children}
  </Button>
);

export default SmallOutlinedButton;

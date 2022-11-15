import React from 'react';
import { Button } from '@mui/material';
// import { useNavigate } from 'react-router-dom';

const OutlinedControlledWidthButton = ({ children, onClick }) => (
  <Button
      // onClick={() => navigate('/register')}
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

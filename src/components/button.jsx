import React from 'react';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const StyledButton = ({ children }) => {
  const navigate = useNavigate();

  return (

    <Button
      style={{
        borderRadius: '10px',
      }}
      sx={(theme) => ({
        background: theme.palette.secondary.main,
        color: theme.palette.common.white,
        width: '300px',
        type: 'button',
        variant: 'contained',
        size: 'large',
        py: 1.8,
        border: '2px solid theme.palette.secondary.main',
        ':hover': {
          bgcolor: theme.palette.common.white,
          color: theme.palette.secondary.main,
          border: '2px solid #EB5757',
        },
      })}
      onClick={() => navigate('/add-class')}
    >
      {children}
    </Button>
  );
};

export default StyledButton;

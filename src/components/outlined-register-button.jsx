import React from 'react';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const StyledOutlinedRegisterButton = ({ children }) => {
  const navigate = useNavigate();

  return (
    <Button
      onClick={() => navigate('/register')}
      style={{
        borderRadius: '10px',
      }}
      sx={(theme) => ({
        background: theme.palette.common.white,
        color: theme.palette.secondary.main,
        // type: 'submit',
        variant: 'outlined',
        border: '2px solid #EB5757',
        size: 'large',
        py: 1.6,
        px: 6,
        ':hover': {
          bgcolor: theme.palette.secondary.main,
          color: theme.palette.common.white,
        },
      })}
    >
      {children}
    </Button>
  );
};

export default StyledOutlinedRegisterButton;

import React from 'react';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const link = '/student-task';

const StyledOutlinedEvaluateButton = ({ children }) => {
  const navigate = useNavigate();

  return (
    <Button
      onClick={() => navigate(link)}
      style={{
        borderRadius: '10px',
      }}
      sx={(theme) => ({
        background: theme.palette.common.white,
        color: theme.palette.secondary.main,
        variant: 'outlined',
        border: '2px solid #EB5757',
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
};

export default StyledOutlinedEvaluateButton;

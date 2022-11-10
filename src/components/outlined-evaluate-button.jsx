import React from 'react';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const StyledOutlinedEvaluateButton = ({ children }) => {
  const navigate = useNavigate();

  return (
    <Button
      onClick={() => navigate('/student-task')}
      style={{
        borderRadius: '10px',
      }}
      sx={(theme) => ({
        background: theme.palette.common.white,
        color: theme.palette.secondary.main,
        // type: 'submit',
        variant: 'outlined',
        border: '2px solid #EB5757',
        size: 'small',
        ml: '15px',
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

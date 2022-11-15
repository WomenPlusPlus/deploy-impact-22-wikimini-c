import React from 'react';
import { Button } from '@mui/material';

const SmallDashboardButton = ({ children, clickHandler }) => (
  <Button
    sx={(theme) => ({
      border: '2px solid',
      background: theme.palette.secondary.main,
      borderColor: theme.palette.secondary.main,
      ':hover': {
        bgcolor: theme.palette.common.white,
        color: theme.palette.secondary.main,
        border: '2px solid',
        borderColor: theme.palette.secondary.main,
      },
    })}
    variant="contained"
    size="small"
    style={{
      borderRadius: '10px',
    }}
    onClick={clickHandler}
  >
    {children}
  </Button>
);
export default SmallDashboardButton;

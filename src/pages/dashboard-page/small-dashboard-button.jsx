import React from 'react';
import { Button } from '@mui/material';

const SmallDashboardButton = ({ children, clickHandler }) => (
  <Button
    sx={(theme) => ({
      background: theme.palette.secondary.main,
      ':hover': {
        bgcolor: theme.palette.common.white,
        color: theme.palette.secondary.main,
        border: '2px solid #EB5757',
      },
    })}
    variant="contained"
    size="small"
    style={{
      borderRadius: '10px',
      border: '2px solid #EB5757',
    }}
    onClick={clickHandler}
  >
    {children}
  </Button>
);
export default SmallDashboardButton;

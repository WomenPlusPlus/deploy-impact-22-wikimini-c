import React from 'react';
import {
  Button,
} from '@mui/material';

const ModalButton = ({ openModal, children }) => (
  <Button
    variant="contained"
    onClick={openModal}
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
    size="small"
    style={{
      borderRadius: '10px',
    }}
  >
    {children}
  </Button>
);

export default ModalButton;

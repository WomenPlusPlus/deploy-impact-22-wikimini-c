import React from 'react';
import {
  Button,
} from '@mui/material';

const ModalButton = ({ openModal, children }) => (
  <Button
    variant="contained"
    onClick={openModal}
    sx={(theme) => ({
      background: theme.palette.secondary.main,
      ':hover': {
        bgcolor: theme.palette.common.white,
        color: theme.palette.secondary.main,
        border: '2px solid #EB5757',
      },
    })}
    size="small"
    style={{
      borderRadius: '10px',
      border: '2px solid #EB5757',
    }}
  >
    {children}
  </Button>
);

export default ModalButton;

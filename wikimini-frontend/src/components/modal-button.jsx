import React from 'react';
import {
  Button,
} from '@mui/material';

const ModalButton = ({ openModal, children }) => (
  <Button variant="contained" color="success" onClick={openModal}>{children}</Button>
);

export default ModalButton;

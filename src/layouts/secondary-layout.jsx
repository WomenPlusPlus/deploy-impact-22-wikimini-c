import React from 'react';
import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';
import SecondaryNavbar from '../components/secondary-navbar';

const SecondaryLayout = () => (
  <Box>
    <SecondaryNavbar />
    <Outlet />
  </Box>
);

export default SecondaryLayout;

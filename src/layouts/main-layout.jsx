import React from 'react';
import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';
import Navbar from '../components/navbar';

const MainLayout = () => (
  <Box>
    <Navbar />
    <Outlet />
  </Box>
);

export default MainLayout;

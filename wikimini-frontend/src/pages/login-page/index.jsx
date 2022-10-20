import React from 'react';
import {
  Box, Typography, TextField, Button,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

import MainContainer from '../../components/main-container';

const LoginPage = () => {
  const navigate = useNavigate();

  return (
    <MainContainer>
      <Box display="flex" width="100%" justifyContent="center">
        <Box
          component="form"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 3,
            height: 450,
            width: 300,
            border: '1px solid black',
            p: 5,
          }}
        >
          <Typography component="h1" variant="h4">Login</Typography>
          <TextField
            name="email"
            label="Email"
            type="email"
            variant="filled"
            fullWidth
          />
          <TextField
            name="password"
            label="Password"
            type="password"
            variant="filled"
            fullWidth
          />
          <Button
            type="submit"
            variant="contained"
            size="large"
          >
            Login
          </Button>
          <Typography>Imagine teacher has loged in</Typography>
          <Button color="inherit" onClick={() => navigate('/classes')}>Go to classes</Button>
        </Box>
      </Box>
    </MainContainer>
  );
};

export default LoginPage;

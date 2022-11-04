import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';

const toolbarStyle = {
  minHeight: '165px',
};

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" elevation={0} style={{ background: '#ddf1fb' }}>
        <Toolbar style={toolbarStyle}>
          <IconButton
            size="large"
            edge="start"
            color="default"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Button color="info" onClick={() => navigate('/')}>HOME</Button>
          <Button color="info" onClick={() => navigate('/login')}>Login</Button>
          <Button color="info" onClick={() => navigate('/register')}>Register</Button>
          <Button color="info" onClick={() => navigate('/dashboard')}>Dashboard</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;

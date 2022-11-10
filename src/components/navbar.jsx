import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';
import { Card, CardMedia } from '@mui/material';

const toolbarStyle = {
  minHeight: '165px',
};

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" elevation={0} style={{ background: '#ddf1fb' }}>
        <Toolbar style={toolbarStyle}>
          <Card
            elevation={0}
            sx={(theme) => ({
              background: theme.palette.primary.light,
            })}
          >
            <CardMedia
              width="312px"
              height="64px"
              component="img"
              image="LogoWikimini.png"
              alt="logo wikimini"
            />
          </Card>
          {/* <Box height="100px" width="100px" border="2px solid blue" /> */}
          <MenuIcon />
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

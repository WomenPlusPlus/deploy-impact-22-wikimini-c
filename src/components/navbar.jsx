import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Card, Toolbar, Box, AppBar,
} from '@mui/material';

const toolbarStyle = {
  minHeight: '165px',
};

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky" elevation={0} style={{ background: '#ddf1fb' }}>
        <Toolbar style={toolbarStyle}>
          <Card
            elevation={0}
            sx={(theme) => ({
              background: theme.palette.primary.light,
            })}
            onClick={() => navigate('/')}
          >
            <div className="logo" />

          </Card>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;

import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Card, CardMedia, Toolbar, Box, AppBar,
} from '@mui/material';

const toolbarStyle = {
  minHeight: '165px',
};

const SecondaryNavbar = () => {
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
              sx={{
                width:
              {
                lg: 312,
                md: 312,
                sm: 250,
                xs: 200,
              },
                height:
              {
                lg: 64,
                md: 64,
                sm: 50,
                xs: 35,
              },
                ':hover': {
                  cursor: 'pointer',
                },
              }}
              component="img"
              image="LogoWikimini.png"
              alt="Logo wikimini"
              onClick={() => navigate('/')}
            />
          </Card>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default SecondaryNavbar;

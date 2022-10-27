import { createTheme } from '@mui/material';

const baseTheme = createTheme({
  palette: {
    primary: {
      main: '#18191a',
      light: '#d1cfcd',
      contrast: '#E8E8E8',
      contrastText: '#eeeeee',
    },
    secondary: {
      main: '#141414',
      light: '#F5E7DE',
      dark: '#d6c8bc',
      contrastText: '#eeeeee',
    },
  },

  breakpoints: {
    values: {
      xs: 0,
      sm: 576,
      md: 780,
      lg: 992,
      xl: 1200,
      xxl: 1536,
    },
  },

  shape: {
    borderRadius: 4,
  },

  zIndex: {
    appBar: 1300,
  },
});

const mixinTheme = createTheme(baseTheme, {
  mixins: {
    navbar: {
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center',
      height: '70px',
      boxShadow: 0,
      padding: baseTheme.spacing(0, 4),
    },
  },
});

export default mixinTheme;

import { createTheme } from '@mui/material';

const baseTheme = createTheme({
  palette: {
    primary: {
      main: '#000000',
      dark: '#000000',
      contrast: '#E8E8E8',
      contrastText: '#eeeeee',
    },
    secondary: {
      main: '#d1cfcd',
      light: '#d1cfcd',
      dark: '#d1cfcd',
      contrastText: '#d1cfcd',
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

  overrides: {
    MuiAppBar: {
      colorPrimary: {
        backgroundColor: '#662E9B',
      },
    },
  },

  components: {
    MuiToolbar: {
      styleOverrides: {
        dense: {
          height: 100,
          minHeight: 100,
        },
      },
    },
  },
});

const mixinTheme = createTheme(baseTheme, {
  mixins: {
    navbar: {
      // display: 'flex',
      // justifyContent: 'flex-end',
      // alignItems: 'center',
      height: '165px',
      boxShadow: 0,
      padding: baseTheme.spacing(0, 4),
    },
  },
});

export default mixinTheme;

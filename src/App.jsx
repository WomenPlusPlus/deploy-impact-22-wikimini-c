import React from 'react';
import {
  BrowserRouter,
} from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';
import PageRoutes from './routes/page-routes';
import customtheme from './styles/theme';

const App = () => (
  <ThemeProvider theme={customtheme}>
    <BrowserRouter>
      <PageRoutes />
    </BrowserRouter>
  </ThemeProvider>
);

export default App;

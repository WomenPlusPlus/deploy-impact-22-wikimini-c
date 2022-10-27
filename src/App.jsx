import React from 'react';
import {
  BrowserRouter,
} from 'react-router-dom';
import PageRoutes from './routes/page-routes';

const App = () => (
  <BrowserRouter>
    <PageRoutes />
  </BrowserRouter>
);

export default App;

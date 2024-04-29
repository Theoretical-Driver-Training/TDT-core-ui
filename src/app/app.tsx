import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { AppRouter } from './shared/Router';
import './app.css';

const defaultTheme = createTheme({
  palette: {
    primary: {
      light: '#a67ad2',
      main: '#3b46b0',
    },
    secondary: {
      light: '#fa8393',
      main: '#ff3d57',
      dark: '#fc1937',
    },
  },
});

export const PRIMARY_GRADIENT =
  'linear-gradient(90deg, rgba(235,38,173,1) 0%, rgba(56,73,169,1) 100%)';
export const SECONDARY_GRADIENT =
  'linear-gradient(90deg, rgba(178,108,204,1) 0%, rgba(113,187,240,1) 100%)';

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <AppRouter />
    </ThemeProvider>
  );
}

export default App;

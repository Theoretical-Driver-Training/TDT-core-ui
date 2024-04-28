import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { AppRouter } from './shared/Router';

const defaultTheme = createTheme({
  palette: {
    primary: {
      light: '#e4d0f9',
      main: '#9b41f5',
      dark: '#000',
    },
    secondary: {
      main: '#fff',
    },
  },
});

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <AppRouter />
    </ThemeProvider>
  );
}

export default App;

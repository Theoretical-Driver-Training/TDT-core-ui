import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { LoginPage } from './widgets/Login';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { RegisterPage } from './widgets/Register';
import CssBaseline from '@mui/material/CssBaseline';
import { LayoutRoute } from './shared/LayoutRoute';

const defaultTheme = createTheme({
  palette: {
    primary: {
      main: 'rgba(125,0,249,0.85)',
    },
  },
});

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Router>
        <div>
          <Switch>
            <LayoutRoute path="/" exact>
              home
            </LayoutRoute>
            <Route path="/login" component={LoginPage} />
            <Route path="/register" component={RegisterPage} />
          </Switch>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;

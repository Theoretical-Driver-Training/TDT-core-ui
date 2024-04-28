import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { LoginPage } from './widgets/Login';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { RegisterPage } from './widgets/Register';

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
      <Router>
        <div>
          <Switch>
            <Route path="/">
              <Route path="/login" component={LoginPage} />
              <Route path="/register" component={RegisterPage} />
              home
            </Route>
          </Switch>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;

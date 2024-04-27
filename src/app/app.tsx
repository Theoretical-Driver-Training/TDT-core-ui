import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { LoginPage } from './widgets/Login';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const defaultTheme = createTheme();

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Router>
        <div>
          <Switch>
            <Route path="/login" component={LoginPage} />
            <Route path="/">home</Route>
          </Switch>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;

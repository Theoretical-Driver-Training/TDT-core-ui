import React from 'react';
import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom';

export function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/login">login</Route>
          <Route path="/">home</Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

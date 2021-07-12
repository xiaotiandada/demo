import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import './App.css';
import Home from './views/Home/index';
import Demo from './views/Demo/index';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home></Home>
        </Route>
        <Route path="/demo" exact>
          <Demo></Demo>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

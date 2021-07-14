import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import './App.css';
import Index from './views/Index/index';
import Home from './views/Home/index';
import Demo from './views/Demo/index';
import Demo1 from './views/Demo1/index';
import Demo2 from './views/Demo2/index';
import Upload from './views/Upload/index';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Index></Index>
        </Route>
        <Route path="/demo" exact>
          <Demo></Demo>
        </Route>
        <Route path="/demo1" exact>
          <Demo1></Demo1>
        </Route>
        <Route path="/demo2" exact>
          <Demo2></Demo2>
        </Route>
        <Route path="/home" exact>
          <Home></Home>
        </Route>
        <Route path="/upload" exact>
          <Upload></Upload>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

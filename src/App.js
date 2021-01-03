import React from 'react';
import Start from 'pages/Start';
import Play from 'pages/Play';
import ScoreBoard from 'pages/ScoreBoard';
import { NavBar } from './components'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'

function App() {
  return (
    <div >
      <Router>
        <NavBar />
        <Switch>
          <Route isExact path='/play'>
            <Play />
          </Route>
          <Route isExact path='/scoreboard'>
            <ScoreBoard />
          </Route>
          <Route path='/'>
            <Start />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

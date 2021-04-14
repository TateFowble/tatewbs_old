import React, {
  Component
} from 'react';
import {
  HashRouter as Router,
  // BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import './App.css';

// Webpage imports
import Navigation from './components/navigation/Navigation';
import Homepage from './pages/Homepage';

function App() {
  return (
    <div id="tatewbs">
      <Navigation />
      <Router>
        <Switch>
          <Homepage />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

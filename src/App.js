import React, {
  Component
} from 'react';
import {
  BrowserRouter as Router,
  // BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import './App.scss';

// Import Components for App.js
import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer';

// Webpage imports
import Homepage from './pages/Homepage/Homepage';
import Error from './pages/Error/ErrorPage';

function App() {
  return (
      <Router>
    <div id="tatewbs">
      <Navigation />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="*" component={Error} />
        </Switch>
      <Footer />
    </div>
      </Router>
  );
}

export default App;

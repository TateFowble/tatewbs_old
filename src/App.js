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
import Navigation from './components/navigation/Navigation';
import Footer from './components/Footer/Footer';

// Webpage imports
import Homepage from './pages/Homepage/Homepage';
import Error from './pages/Error/ErrorPage';

function App() {
  return (
    <div id="tatewbs">
      <Navigation />
      <Router>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="*" component={Error} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;

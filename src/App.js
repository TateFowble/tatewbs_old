// Library Import
import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import anime from 'animejs';

// SCSS imports
import './App.scss';

// Import Components for App.js
import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer';

// Webpage imports
import Homepage from './pages/Homepage/Homepage';
import Error from './pages/Error/ErrorPage';
import About from './pages/About/About';

function App() {
  useEffect(()=> {
    anime({
      targets: '.load-in',
      translateY: 50,
      direction: 'alternate',
      loop: false,
      easing: 'easeOutElastic(1, .8)',
      duration: 350,
      autoplay: true
    });
  });
  return (
    <Router>
      <div id="tatewbs">
        <Navigation />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/about" component={About} />
          <Route path="/services" component={Homepage} />
          <Route path="/projects" component={Homepage} />
          <Route component={Error} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;


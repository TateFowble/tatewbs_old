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
import ProjectsPage from './pages/Projects/ProjectsPage';
import PortfolioPage from './pages/Portfolio/PortfolioPage';
  // Service page 
import ServicesPage from './pages/Services/ServicesPage';
import MenuPage from './pages/Services/MenuPage/MenuPage';
import WebDevelopmentPage from './pages/Services/WebDevelopmentPage/WebDevelopmentPage';
import LocalContentHostingPage from './pages/Services/LocalContentHostingPage/LocalContentHostingPage';


import ContactForm from './components/ContactForm/ContactForm';

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
        <div style={{marginBottom: `3.5em`}} />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/about" component={About} />
          <Route exact path="/services" component={ServicesPage} />
          <Route exact path="/services/menu-hosting" component={MenuPage} />
          <Route exact path="/services/web-development" component={WebDevelopmentPage} />
          <Route exact path="/services/local-content-hosting" component={LocalContentHostingPage} />
          <Route path="/projects" component={ProjectsPage} />
          <Route path="/portfolio" component={PortfolioPage} />
          <Route path="/c" component={ContactForm} />
          <Route component={Error} />

        </Switch>
        <div style={{ marginTop: `0em` }} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;

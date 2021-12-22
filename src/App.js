// Library Import
import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route
} from 'react-router-dom';
import anime from 'animejs';

// SCSS imports
import './App.scss';

// Import Components for App.js
import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer';

// Webpage imports
import Homepage from './pages/Homepage/Homepage';
import Error from './pages/Error/ErrorPage';
// import About from './pages/About/About';
import ProjectsPage from './pages/Projects/ProjectsPage';

  // Service page 
import ServicesPage from './pages/Services/ServicesPage';
import MenuPage from './pages/Services/MenuPage/MenuPage';
import WebDevelopmentPage from './pages/Services/WebDevelopmentPage/WebDevelopmentPage';
import LocalContentHostingPage from './pages/Services/LocalContentHostingPage/LocalContentHostingPage';

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
          <Route path="/" element={<Homepage />} />
          {/* <Route exact path="/about" component={About} /> */}
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/menu-hosting" element={<MenuPage />} />
          <Route path="/services/web-development" element={<WebDevelopmentPage />} />
          <Route path="/services/local-content-hosting" element={<LocalContentHostingPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/:error_404" element={<Error />} />

        </Switch>
        <div style={{ marginTop: `0em` }} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;

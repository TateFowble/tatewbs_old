import React, { lazy, Suspense } from 'react';
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route
} from 'react-router-dom';

import './App.scss';
import './styles/main.scss';

import PublicRoutes from './components/PublicRoutes';


// Webpage imports
import Homepage from './pages/home';
import Error from './pages/error';
// import About from './pages/About/About';
import ProjectsPage from './pages/projects';
import { ParallaxProvider } from 'react-scroll-parallax';

// Service page 
import ServicesPage from './pages/services';
import MenuPage from './pages/services/menu';
import WebDevelopmentPage from './pages/services/webdevelopment';
import LocalContentHostingPage from './pages/services/localcontenthosting';

// const Homepage = lazy(() => import('./pages/home'));

const App = () => {

  return (
    <ParallaxProvider>
      <Router>
        <Suspense fallback={<p className='fs-1'>Loading...</p>}>

          <Switch>
            <Route element={<PublicRoutes />}>
              <Route path='/' element={<Homepage />} />
              {/* <Route exact path='/about' component={About} /> */}
              <Route path='/services' element={<ServicesPage />} />
              <Route path='/services/menu-hosting' element={<MenuPage />} />
              <Route path='/services/web-development' element={<WebDevelopmentPage />} />
              <Route path='/services/local-content-hosting' element={<LocalContentHostingPage />} />
              <Route path='/clients' element={<ProjectsPage />} />
            </Route>
            <Route path='*' element={<Error />} />
          </Switch>

        </Suspense>
      </Router>
    </ParallaxProvider>
  );
}

export default App;

import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route
} from 'react-router-dom';

import './App.scss';
import './styles/main.scss';

import PublicRoutes from './components/PublicRoutes';


// Webpage imports
import Homepage from './pages/homepage';
import Error from './pages/error';
// import About from './pages/About/About';
import ProjectsPage from './pages/projectpage';

// Service page 
import ServicesPage from './pages/servicespage';
import MenuPage from './pages/menupage';
import WebDevelopmentPage from './pages/webdevelopmentpage';
import LocalContentHostingPage from './pages/localcontenthostingpage';


const App = () => {

  return (
    <div id='tatewbs'>
      <Router>
        <Switch>
          <Route element={<PublicRoutes />}>
            <Route path='/' element={<Homepage />} />
            {/* <Route exact path='/about' component={About} /> */}
            <Route path='/services' element={<ServicesPage />} />
            <Route path='/services/menu-hosting' element={<MenuPage />} />
            <Route path='/services/web-development' element={<WebDevelopmentPage />} />
            <Route path='/services/local-content-hosting' element={<LocalContentHostingPage />} />
            <Route path='/customers' element={<ProjectsPage />} />
          </Route>
            <Route path='*' element={<Error />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

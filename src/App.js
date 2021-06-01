import React from 'react';
import NavMenu from './components/NavMenu';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';


function App() {
  return (
    <>
    
    <Router>
      <NavMenu/>

      <Switch>
        <Route path="/" exact={true} >
        {/* <ParticleBackground/> */}
        <Home/>
        </Route>

        <Route path="/projects" exact={true}>
        <Projects/>
        </Route>

        <Route path="/contact" exact={true}>
        <Contact/>
        </Route>
      </Switch>

     
      
      
     
      </Router>
    </>
  );
}

export default App;

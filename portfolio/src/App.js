import React from 'react';
import NavMenu from './components/NavMenu';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
//import ParticleBackground from './styles/ParticleBackground';

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

        <Route path="/about" exact={true}>
        <About/>
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

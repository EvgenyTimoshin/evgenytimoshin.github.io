import React, { useState } from 'react';
import "./App.css";
import Home from './Home';
import About from './About';
import MyNav from './MyNav';
import Projects from './Projects';
import Career from './Career';
//import "bootstrap/dist/css/bootstrap.min.css";
import './App.scss';
import {BrowserRouter as Router, Switch, Route} from  'react-router-dom';

function App(){
  
  return(
    <Router>
    <div>
      <MyNav/>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/about" exact component={About}/>
        <Route path="/projects" exact component={Projects}/>
        <Route path="/career" exact component={Career}/>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
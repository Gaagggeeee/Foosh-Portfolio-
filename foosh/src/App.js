import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// COMPONENTS 
import Header from './components/pages/header';
import Reels from './components/pages/reels';


function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/videos' component={Reels} />
        </Switch>
        
      </Router>
    </>
  );
}

export default App;

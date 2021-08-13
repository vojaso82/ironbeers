import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Switch, Link } from 'react-router-dom';
import Homepage from './components/Homepage';

class App extends React.Component {
  render(){


    return (
      <div className="App">   
      <Homepage/>  
      <Switch>
         <Route exact path='/beers'/>
         <Route exact path='/random-beer'/>
         <Route exact path='/new-beer'/>
      </Switch>
      </div>
    );
  }
}

export default App;

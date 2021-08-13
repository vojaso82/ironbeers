import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Switch, Link } from 'react-router-dom';
import Homepage from './components/Homepage';
import Beers from './components/Beers';
import RandomBeer from './components/RandomBeer';
import NewBeer from './components/NewBeer';




class App extends React.Component {
  render(){


    return (
      <div className="App">   
      
      <Switch>
         <Route exact path='/' render={(props) => <Homepage dog="german shepard" {...props}/>} /> 
         <Route exact path='/beers' render={(props) => <Beers dog="pit bull" {...props}/>} />
         <Route exact path='/random-beer' render={(props) => <RandomBeer dog="great dane" {...props}/>}/>
         <Route exact path='/new-beer' render={(props) => <NewBeer dog="husky" {...props}/>}/>
      </Switch>
      </div>
    );
  }
}

export default App;

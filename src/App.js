import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Switch, Link } from 'react-router-dom';
import Homepage from './components/Homepage';
import Beers from './components/Beers';
import RandomBeer from './components/RandomBeer';
import NewBeer from './components/NewBeer';
import BeerDetails from'./components/BeerDetails';




class App extends React.Component {
  render(){


    return (
      <div className="App">   
      
      <Switch>
         <Route exact path='/' render={(props) => <Homepage dog="placeholder" {...props}/>} /> 
         <Route exact path='/beers' render={(props) => <Beers dog="placeholder" {...props}/>} />
         <Route exact path='/random-beer' render={(props) => <RandomBeer dog="placeholder" {...props}/>}/>
         <Route exact path='/new-beer' render={(props) => <NewBeer dog="placeholder" {...props}/>}/>
         <Route exact path='/beers/:id' render={(props) => <BeerDetails dog="placeholder" {...props}/>}/>
      </Switch>
      </div>
    );
  }
}

export default App;

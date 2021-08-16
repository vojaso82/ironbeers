import React, { Component } from 'react';
import HomeButton from './HomeButton';
import axios from 'axios';
import { thisExpression } from '@babel/types';
import { Link } from 'react-router-dom';


class Beers extends Component {
state = {
    beers:[],
    name: ""
}

componentDidMount(){
    axios.get(`https://ih-beers-api2.herokuapp.com/beers`)
    .then(response=>{
        // console.log(response.data)
    this.setState({
        beers: response.data
    })
    })
}

allBeers = () => {
    return this.state.beers.map(eachBeer=>{
        return (
        <div key={eachBeer._id}>
            <img src={eachBeer.image_url} alt={eachBeer.name} style={{width:"50px"}}/>
            <Link to={`/beers/${eachBeer._id}`}><h2>{eachBeer.name}</h2></Link>
            <p>{eachBeer.tagline}</p>
            <p>{eachBeer.contributed_by}</p>
        </div>
        )
    })
}

handleChange = (e) => {
    axios.get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${e.target.value}`)
    .then(response => {
        this.setState({
            beers: response.data
        })
    })
}


    render() {
        return (
            
            <div>
               <HomeButton/>
              
               <input onChange={e=> this.handleChange(e)} name="name" type="text" placeholder="beerName"/>

              
               {this.allBeers()}
            </div>
        )
    }
}


export default Beers;
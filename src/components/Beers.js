import React, { Component } from 'react';
import HomeButton from './HomeButton';
import axios from 'axios';

class Beers extends Component {
state = {
    beers:[]
}

componentDidMount(){
    axios.get(`https://ih-beers-api2.herokuapp.com/beers`)
    .then(response=>{
        console.log(response.data)
    this.setState({
        beers: response.data
    })
    })
}

allBeers = () => {
    return this.state.beers.map(eachBeer=>{
        <div>
            <h2>{eachBeer.name}</h2>
        </div>
    })
}




    render() {
        return (
            <div>
               <HomeButton/>
            </div>
        )
    }
}


export default Beers;
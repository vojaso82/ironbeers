import React, { Component } from 'react'
import HomeButton from './HomeButton';
import axios from 'axios';
import { Link } from 'react-router-dom';

class RandomBeer extends Component {
state ={
    randomBeer: {}
}
    componentDidMount(){
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/random`)
        .then(res=>{
            console.log(res.data)
        this.setState({
            randomBeer: res.data
        })
        })
    }
    
    render() {
        return (
            <div>
                 <HomeButton/>
                 <div key={this.state.randomBeer._id}>
                <h1>Beer Details</h1>
                <img src={this.state.randomBeer.image_url} style={{width:"50px"}}/>
                <h2>{this.state.randomBeer.name}</h2>
                <p>{this.state.randomBeer.tagline}</p>
                <p>{this.state.randomBeer.attenuation_level}</p>
                <p><strong>{this.state.randomBeer.first_brewed}</strong></p>
                <p>{this.state.randomBeer.description}</p>
                <p>{this.state.randomBeer.contributed_by}</p>


            </div>
            </div>
        )
    }
}


export default RandomBeer;
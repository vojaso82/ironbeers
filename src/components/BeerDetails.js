import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


class BeerDetails extends React.Component {
state = {
    beerDetails: {}
}
componentDidMount(){
    axios.get(`https://ih-beers-api2.herokuapp.com/beers/${this.props.match.params.id}`)
    .then(response=>{
        // console.log(response.data)
    
    this.setState({
        beerDetails: response.data
    })
    })
}

    render() {
        console.log(this.state.beerDetails)
        return (
            <div key={this.state.beerDetails._id}>
                <h1>Beer Details</h1>
                <img src={this.state.beerDetails.image_url} style={{width:"50px"}}/>
                <h2>{this.state.beerDetails.name}</h2>
                <p>{this.state.beerDetails.tagline}</p>
                <p>{this.state.beerDetails.attenuation_level}</p>
                <p><strong>{this.state.beerDetails.first_brewed}</strong></p>
                <p>{this.state.beerDetails.description}</p>
                <p>{this.state.beerDetails.contributed_by}</p>


            </div>
        )
    }
}


export default BeerDetails;
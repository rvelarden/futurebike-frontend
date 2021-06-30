import React, { Component } from "react"
import BikeCard from "./BikeCard.js"
import { Card, Icon, Image, Header,Button } from 'semantic-ui-react'

class BikeList extends Component {
   
      render() {
    return (
        <div>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
           <div  >
            <Header size='huge'  textAlign='center'>
            <h1>Available Bikes</h1>
            </Header>
            </div>
            {this.props.bikes.map(bike => <BikeCard key={bike.id} 
            bike={bike} bikes={this.props.bikes} addNewBooking={this.props.addNewBooking}/>)}
            
        </div>
    )
      }
}

export default BikeList
import BookingForm from "./BookingForm";
import React, { Component } from 'react';
import { Header, Button, Image, Embed, Card } from 'semantic-ui-react'


class Bike extends Component {

  state = {
    showForm: false
  }
  displayForm = () =>{
    let display =  !this.state.showForm
    this.setState({showForm: display})
    // console.log('clicked')
  }
  

    render() {
      return (
      <div className="box-wrap">

        <Card fluid >
              <br></br>
              <br></br>
               <h2 class="ui color4 header">{this.props.bike.category}</h2>
              <Image style={{ width: "400px", height: "260px", objectFit: "cover" }} src={this.props.bike.image} wrapped ui={true} />
              <Card.Content>
              <br></br>
              <br></br>
              <br></br>
              <Header>
              <div  class="ui segments">
  
              <div class="ui segment">
              <h4 class="ui color3 header">Location: {this.props.bike.location}</h4 >
              </div>
              <div class="ui segment">
              <h4 class="ui color3 header">Daily Price: ${this.props.bike.price_day}</h4 >
              </div>
              <div class="ui segment">
              <h4 class="ui color3 header">Weekly Price: ${this.props.bike.price_week}</h4 >
              </div>
              <div class="ui segment">
              <h4 class="ui color3 header">Monthly Price: ${this.props.bike.price_month}</h4 >
              </div>
              <div class="ui segment">
              <h4 class="ui color3 header">Yearly Price: ${this.props.bike.price_year}</h4 >
              </div>
              <div class="ui segment">
              <h4 class="ui color3 header">Bikes Available: {this.props.bike.number_of_bikes}</h4 >
              </div>
              </div>
              </Header>  
                  </Card.Content>
                  <Card.Content extra>
                  <Button secondary fluid size='small' color='teal'onClick={this.displayForm} >
                    Book Delivery
                  </Button>
                  {this.state.showForm ? <BookingForm bikes={this.props.bikes} addNewBooking={this.props.addNewBooking}/> : null}
                  </Card.Content>
        </Card >
      </div>
    );
  }

}

export default Bike;
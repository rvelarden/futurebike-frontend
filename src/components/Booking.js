import EditBooking from "./EditBooking";
import React, { Component } from 'react';
import { Card, Icon, Image, Header,Button } from 'semantic-ui-react'

  class Booking extends Component {

    state = {
      showForm: false
    }
    displayForm = () =>{
      let display =  !this.state.showForm
      this.setState({showForm: display})
      this.props.editBookingForm(this.props.booking)
      // console.log('clicked')
    }

    render(){
      return (
        <div className='box-wrap' >
        <Card fluid>
        <Image  wrapped ui={false} />
        <Card.Content>
          <Card.Header>
          <img class="image" style={{ width: "250px", height: "190px", objectFit: "cover" }} src={this.props.booking.bike.image} />
          <h2>Category: {this.props.booking.bike.category}</h2>
          </Card.Header>
           <Header as='h1' color='black' textAlign='center' font='helvetica'>
          </Header>
          
        </Card.Content>
        <Card.Content extra>
            <h2>pickup location: {this.props.booking.pickup_location}</h2>
            <h2>dropoff location: {this.props.booking.dropoff_location}</h2>
            {/* <h2>Daily Price: ${this.props.booking.bike.price_day}</h2> */}
          
        </Card.Content>
        <Card.Content extra>
        <Button  fluid size='small' secondary onClick={this.displayForm} >
            Edit Delivery
          </Button>
          {this.state.showForm ?  <EditBooking booking={this.props.booking} updatedBookings={this.props.updatedBookings} editBookingForm={this.props.editBookingForm} bookings={this.props.bookings} /> : null}
          <br></br>
          
          <Button basic fluid size='small'  color='red' onClick={()=>this.props.deleteBooking(this.props.booking)}className="del-btn" >
          Cancel Booking
          </Button>
    </Card.Content>
      </Card>
          
      </div>
    );
  }

}

export default Booking;
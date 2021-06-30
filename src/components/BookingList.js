import React, { Component } from "react"
import Booking from "./Booking.js"
import { Header, Button } from 'semantic-ui-react'

class BookingList extends Component {
   
  
      render() {
    return (
        <div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <div  class="ui secondary segment">
            <Header as='h1'  textAlign='center'>
            <h1 >My Upcoming Bookings</h1>
            </Header>
            </div>
           
            {this.props.bookings.map(bookingItem => <Booking key={bookingItem.id} booking={bookingItem} editBookingForm={this.props.editBookingForm} bikes={this.props.bikes} updatedBookings={this.props.updatedBookings} deleteBooking={this.props.deleteBooking} bookings={this.props.bookings} />
            )}
          
        </div>
    )
      }
}

export default BookingList
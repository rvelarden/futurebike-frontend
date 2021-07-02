import React, { Component } from "react";
import BookingList from "./BookingList";
import BikeList from "./BikeList";
import SearchBar from "./SearchBar";


class MainContainer extends Component {


    state = {
        bikes: [],
        searchText: '',
        bookings: [],
        updatedBookings: {},
        user: null 
        
      }
    

  componentDidMount() {
    fetch('http://localhost:3000/bikes')
    .then((res) => res.json())
    .then((data) => {
      this.setState({
              bikes: data
            })
    })

  
    // call another fetch for the other url endpoint
    fetch('http://localhost:3000/bookings')
    .then((res) => res.json())
    .then((data) => {
      this.setState({
              bookings: data
            })
            // console.log(data)
    })
}

    editBookingForm = (updateBooking)=>{
      //  console.log(updateBooking)
      
      let bookings = this.state.bookings.filter(eachBooking => eachBooking.id !== updateBooking.id)
      this.setState({
        bookings: [...bookings, updateBooking]
      })
    }

    searchBar = (textT)=>{
      // console.log(textT)
      this.setState({
        searchText: textT
      })
    }

    addNewBooking = (newBooking)=>{
      this.setState({
        bookings: [...this.state.bookings, newBooking]
      })
    }

    deleteBooking = (booking) =>{
      // console.log(artist)
      fetch('http://localhost:3000/bookings/'+booking.id, {method: 'DELETE'})
      .then(r => r.json())
      .then(()=>{
        this.setState({
          bookings: this.state.bookings.filter(deletedBooking => deletedBooking.id !== booking.id)
        })
      })
    }
  
  
    render(){
      const filteredBikes = this.state.bikes.filter(filterBike => filterBike.category.toLowerCase().includes(this.state.searchText))
    return (
      this.props.currentUser ?
      <div>
        <SearchBar searchBar={this.searchBar} searchText={this.state.searchText}/>
        <BikeList bikes={filteredBikes} bookings={this.state.bookings} addNewBooking={this.addNewBooking}/>
        <BookingList bookings={this.state.bookings} editBookingForm={this.editBookingForm} bikes={this.state.bikes} updatedBookings={this.state.updatedBookings} deleteBooking={this.deleteBooking}
        />
      </div> : null 
      ) 
    }
  }
  
  export default MainContainer
import React from 'react'
import { Button, Form } from 'semantic-ui-react'




class EditBooking extends React.Component{
    //state goes here
    state = {
      pickup_time: '',
      dropoff_time: ''
       
      }

  toggleBooking = (e)=> {
      e.preventDefault()
      // console.log(this.props.updatedBookings)
        let editBooking = {
          pickup_time: this.state.pickup_time,
          dropoff_time: this.state.dropoff_time
//             
        }
        // console.log(editBooking)
        let reqPackage = {
            headers: {"Content-Type": "application/json"},
            method: 'PATCH',
            body: JSON.stringify(editBooking)
        }
        // console.log(reqPackage)
        fetch(`${'http://localhost:3000/bookings'}/${this.props.booking.id}`, reqPackage)
        .then(res => res.json())
        // .then((patchBooking) => console.log(patchBooking))
        .then((patchBooking) => {
          // console.log(patchBooking)
          this.props.editBookingForm(patchBooking)
        })
  
}
    
    
render() {
  return (

    <div className="container">
      <br></br>
      <Form onSubmit={(e)=>this.toggleBooking(e, this.props.updatedBookings)}>
    <Form.Group widths='equal'>
      <Form.Input type="text" name="name" placeholder="pickup time" onChange={(e)=>this.setState({pickup_time: e.target.value})}  value={this.props.pickup_time}/>
    </Form.Group>

    <Form.Group widths='equal'>
      <Form.Input type="text" name="name" placeholder=" dropoff time" onChange={(e)=>this.setState({dropoff_time: e.target.value})}   value={this.props.dropoff_time}/>
    </Form.Group>
   
    <Button type="submit" name="submit" value="Submit" fluid size='small'  color='blue' >
           Submit
    </Button>
  </Form>
    </div>    
    );
  }
    
}
export default EditBooking;
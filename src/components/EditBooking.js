import React from 'react'
import { Button, Form } from 'semantic-ui-react'




class EditBooking extends React.Component{
    //state goes here
    state = {
      from_address: '',
      to_address: ''
       
      }

  toggleBooking = (e)=> {
      e.preventDefault()
      // console.log(this.props.updatedBookings)
        let editBooking = {
          from_address: this.state.from_address,
          to_address: this.state.to_address
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
      <Form.Input type="text" name="name" placeholder=" From Address" onChange={(e)=>this.setState({from_address: e.target.value})}  value={this.props.from_address}/>
    </Form.Group>

    <Form.Group widths='equal'>
      <Form.Input type="text" name="name" placeholder=" To Address" onChange={(e)=>this.setState({to_address: e.target.value})}   value={this.props.to_address}/>
    </Form.Group>
   
    <Button type="submit" name="submit" value="Submit" fluid size='small'  color='blue' >
           Submit
    </Button>
  </Form>
    </div>
  
   
      
      // <Form onSubmit={(e)=>this.toggleBooking(e, this.props.updatedBookings)} className="add-form">
      //   <br></br>
      // <Form.Group widths='equal'>
      //   <Form.Input type="text" name="name" placeholder=" From Address" onChange={(e)=>this.setState({from_address: e.target.value})}  value={this.props.from_address}/>
        
      //   <Form.Input type="text" name="name" placeholder=" To Address" onChange={(e)=>this.setState({to_address: e.target.value})}   value={this.props.to_address}/>
      //   </Form.Group>
      //   <Button type="submit" name="submit" value="Submit" fluid size='small'  color='blue' >
      //       Submit
      //     </Button>
      // </Form>
    
    );
  }
    
}
export default EditBooking;
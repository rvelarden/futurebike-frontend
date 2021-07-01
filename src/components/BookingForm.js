import React from 'react'
import { Form, Button, Card } from 'semantic-ui-react'


class BookingForm extends React.Component{
    
    state = {
        pickup_time: '',
        dropoff_time: '',
        bike_id: '',
        bookings: []
      }
    
      handleSubmit = (e) => {
        e.preventDefault()
        // console.log(this.state)
        let newBooking = {
          pickup_time: this.state.pickup_time,
          dropoff_time: this.state.dropoff_time,
          bike_id: this.state.bike_id
          
        }
        // console.log(newBooking)
        let reqPack = {
          headers: {"Content-Type":"application/json"},
          method: 'POST',
          body: JSON.stringify(newBooking)
        }
        // console.log(reqPack)
        fetch('http://localhost:3000/bookings', reqPack)
        .then(r => r.json())
        .then(bookingData => this.props.addNewBooking(bookingData))
        // .then(console.log)
      }

      render() {
      return ( 
  <Form onSubmit={this.handleSubmit}>
    <br></br>
    
    <Card.Content extra>
      <Form.Input fluid placeholder='Pick-up Date' color='tile' onChange={(e)=>this.setState({pickup_time: e.target.value})} type="text" name="name" />
      </Card.Content>
      <Form.Input fluid placeholder='Drop-off Date' color='tile' onChange={(e)=>this.setState({dropoff_time: e.target.value})} type="text" name="name" />
      <select onChange={(e)=>this.setState({bike_id: e.target.value})}  className="input-text">
           <option>Select category</option>
              {this.props.bikes.map(bike => <option value={bike.id}>{bike.category}</option>)}
      </select>
      <select onChange={(e)=>this.setState({bike_id: e.target.value})}  className="input-text">
           <option>Pricing</option>
              {this.props.bikes.map(bike => <option value={bike.id}>Daily price ${bike.price_day}</option>)}
              {this.props.bikes.map(bike => <option value={bike.id}>Weekly Price ${bike.price_week}</option>)}
              {this.props.bikes.map(bike => <option value={bike.id}>Monthly Price ${bike.price_month}</option>)}
              {this.props.bikes.map(bike => <option value={bike.id}>Yearly Price ${bike.price_year}</option>)}
      </select>
     
   
    
  
  
  <Button type="submit" name="submit" value="Submit" fluid size='small'  color='blue' >
            Submit
          </Button>
  </Form>
        )
      }
    }
export default BookingForm
    
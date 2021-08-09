import React from 'react'
import { Button, Form, Card } from 'semantic-ui-react'
import PlacesAutocomplete, {
  
} from 'react-places-autocomplete';



class EditBooking extends React.Component{
    //state goes here
    state = {
      pickup_location: '',
      dropoff_location: ''
       
      }

      handleChange = (pickup_location) => {
        this.setState({ pickup_location });
       
      };
      handleChangeInput = (dropoff_location) => {
        this.setState({ dropoff_location });
       
      };

      toggleBooking = (e)=> {
      e.preventDefault()
      // console.log(this.props.updatedBookings)
        let editBooking = {
          pickup_location: this.state.pickup_location,
          dropoff_location: this.state.dropoff_location
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
      <Card.Content extra>
          <PlacesAutocomplete
            value={this.state.pickup_location}
            onChange={this.handleChange}
            // onSelect={this.handleSelect}
           
            >{({getInputProps, suggestions, getSuggestionItemProps, loading})=>(<div>
                
                <input{...getInputProps({placeholder: "pick-up address"})} />
                <div>
                    {loading ? <div>...loading</div> : null}
                    {suggestions.map(suggestion=>{
                        const style = {
                        backgroundColor: suggestion.active ? "#39BAE8" : "#ffffff"
                        }
                    return <div{...getSuggestionItemProps(suggestion,{style})}>{suggestion.description}</div>
                    })}
                </div>
            </div>)}</PlacesAutocomplete>

          <PlacesAutocomplete
            value={this.state.dropoff_location}
            onChange={this.handleChangeInput}
            onSelect={this.handleChangeInput}
           
            >{({getInputProps, suggestions, getSuggestionItemProps, loading})=>(<div>
                
                <input{...getInputProps({placeholder: "drop-off address"})} />
                <div>
                    {loading ? <div>...loading</div> : null}
                    {suggestions.map(suggestion=>{
                        const style = {
                        backgroundColor: suggestion.active ? "#fd5f00" : "#ffffff"
                        }
                    return <div{...getSuggestionItemProps(suggestion,{style})}>{suggestion.description}</div>
                    })}
                </div>
            </div>)}</PlacesAutocomplete>
          </Card.Content>
   
    <Button type="submit" name="submit" value="Submit" fluid size='small'  color='blue' >
           Submit
    </Button>
  </Form>
    </div>    
    );
  }
    
}
export default EditBooking;
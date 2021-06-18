
// import Droneproject from './video/droneproject.mp4'
import React from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment
 } from 'semantic-ui-react'

  


class LoginForm extends React.Component {
  state = {
    email: "",
    password: ""
  };

  handleChange = (e, { name, value }) => {
    this.setState({ [name]: value });
  };

  //When form is submitted, make a fetch to "log in the user"
  handleLoginSubmit = () => {
    console.log("attempting to log in")
    fetch("http://localhost:3000/login", {
      method:"POST",
      headers: {
        "Content-Type" : "application/json",
        "Accept" : "application/json"
      },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password
      })
    }).then(res => res.json())
    .then(data => {
       if(data.error_message){
        alert(data.error_message)
            }else{
                //succesful log in
            localStorage.setItem("token", data.token)
            this.props.updateCurrentUser(data.user_data)
        }
        
    })
  }
  render() {
        return (
 <div className="banner" >
    <video autoPlay loop muted>
    {/* <source src={Droneproject} type='video/mp4' /> */}
</video>
   <br></br>
      <Header as='h2' color='teal' textAlign='center'>
        <Image style={{ width: "90px", height: "90px", objectFit: "cover" }} className="logo" title="bike" src="https://i.pinimg.com/originals/2e/d1/15/2ed115c13891fd913afe5d2f32dfa85f.jpg" />
      </Header>
    
  <Grid textAlign='center' style={{ height: '2vh' }} verticalAlign='middle' >
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as='h3'  textAlign='center' >
      <h4 class="ui color2 header">E-Bike Renting Services</h4>
      </Header>
      <br></br>
      <Header as='h1'  textAlign='center' >
      <h1 class="ui color1 header">Log in to your account</h1>
       </Header>
      <Form size='large'
          onSubmit={this.handleLoginSubmit}
          size="mini"
          key="mini"
          loading={this.props.authenticatingUser}
          error={this.props.failedLogin}
          
        >
           <Message
            error
            header={this.props.failedLogin ? this.props.error : null}
          />
        <Segment stacked>
          <Form.Input 
          fluid icon='user' iconPosition='left' placeholder='E-mail address'
              // label="email"
              name="email"
              onChange={this.handleChange}
              value={this.state.email}
           />
         
              <Form.Input
              fluid
              icon='lock'
              iconPosition='left'
              type="password"
         
              placeholder="Password"
              name="password"
              onChange={this.handleChange}
              value={this.state.password}
            />
        
          
          <Button secondary fluid size='medium' type="submit" color='teal' style={{ marginBottom: '1em' }}>
            Log In
          </Button>
        </Segment>
      </Form>
    </Grid.Column>
  </Grid>
  </div>
          )
        }
      } 

export default LoginForm

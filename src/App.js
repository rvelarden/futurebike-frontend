import React, { Fragment } from "react";
import { Route, Switch, Redirect, withRouter } from 'react-router-dom'
import './App.css';
import './index.js'
import LoginForm from './components/LoginForm'
// import NotFound from './'
import MainContainer from './components/MainContainer'
import Nav from './components/Nav'


class App extends React.Component {

  state = {
    currentUser: null
  }

  updateCurrentUser = (user) =>{
    this.setState({
      currentUser: user 
    })
  }

  componentDidMount(){
    console.log("mounted")
    if(localStorage.getItem("token")){
      fetch("http://localhost:3000/decode_token", {
        headers: {
          "Authenticate": localStorage.token
        }
      })
      .then(res => res.json())
      .then(userData => {
        this.updateCurrentUser(userData)
        //if error, don't update the state
      })
    }else{
      console.log("No token found, user is not authenticated")
    }
  }


  render(){
  return (
    <Fragment>
       <Nav user={this.state.currentUser} updateCurrentUser={this.updateCurrentUser}/>
    <Switch>
      <Route exact path='/' render={()=> <Redirect to='/login' />}/>
      {/* <Route exact path="/" component={LoginForm} /> */}
      <Route exact path= '/MainContainer' render={()=>(
      this.state.currentUser ? <MainContainer currentUser={this.state.currentUser}/> : <Redirect to='/login'/>)} />
      <Route exact path='/login' render={()=> (
      this.state.currentUser == null ? <LoginForm updateCurrentUser={this.updateCurrentUser} /> : <Redirect to='/MainContainer/'/>)} />
      {/* <Route component={NotFound} /> */}
    </Switch>
    </Fragment>
    ) 
  }
}

export default withRouter(App)

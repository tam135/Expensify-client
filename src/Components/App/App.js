import React, { Component } from 'react'
//import Header from '../Header/Header'
import LandingPage from '../LandingPage/LandingPage'
import { Route } from 'react-router-dom'
import RegistrationForm from '../RegistrationForm/RegistrationForm';
import LoginForm from '../LoginForm/LoginForm'
export default class App extends Component {
  render() {
    return (
      <div className = 'App'>
        

        <Route exact path ='/' component={LandingPage} />
        <Route path = '/Registration' component={RegistrationForm} />
        <Route path = '/Login' component={LoginForm}/>
      </div>
    )
  }
}

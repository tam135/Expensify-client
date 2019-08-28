import React, { Component } from 'react'
//import Header from '../Header/Header'
import LandingPage from '../LandingPage/LandingPage'
import { Route } from 'react-router-dom'
import RegistrationForm from '../RegistrationForm/RegistrationForm';
import LoginForm from '../LoginForm/LoginForm'
import AddExpense from '../AddExpense/AddExpense'
import Dashboard from '../Dashboard/Dashboard'
import SideBar from '../SideBar/SideBar'

export default class App extends Component {
  render() {
    return (
      <div className='App'>
        <Route exact path='/' component={LandingPage} />
        <Route path='/register' component={RegistrationForm} />
        <Route path='/login' component={LoginForm} />
        <Route path='/addExpense' component={AddExpense} />
        <Route path='/dashboard' component={Dashboard} />
      </div>
    )
  }
}

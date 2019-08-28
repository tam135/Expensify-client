import React, { Component } from 'react'
//import Header from '../Header/Header'
import LandingPage from '../LandingPage/LandingPage'
import { Route, Switch } from 'react-router-dom'
import RegistrationForm from '../RegistrationForm/RegistrationForm';
import LoginForm from '../LoginForm/LoginForm'
import AddExpense from '../AddExpense/AddExpense'
import Dashboard from '../Dashboard/Dashboard'
import ExpenseList from '../ExpenseList/ExpenseList';
import ExpenseItem from '../ExpenseItem/ExpenseItem'
//import SideBar from '../SideBar/SideBar'

export default class App extends Component {
  render() {
    
    return (
      <div className='App'>
        <Switch>
          <Route exact path='/' component={LandingPage} /> 
          <Route exact path='/register' component={RegistrationForm} />
          <Route exact path='/login' component={LoginForm} />
          <Route exact path='/addExpense' component={AddExpense} />
          <Route exact path='/dashboard' component={Dashboard} />
          <Route exact Path='/expenses ' component={ExpenseList} />
        </Switch>
      </div>
    )
  }
}

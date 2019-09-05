import React, { Component } from 'react'
//import Header from '../Header/Header'
import config from '../../config'
import LandingPage from '../LandingPage/LandingPage'
import { Route, Switch } from 'react-router-dom'
import RegistrationForm from '../RegistrationForm/RegistrationForm';
import LoginForm from '../LoginForm/LoginForm'
import AddExpense from '../AddExpense/AddExpense'
import Dashboard from '../Dashboard/Dashboard'
import ExpenseList from '../ExpenseList/ExpenseList';
//import ExpenseItem from '../ExpenseItem/ExpenseItem'
import ExpensesContext from '../../Context/ExpensesContext'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expenses: [],
    };
  }

  addExpense = expense => {
    this.setState({
      expenses: [...this.state.expenses, expense]
    })
  }

  deleteExpense = expenseId => {
    const newExpense = this.state.expenses.filter(ex => ex.id !== expenseId)
    this.setState({
      expenses: newExpense
    })
  }

  componentDidMount() {
    fetch(config.API_ENDPOINT, {
      method: 'GET'
    })
      .then(res => {
        if(!res.ok) {
          return res.json().then(error => Promise.reject(error))
        }
        return res
      })
        .then(res => res.json())
        .then(data => {
          console.log(data)
          this.setState({
            expenses: data,
            error: null
          })
        })
        .catch(err => {
          this.setState({
            error: err.message
          })
        })
  }

  render() {
    const contextValue = {
      expenses: this.state.expenses,
      addExpense: this.addExpense,
      deleteExpense: this.deleteExpense
    }
    return (
      <main className='App'>
        <ExpensesContext.Provider value={contextValue}>
          <Switch>
            <Route exact path='/' component={LandingPage} /> 
            <Route exact path='/register' component={RegistrationForm} />
            <Route exact path='/login' component={LoginForm} />
            <Route exact path='/addExpense' component={AddExpense} />
            <Route exact path='/dashboard' component={Dashboard} />
            <Route exact Path='/expenses ' component={ExpenseList} />
          </Switch>
        </ExpensesContext.Provider>
        
      </main>

    )
  }
}

export default App

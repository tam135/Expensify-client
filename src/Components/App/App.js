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
import UpdateExpense from '../UpdateExpense/UpdateExpense'
import ExpensesContext from '../../Context/ExpensesContext'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expenses: [],
      error: null,
    };
  }

  setExpenses = expenses => { 
    this.setState({
      expenses,
      error: null
    })
  }

  addExpense = expense => {
    this.setState({
      expenses: [...this.state.expenses, expense]
    })
  }

  updateExpense = updatedExpense => {
    this.setState({
      expenses: this.state.expenses.map(ex => 
        (ex.id !== updatedExpense.id) ? ex : updatedExpense
      )
    })
  }

  deleteExpense = expenseId => {
    const newExpenses = this.state.expenses.filter(ex => ex.id !== expenseId)
    this.setState({
      expenses: newExpenses
    })
  }

  componentDidMount() {
    fetch(config.API_ENDPOINT, {
      method: 'GET',
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(res => {
        if(!res.ok) {
          throw new Error(res.status)
        }
        return res.json()
      })
        .then(this.setExpenses)
        .catch(error => this.setState({ error }))
  }

  render() {
    const contextValue = {
      expenses: this.state.expenses,
      addExpense: this.addExpense,
      deleteExpense: this.deleteExpense,
      updateExpense: this.updateExpense
    }
    return (
      <main className='App'>
        <ExpensesContext.Provider value={contextValue}>
          <Switch>
            <Route path ='/update/:expenseId' component={UpdateExpense} />
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

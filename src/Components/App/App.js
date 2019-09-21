import React, { Component } from 'react'
import config from '../../config'
import LandingPage from '../../Routes/LandingPage/LandingPage'
import { Route, Switch, withRouter } from 'react-router-dom'
import Header from '../Header/Header'
import RegistrationForm from '../RegistrationForm/RegistrationForm';
import LoginPage from "../../Routes/LoginPage";
import AddExpense from '../../Routes/AddExpense/AddExpense'
import Statistics from '../../Routes/Statistics/Statistics'
import ExpenseList from '../ExpenseList/ExpenseList';
import UpdateExpense from '../../Routes/UpdateExpense/UpdateExpense'
import ExpensesContext from '../../Context/ExpensesContext'
import PrivateRoute from '../Utils/PrivateRoute'
import PublicOnlyRoute from '../Utils/PublicOnlyRoute'
import SideBar from '../SideBar/SideBar';

const exclusionArray = ["/", "/login", "/register"];
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
      method: "GET",
      headers: {
        "content-type": "application/json",

      }
    })
      .then(res => {
        if (!res.ok) {
          throw new Error(res.status);
        }
        return res.json();
      })
      .then(this.setExpenses)
      .catch(error => this.setState({ error }));
  }
  
  render() {
    
    const { location } = this.props
    const contextValue = {
      expenses: this.state.expenses,
      addExpense: this.addExpense,
      deleteExpense: this.deleteExpense,
      updateExpense: this.updateExpense
    }
    return (
      <div>
        <header className="App__header">
          <Header />
        </header>
        {exclusionArray.indexOf(location.pathname) < 0 && <SideBar />}
        <main className="App">
          <ExpensesContext.Provider value={contextValue}>
            <Switch>
              <PrivateRoute
                path="/update/:expenseId"
                component={UpdateExpense}
              />
              <Route 
                exact path="/" 
                component={LandingPage} />
              <PublicOnlyRoute
                path="/register"
                component={RegistrationForm}
              />
              <PublicOnlyRoute 
                path="/login" 
                component={LoginPage} />
              <PrivateRoute 
                path="/addExpense" 
                component={AddExpense} />
              <Route 
                path="/statistics" 
                component={Statistics} />
              <Route
                exact
                path="/expenses"
                component={() => <ExpenseList expenses={this.state.expenses} />}
              />
            </Switch>
          </ExpensesContext.Provider>
        </main>
      </div>
    );
  }
}

export default withRouter(App);

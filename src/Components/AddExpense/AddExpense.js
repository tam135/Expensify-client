import React, { Component } from 'react'
import Header from '../Header/Header'
import { Textarea, Button } from '../../Utils/Utils'
import SideBar from '../SideBar/SideBar'
import config from '../../config'
import ExpensesContext from '../../Context/ExpensesContext'

import './AddExpense.css'

export default class AddExpense extends Component {
  static contextType = ExpensesContext;

  constructor(props) {
    super(props);
    this.state = {
      error: null,
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    const { date, amount, style, description } = e.target
    const expense = {
      date: date.value,
      amount: amount.value,
      style: style.value,
      description: description.value
    }
    /* this.setState({ error: null }) */
    fetch(config.API_ENDPOINT, {
      method: 'POST',
      body: JSON.stringify(expense),
      headers: {
        "Content-Type": "application/json",
      }
    })
      .then(res => {
        if (!res.ok) {
          return res.json().then(error => {
            throw error
          })
        }
        return res.json()
      })
      .then(data => {
        date.value = ''
        amount.value = ''
        style.value = ''
        description.value = ''
        this.context.addExpense(data)
        this.props.history.push('/expenses')
      })
      .catch(error => {
        console.log(error)
        this.setState({ error })
      })
  }
  
  handleClickCancel = () => {
    this.props.history.push('/expenses')
  };

  render() {
    const { error } = this.state
        return (
          <div className="AddExpensePage">
            <header>
              <Header />
              <SideBar />
            </header>
          
            <form 
              className="AddExpenseForm"
              onSubmit={this.handleSubmit}>
              <div className="AddExpenseForm__Options">
                <label htmlFor="AddExpenseForm__date">Date </label>
                <input 
                  name="date" 
                  type="date" 
                  id="date"
                  required/>
              </div>

              <div className="AddExpenseForm__Options">
                <label htmlFor="AddExpenseForm__amount">Amount </label>
                <input
                  name="amount"
                  type="text"
                  id="amount"
                  required/>
              </div>

              <div className="AddExpenseForm__Options">
                <label htmlFor="AddExpenseForm__category">Category </label>
                <select
                  id="style"
                  name="style">
                  <option value="Bills">Bills</option>
                  <option value="Personal">Personal</option>
                  <option value="Entertainment">Entertainment</option>
                  <option value="Food">Food</option>
                  <option value="Travel">Travel</option>       
                </select>
              </div>

              <div className="description">
                <label htmlFor="AddExpenseForm__description">Description</label>
                <Textarea 
                  value={this.state.description}
                  name='description'
                  id='description'
                  placeholder='description'/>
              </div>

              <div className='AddBookmark__buttons'>
                <button type='button' onClick={this.handleClickCancel}>
                  Cancel
                </button>
                {' '}
                <button type='submit'>
                  Save
                </button>
              </div>
            </form>
          </div>
        );
    }
}

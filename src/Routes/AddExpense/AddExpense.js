import React, { Component } from 'react'
import config from '../../config'
import ExpensesContext from '../../Context/ExpensesContext'
import ExpenseForm from "../../Components/ExpenseForm/ExpenseForm";
import './AddExpense.css'

export default class AddExpense extends Component {
  static contextType = ExpensesContext;

  constructor(props) {
    super(props);
    this.state = {
      error: null,
    };
  }

  handleSubmit = (expense, callback) => {
    this.setState({ error: null }) 
    fetch(config.API_ENDPOINT, {
      method: "POST",
      body: JSON.stringify(expense),
      headers: {
        "content-type": "application/json",
      }
    })
      .then(res => {
        if (!res.ok) return res.json().then(error => Promise.reject(error));

        return res.json();
      })
      .then(data => {
        callback(data);
        this.context.addExpense(data);
        this.props.history.push("/expenses");
      })
      .catch(error => {
        console.error(error);
        this.setState({ error });
      });
  }
  
  handleClickCancel = () => {
    this.props.history.push('/expenses')
  };

  render() {
    const { error } = this.state
        return (
          <div className="AddExpensePage">
            <ExpenseForm 
              error={error}
              onSubmit={this.handleSubmit}
              onCancel={this.handleClickCancel}
            />
          </div>
        );
    }
}

import React, { Component } from 'react'
import ExpensesContext from "../../Context/ExpensesContext";
import config from "../../config";
import ExpenseForm from '../ExpenseForm/ExpenseForm'
import TokenService from "../../Services/token-service";

export default class UpdateExpense extends Component {
    static contextType = ExpensesContext

    state = {
        error: null,
        id: null,
        date: null,
        amount: null,
        description: null,
        style: null,
    };
    componentDidMount() {
        const { expenseId } = this.props.match.params
        fetch(config.API_ENDPOINT + `/${expenseId}`, {
          method: "GET",
          headers: {
            "content-type": "application/json",
            'authorization': `basic ${TokenService.getAuthToken()}`
          }
        })
          .then(res => {
            if (!res.ok) return res.json().then(error => Promise.reject(error));

            return res.json();
          })
          .then(responseData => {
            this.setState({
              id: responseData.id,
              date: responseData.date,
              amount: responseData.amount,
              style: responseData.style,
              description: responseData.description
            });
          })
          .catch(error => {
            console.error(error);
            this.setState({ error });
          });
    }
    handleSubmit = (expense, callback) => {
        this.setState({ error: null })
        const { expenseId } = this.props.match.params
        fetch(config.API_ENDPOINT + `/${expenseId}`, {
        method: 'PATCH',
        body: JSON.stringify(expense),
        headers: {
            'content-type': 'application/json',
        },
        })
        .then(res => {
            if (!res.ok)
            return res.json().then(error => Promise.reject(error))
        })
        .then(() => {
            callback(callback)
            this.context.updateExpense(expense)
            this.props.history.push('/expenses')
        })
        .catch(error => {
            console.error(error)
            this.setState({ error })
        })
    }
    handleClickCancel = () => {
        this.props.history.push('/expense')
    };

    render() {
        const { error, id, date, amount, style, description } = this.state
        const expense = { id, date, amount, style, description }
        return (
          <section className="EditExpense">
            {id && (
              <ExpenseForm
                onSubmit={this.handleSubmit}
                onCancel={this.handleClickCancel}
                error={error}
                expense={expense}
              />
            )}
          </section>
        );
    }
}

import React, { Component } from 'react'

const noop = () => {};

class ExpenseForm extends Component {
  static defaultProps = {
    onSubmit: noop,
    onCancel: noop,
    expense: {}
  };

  state = {
    id: this.props.expense.id || undefined,
    date: this.props.expense.date || "",
    amount: this.props.expense.amount || "",
    style: this.props.expense.style || "",
    description: this.props.expense.description || ""
  };

  handleChangeDate = e => {
    this.setState({ date: e.target.value });
  };

  handleChangeAmount = e => {
    this.setState({ amount: e.target.value });
  };
  handleChangeStyle = e => {
    this.setState({ style: e.target.value });
  };

  handleChangeDescription = e => {
    this.setState({ description: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { id, date, amount, style, description } = this.state;
    this.props.onSubmit(
      {
        id,
        date,
        amount,
        style,
        description
      },
      this.resetFields
    );
  };

  resetFields = newFields => {
    this.setState({
      id: newFields.id || undefined,
      date: newFields.date || "",
      amount: newFields.amount || "",
      style: newFields.style || "",
      description: newFields.description || "",
      
    });
  };
  render() {
      const { error, onCancel } = this.props
      const { id, date, amount, style, description } = this.state
    return (
      <form className="AddExpenseForm" onSubmit={this.handleSubmit}>
        <div className="ExpenseForm__error" role="alert">
          {error && <p>{error.message}</p>}
        </div>
        {id && <input type="hidden" name="id" value={id} />}

        <div className="AddExpenseForm__Options">
          <label htmlFor="AddExpenseForm__label">Date </label>
          <input
            name="date"
            type="date"
            id="date"
            value={date}
            required
            onChange={this.handleChangeDate}
          />
        </div>

        <div className="AddExpenseForm__Options">
          <label htmlFor="AddExpenseForm__label">Amount </label>
          <input
            name="amount"
            type="text"
            value={amount}
            id="amount"
            required
            onChange={this.handleChangeAmount}
          />
        </div>

        <div className="AddExpenseForm__Options">
          <label htmlFor="AddExpenseForm__label">Category </label>
          <select
            id="style"
            name="style"
            value={style}
            onChange={this.handleChangeStyle}
          >
            <option value="blank">Choose Category</option>
            <option value="Transportation">Transportation</option>
            <option value="Bills">Bills</option>
            <option value="Personal">Personal</option>
            <option value="Entertainment">Entertainment</option>
            <option value="Food">Food</option>
            <option value="Travel">Travel</option>
          </select>
        </div>

        <div className="description">
          <label htmlFor="AddExpenseForm__label">Description </label>
          <textarea
            value={description}
            name="description"
            id="description"
            placeholder="What did you spend your money on?"
            onChange={this.handleChangeDescription}
          />
        </div>

        <div>
          <button
            type="button"
            onClick={onCancel}
            className="AddExpenseForm__button"
          >
            Cancel
          </button>{" "}
          <button type="submit" className="AddExpenseForm__button">
            Save
          </button>
        </div>
      </form>
    );
  }
}

export default ExpenseForm

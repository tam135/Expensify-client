import React, { Component } from "react";
import ExpensesContext from '../../Context/ExpensesContext'
import ExpenseList from '../ExpenseList/ExpenseList'
import "./Filters.css";

export default class Filters extends Component {
  static contextType = ExpensesContext;

  constructor(props) {
    super(props)
    this.toggleSortDate = this.toggleSortDate.bind(this)
     this.state = {
       expenses: null,
       originalExpenses: null
     };
  }

  static contextType = ExpensesContext;

   sortDateNew = () => {
    const { expenses } = this.context;
    let newerDates = expenses.sort(
      (a, b) => new Date(b.date) - new Date(a.date)
    );
    this.setState({
      expenses: newerDates
    });
    console.log(newerDates);
  };

  sortDateOld = () => {
    const { expenses } = this.context;
    let olderDates = expenses.sort(
      (a, b) => new Date(a.date) - new Date(b.date)
    );
    this.setState({
      expenses: olderDates
    });
    console.log(olderDates);
  };

  amountAscending = () => {
    const { expenses } = this.context;
    let ascendingList = expenses.sort(
      (a, b) => parseFloat(a.amount) - parseFloat(b.amount)
    );
    this.setState({
      expenses: ascendingList
    });
  };

  amountDescending = () => {
    const { expenses } = this.context;
    let descendingList = expenses.sort(
      (a, b) => parseFloat(b.amount) - parseFloat(a.amount)
    );
    this.setState({
      expenses: descendingList
    });
  };

  filterCategory = e => {
    const { expenses } = this.context;
    const styles = [e.target.value];
    let filteredList = expenses.filter(i => styles.includes(i.style));
    this.setState({
      expenses: filteredList
    });
    console.log(filteredList);
  };
  render() {
    const {expenses} = this.state
    return (
      <ExpenseList 
      sortDateNew={this.sortDateNew}
      sortDateOld={this.sortDateOld}
      amountAscending={this.amountAscending}
      amountDescending={this.amountDescending}
      filterCategory={this.filterCategory}
      />
    );
  }
}

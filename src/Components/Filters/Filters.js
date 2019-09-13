import React, { Component } from "react";
import ExpensesContext from '../../Context/ExpensesContext'
import "./Filters.css";

export default class Filters extends Component {
  static contextType = ExpensesContext;
  constructor(props) {
    super(props)
    this.toggleSortDate = this.toggleSortDate.bind(this)
     this.state = {
      expenses: [],
      isOldestFirst: true 
    }
  }
  
  toggleSortDate = event => {
    const { expenses } = this.context;
    const sortByDate = expenses.date.sort(function(a, b) {
      a = a
        .split("/")
        .reverse()
        .join("");
      b = b
        .split("/")
        .reverse()
        .join("");
      return a > b ? 1 : a < b ? -1 : 0;
    });
    
    /* console.log(sortByDate) */
    /* console.log(expense.date) */
  }

  
  render() {
    const {expenses} = this.state
    return (
      <div>
        <section className="ExpenseList__Filters">
          <label htmlFor="ExpenseList__Dates"></label>
          <button onClick={this.toggleSortDate}>Sort By Date</button>

          <label htmlFor="ExpenseList_Amount"></label>
          <select>
            <option value="LowToHigh">Lowest to Highest</option>
            <option value="HighToLow">Highest to Lowest</option>
          </select>

          <label htmlFor="ExpenseList_Category"></label>
          <select>
            <option value="AllCategories">All Categories</option>
            <option value="Transportation">Transportation</option>
            <option value="Bills">Bills</option>
            <option value="Personal">Personal</option>
            <option value="Entertainment">Entertainment</option>
            <option value="Food">Food</option>
            <option value="Travel">Travel</option>
          </select>
        </section>
      </div>
    );
  }
}

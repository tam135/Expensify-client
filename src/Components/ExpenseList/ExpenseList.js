import React, { Component } from 'react'
import ExpenseItem from '../ExpenseItem/ExpenseItem'

import ExpensesContext from '../../Context/ExpensesContext'
import './ExpenseList.css'

export default class ExpenseList extends Component {
  static defaultProps = {
    bookmarks: []
  };

  static contextType = ExpensesContext;
    
  render() {
        const { expenses } = this.context
        return (
          <div>
            <nav>
             
            </nav>
            <section className="ExpenseList__Filters">
              <label htmlFor="ExpenseList__Dates"></label>
              <select>
                <option value="Date">Daily</option>
                <option value="Weekly">Weekly</option>
                <option value="Monthly">Monthly</option>
              </select>

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
           
            <section className="ExpenseList">
              <ul>
                {expenses.map(expense => (
                  <ExpenseItem
                    key={expense.id}
                    date={expense.Date}
                    amount={expense.Amount}
                    style={expense.Style}
                    description={expense.Description}
                    {...expense}
                  />
                ))}
              </ul>
            </section>
          </div>
        );

    }
}

import React, { Component } from 'react'
import ExpenseItem from '../ExpenseItem/ExpenseItem'
import ExpensesContext from '../../Context/ExpensesContext'
import './ExpenseList.css'

export default class ExpenseList extends Component {
  constructor(props) {
    super(props) 
    this.state = {
      expenses: []
    }
  }
/*   static defaultProps = {
    expenses: []
  };  */
 
  static contextType = ExpensesContext;

   
  amountAscending = event => {
    const { expenses } = this.context; 
    let newList = expenses.sort(
      (a, b) => parseFloat(a.amount) - parseFloat(b.amount)
    );
    this.setState ({
      expenses: newList
    })
  }

  amountDescending = event => {
    const { expenses } = this.context; 
    let newList = expenses.sort(
      (a, b) => parseFloat(b.amount) - parseFloat(a.amount)
    );
    this.setState ({
      expenses: newList
    })
  }


  render() {
        const { expenses } = this.context
        return (
          <div>
            <section className="ExpenseList__Filters">
              <label htmlFor="ExpenseList__Dates"></label>
              <select>
                <option>Sort By Date</option>
                <option value="OldToNew">Oldest to New</option>
                <option value="NewToOld">Newest to Oldest</option>
              </select>

              <label htmlFor="ExpenseList_Amount"></label>
              <select
                onChange={e => {
                  if (e.target.value === "LowToHigh") {
                    this.amountAscending();
                  } else if (e.target.value === "HighToLow") {
                    this.amountDescending();
                  }
                }}
              >
                <option>Sort By Amount</option>
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

import React, { Component } from 'react'
import ExpenseItem from '../ExpenseItem/ExpenseItem'
import Header from '../Header/Header'
import SideBar from '../SideBar/SideBar'
import './ExpenseList.css'

export default class ExpenseList extends Component {

    render() {
        const expenses = [
            {
                id: 1, Date: '8/20/2019', Amount: '9.99', Category: 'Food',
                Description: 'Lunch at work'
            },
            {
                id: 2, Date: '8/21/2019', Amount: '199.99', Category: 'Bills',
                Description: 'Electricity Bill'
            },
            {
                id: 3, Date: '8/22/2019', Amount: '30.00', Category: 'Entertainment',
                Description: 'Movie ticket and large popcorn'
            }
        ]

        return (
          <div>
            <nav>
              <Header />
              <SideBar />
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
                    category={expense.Category}
                    description={expense.Description}
                    {...expense}
                  />
                ))}
              </ul>
            </section>
          </div>
        );
        //TODO: Add filter by dates, amount, category
    }
}

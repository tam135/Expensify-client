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
            <Header />
            <SideBar />
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
        
    }
}

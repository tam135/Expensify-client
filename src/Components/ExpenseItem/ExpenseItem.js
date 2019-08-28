import React from 'react'
import './ExpenseItem.css'

const ExpenseItem = (props) => {
    return (
      <div className="Items">
        <section className="ExpenseItem">
          <p>{props.date}</p>
          <p>{props.amount}</p>
          <p>{props.category}</p>
          <p>{props.description}</p>
        </section>
      </div>
    );
}

export default ExpenseItem

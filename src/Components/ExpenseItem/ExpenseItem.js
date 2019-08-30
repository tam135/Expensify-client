import React from 'react'
import './ExpenseItem.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
const ExpenseItem = (props) => {
    return (
      <div className="expense-container">
        <div className="expense-header">

          <div className="expense-item">
            <span className='ExpenseItem__Info'>{props.date}</span>
          </div>

          <div className="expense-item">
            <span className='ExpenseItem__Info'>{props.amount}</span>
          </div>

          <div className="expense-item">
            <span className='ExpenseItem__Info'>{props.category}</span>
          </div>

          <div className="expense-item">
            <span className='ExpenseItem__Info'>{props.description}</span> 
          </div>

        </div>
        <Link to='#'>
          <FontAwesomeIcon className="edit-delete" icon="edit" />
        </Link>
        
        <Link to='#'>
          <FontAwesomeIcon className="edit-delete" icon="trash-alt" />
        </Link>
      </div>
    );
}

export default ExpenseItem

import React from 'react'
import './ExpenseItem.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ExpensesContext from '../../Context/ExpensesContext';
import config from '../../config'
import { Link } from 'react-router-dom'

function deleteExpense(expenseId, cb) {
  fetch(config.API_ENDPOINT + `/${expenseId}`, {
    method: 'DELETE',
    headers: {
      'content-type': 'application/json',
    }
  })
    .then(res => {
      if(!res.ok) {
        return res.json().then(error => {
          throw error
        })
      }
      return res.json()
    })
    .then(data => {
      console.log({ data })
      cb(expenseId)
      this.props.history.push('/dashboard')
    })
    .catch(error => {
      console.log(error)
    })
}
export default function ExpenseItem(props) {
    return (
      <ExpensesContext.Consumer>
        {(context) => (
          <div className="expense-container">
          <div className="expense-header">
            <div className="expense-item">
              <span className='ExpenseItem__Info'>{props.date.toLocaleString()}</span>
            </div>
  
            <div className="expense-item">
              <span className='ExpenseItem__Info'>{props.amount}</span>
            </div>
  
            <div className="expense-item">
              <span className='ExpenseItem__Info'>{props.style}</span>
            </div>
  
            <div className="expense-item">
              <span className='ExpenseItem__Info'>{props.description}</span> 
            </div>
          </div>
          
          <button>
            <FontAwesomeIcon className="edit-delete" icon="edit" />
          </button>
        
          
          <button onClick={() => {deleteExpense(props.id, context.deleteExpense)}}>
          <FontAwesomeIcon className="edit-delete" icon="trash-alt" />
          </button>
        </div>
        )}
      </ExpensesContext.Consumer>
          
       
    )
}

ExpenseItem.defaultProps = {
  onClickDelete: () => {},
}

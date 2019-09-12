import React from 'react'
import './ExpenseItem.css'
import PropTypes from "prop-types";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ExpensesContext from '../../Context/ExpensesContext';
import config from '../../config'
import { Link } from 'react-router-dom'

function deleteExpense(expenseId, callback) {
  fetch(config.API_ENDPOINT + `/${expenseId}`, {
    method: "DELETE",
    headers: {
      "content-type": "application/json"
    }
  })
    .then(res => {
      if (!res.ok) return res.json().then(error => Promise.reject(error));
    })
    .then(data => {
      console.log({ data });
      callback(expenseId);
    })
    .catch(error => {
      console.log(error);
    });
}

export default function ExpenseItem(props) {
    return (
      <ExpensesContext.Consumer>
        {(context) => (
          <div className="expense-container">
          <div className="expense-header">
            <div className="expense-item">
              <span className='ExpenseItem__Info'>{props.date}</span>
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
          
          <Link to={`/update/${props.id}`}>
            <FontAwesomeIcon className="edit-delete" icon="edit" />
          </Link>
          <button 
            onClick={() => {deleteExpense(props.id, context.deleteExpense)}}
            className="button__edit-delete">
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

ExpenseItem.propTypes = {
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  date: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  desciption: PropTypes.string,
  style: PropTypes.string.isRequired,
  onClickDelete: PropTypes.func
};
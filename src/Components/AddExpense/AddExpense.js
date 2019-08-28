import React, { Component } from 'react'
import Header from '../Header/Header'
import { Textarea, Button } from '../../Utils/Utils'
import './AddExpense.css'

export default class AddExpense extends Component {
    render() {
        return (

            <div className="AddExpensePage">
                <nav className='Header'>
                    <Header />
                </nav>

                <form className='AddExpenseForm'>
                    <div className='AddExpenseForm__Options'>
                        <label htmlFor='AddExpenseForm__date'>
                            Date
                            </label>
                        <input
                            name='date'
                            type='date' />
                    </div>

                    <div className='AddExpenseForm__Options'>
                        <label htmlFor='AddExpenseForm__amount'>
                            Amount
                            </label>
                        <input
                            name='amount'
                            type='text'
                            required
                            id='AddExpenseForm__amount'>
                        </input>
                    </div>

                    <div className='AddExpenseForm__Options'>
                        <label htmlFor='AddExpenseForm__category'>
                            Category
                            </label>
                        <select>
                            <option value="Bills">Bills</option>
                            <option value="Personal">Personal</option>
                            <option value="Entertainment">Entertainment</option>
                            <option value="Food">Food</option>
                            <option value="Travel">Travel</option>
                        </select>
                    </div>

                    <div className='description'>
                        <label htmlFor='AddExpenseForm__description'>
                            Description
                            </label>
                        <Textarea>
                            
                        </Textarea>
                    </div>

                    <Button>
                        Add Expense
                    </Button>
                </form>
            </div>
        )
    }
}

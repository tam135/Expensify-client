import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './SideBar.css'
export default class SideBar extends Component {
    render() {
        return (
            <div className='sidebar'>
                 
                        <Link to='/dashboard'>
                            <li>
                                 Dashboard
                            </li>
                        </Link>


                        <Link to='/expenses'>
                            <li>
                                Expenses
                            </li>
                        </Link>

                        <Link to='/addExpense'>
                            <li>
                                Add Expense
                            </li>
                            
                        </Link>

            </div>
        )
    }
}

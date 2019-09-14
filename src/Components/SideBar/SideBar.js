import React from 'react'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

import './SideBar.css'

const SideBar = () => {
        return (
          <div className="sidebar">
            <li>
              <NavLink to="/dashboard" activeClassName="active">
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink to="/expenses" activeClassName="active">
                Expenses
              </NavLink>
            </li>
            <li>
              <NavLink to="/addExpense" activeClassName="active">
                Add Expense
              </NavLink>
            </li>
          </div>
        );
}

export default SideBar

import React from 'react'
import { NavLink } from 'react-router-dom'

import './SideBar.css'

const SideBar = () => {
        return (
          <div className="sidebar">
            <li>
              <NavLink to="/expenses" activeClassName="active">
                Expenses
              </NavLink>
            </li>
            <li>
              <NavLink to="/statistics" activeClassName="active">
                Statistics
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

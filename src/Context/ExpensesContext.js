import React from 'react'

const ExpensesContext = React.createContext({
    expenses: [],
    addExpense: () => {},
    deleteExpense: () => {},
    updateExpense: () => {},
})

export default ExpensesContext
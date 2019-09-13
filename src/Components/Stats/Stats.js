import React, { Component } from 'react'
import ExpensesContext from "../../Context/ExpensesContext";

export default class Stats extends Component {
    constructor(props) {
        super(props)
        this.state = {
            /* totalEntries: this.props.expenses.length, */
            avgAmountSpent: 0,
        }
    }
    static contextType = ExpensesContext;
   /*  componentWillMount() {
        const expenses = this.context.expenses
        let totalSpent = 0 
        

        expenses.forEach((expense) => {

            // calculate avg amount spent
            totalSpent += expense.amount 
            this.setState(() => {
                return {
                    avgAmountSpent: (totalSpent / expenses.length).toFixed(1)
                }
            })
        })
    } */
    render() {
        return (
            <div>
                
            </div>
        )
    }
}

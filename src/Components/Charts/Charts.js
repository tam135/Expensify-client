import React, { Component } from 'react'
import './Charts.css'
import {Bar, Line, Pie} from 'react-chartjs-2';
import ExpensesContext from "../../Context/ExpensesContext";

export default class Charts extends Component {
    constructor(props) {
        super(props);
        this.state = {
          chartData: {
            labels: [ "Transportation", "Bills", "Food", "Personal", "Entertainment", "Food", "Travel"],
            datasets: [
              {
                label: "Amount spend per category",
                data: [300, 500, 150, 545, 95, 20, 240],
                backgroundColor: [
                  "rgba(255, 99, 132, 0.6)",
                  "rgba(54, 162, 235, 0.6)",
                  "rgba(255, 206, 86, 0.6)",
                  "rgba(75, 192, 192, 0.6)",
                  "rgba(153, 102, 255, 0.6)",
                  "rgba(255, 159, 64, 0.6)",
                  "rgba(255, 99, 132, 0.6)"
                ]
              }
            ]
          }
        };
    }
    render() {
        return (
          <div className="chart">
            <Bar
              data={this.state.chartData}
            />
          </div>
        );
    }
}

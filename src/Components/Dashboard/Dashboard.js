import React, { Component } from "react";
import "./Dashboard.css";
import ExpensesContext from "../../Context/ExpensesContext";
import { HorizontalBar } from "react-chartjs-2";
import { Doughnut } from "react-chartjs-2";

let check = true;
export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [
        "Transportation",
        "Bills",
        "Personal",
        "Entertainment",
        "Food",
        "Travel"
      ],
      expenses: null,
      originalExpenses: null
    };
    check = true;
  }
  static contextType = ExpensesContext;
  componentDidUpdate(prevProps, prevState) {
    if (this.hasExpenses()) {
      if (
        prevState.originalExpenses !== this.context.expenses &&
        !this.state.originalExpenses
      ) {
        this.setExpenses();
      } else {
        console.log("no changes");
      }
    }
  }
  componentDidMount() {
    if (this.hasExpenses()) {
      this.setExpenses();
    }
  }
  hasExpenses() {
    return this.context && Array.isArray(this.context.expenses);
  }

  setExpenses() {
    console.log("updating expenses");
    this.setState({
      originalExpenses: this.context.expenses,
      expenses: this.state.expenses || this.context.expenses
    });
  }
  render() {
    let data1 = {
      labels: this.state.categories,
      datasets: [
        {
          label: " total amount spent per category",
          backgroundColor: [
            "#36A2EB",
            "#FFCE56",
            "#FCEF2D",
            "#2D5BFC",
            "#2DFC45 "
          ],
          borderColor: "rgba(255,99,132,1)",
          data: []
        }
      ]
    };
    let data2 = {
      datasets: [
        {
          data: [],
          backgroundColor: [
            "#CCC",
            "#36A2EB",
            "#FFCE56",
            "#FCEF2D",
            "#2D5BFC",
            "#2DFC45 "
          ]
        }
      ],
      labels: this.state.categories
    };
    const option = {
      tooltips: {
        callbacks: {
          label: function(tooltipItem, data) {
            var dataset = data.datasets[tooltipItem.datasetIndex];
            var meta = dataset._meta[Object.keys(dataset._meta)[0]];
            var total = meta.total;
            var currentValue = dataset.data[tooltipItem.index];
            var percentage = parseFloat(
              ((currentValue / total) * 100).toFixed(1)
            );
            return currentValue + "%";
          },
          title: function(tooltipItem, data) {
            return data.labels[tooltipItem[0].index];
          }
        }
      },
      maintainAspectRatio: true
    };
    let total_amount_Spend = 0;
    let count_entries = 0;
    if (this.state.expenses && check) {
      let sum_of_each_category = [];
      let total_entries_of_each_category = [];
      this.state.categories.forEach((checker, index) => {
        let sum = 0,
          count = 0;
        this.state.expenses.forEach(category1 => {
          if (checker.toLowerCase().includes(category1.style.toLowerCase())) {
            sum += Number(category1.amount);
            count += 1;
          }
        });
        sum_of_each_category.push(sum);
        total_amount_Spend += sum;
        total_entries_of_each_category.push(count);
      });
      total_entries_of_each_category.forEach(val => {
        count_entries += val;
      });
      console.log(count_entries);
      sum_of_each_category.forEach(val => {
        data1.datasets[0].data.push(val);
        let temp = (val / total_amount_Spend) * 100;
        data2.datasets[0].data.push(temp.toFixed(0));
      });
      check = false;
    }
    return (
      this.state.expenses && (
        <div className="dashboard" style={{ marginLeft: "20vh" }}>
          {/* <h1 style={{ textAlign: "center" }}>Charts and Stats </h1> */}
          <h3>Total Entries : {count_entries}</h3>
          <h3>Total Amount Spend : {total_amount_Spend}</h3>
          <h3>
            Average amount spent per expense :{" "}
            {(total_amount_Spend / count_entries).toFixed(1)}
          </h3>
          <HorizontalBar data={data1} options={{ maintainAspectRatio: true }} />
 
          <h4 style={{ textAlign: "center" }}>
            Number of entries per category
          </h4>
          <Doughnut data={data2} options={option} />
      
        </div>
      )
    );
  }
}

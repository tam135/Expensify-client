import React from 'react'
import { Button } from "../Utils/Utils";
import { Link } from 'react-router-dom'
import './LandingPage.css'
import screenshot from './addexpense.png'
import donut from './donut.png'

const LandingPage = () =>{
        return (
          <div className="LandingPage__app">
            <div className="LandingPage__container">
              <h1 className="LandingPage__title">Expensity</h1>
              <section className="LandingPage__Tagline">
                <h2>
                  Stay on track with your spending so you can start saving.
                </h2>
                <Link to="/expenses">
                  <Button className="button demo-button">Explore</Button>
                </Link>
              </section>
              <section className="LandingPage__description1">
                <h3>Keep track of your spending</h3>
                <p>
                  The key to saving money is knowing how much you can afford and
                  what to spend it on. Expensify provides a simple way to record
                  your expenses and seeing where your money goes.
                </p>
                <img
                  src={screenshot}
                  alt="add-expense form"
                  className="screenshot1"
                />
              </section>

              <section className="LandingPage__description2">
                <h3>Expensity Dashboard</h3>
                <p>
                  Think you waste too much on food? These charts and statistics
                  will help you understand what to spend less on.
                </p>
                <img src={donut} alt="charts" className="screenshot2" />
              </section>
              <section className="button-container">
                <footer>Tam Phan © 2019</footer>
              </section>
            </div>
          </div>
        );
}

export default LandingPage



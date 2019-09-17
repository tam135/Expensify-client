import React from 'react'
import { Button } from "../Utils/Utils";
import { Link } from 'react-router-dom'
import './LandingPage.css'
import gif1 from './gif1.gif'
import gif2 from './gif2.gif'

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
                  The key to saving money is knowing how much you can afford to
                  spend. Expensity provides a simple way to record your expenses
                  and seeing where your money goes.
                </p>
                <img
                  src={gif1}
                  alt="add-expense form"
                  className="screenshot1"
                />
              </section>

              <section className="LandingPage__description2">
                <h3>See your progress</h3>
                <p>
                  Spend too much money without realizing it? These charts and
                  statistics updates as you record your expenses and will help
                  you understand what you spend too much on.
                </p>
                <img src={gif2} alt="charts" className="screenshot2" />
              </section>
            </div>
            <footer>Tam Phan © 2019</footer>
          </div>
        );
}

export default LandingPage


